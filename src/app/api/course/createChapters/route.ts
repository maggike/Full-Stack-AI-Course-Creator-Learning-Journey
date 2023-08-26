import { NextResponse } from "next/server";
import { createChaptersSchema } from "@/validators/course";
import { ZodError } from "zod";
import { getUnsplashImage } from "@/lib/unsplash";
import { prisma } from "@/lib/db";
import { strict_output } from "@/lib/gpt";


export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { title, units } = createChaptersSchema.parse(body)
        type outputUnits = {
            title: String;
            chapters: {
                youtube_search_query: string;
                chapter_title: string;
            }[];
        }[];
        let output_units: outputUnits = await strict_output(
            "You are an AI capable of curating course content, coming up with relevant chapter titles, and finding relevant youtube videos for each chapter",
            new Array(units.length).fill(
                `It is your job to create a course about ${title}. The user has requested to create chapters for each of the units. Then, for each chapter, provide a detailed youtube search query that can be used to find an informative educational vidoe for each chapter. Each query should give an educational informative course in youtube.`
            ),
            {
                title: "title of the unit",
                chapters:
                    "an array of chapters, each chapter should have a youtube_search_query and a chapter_title key in the JSON object",
            }
        );
        const imageSearchTerm = await strict_output(
            "you are an AI capable of finding the most relevant image for a course",
            `please provide a good image search term for the title of a course about ${title}. This search term will be fed into the unsplash api so make sure it is a good search term that will return good results`,
            {
                image_search_term: "a good search term for the title of the course"
            }
        )
        const course_image = await getUnsplashImage(imageSearchTerm.image_search_term);
        const course = await prisma.course.create({
            data: {
                name: title,
                image: course_image,
            },
        })

        for (const unit of output_units) {
            const title = unit.title;
            const prismaUnit = await prisma.unit.create({
                data: {
                    name: title,
                    courseId: course.id
                }
            })
            await prisma.chapter.createMany({
                data: unit.chapters.map((chapter) => {
                    return {
                        name: chapter.chapter_title,
                        youtubeSearchQuery: chapter.youtube_search_query,
                        unitId: prismaUnit.id

                    }
                })
            })
        }
        console.log(output_units);
        return NextResponse.json({ course_id: course.id });

    } catch (error) {
        if (error instanceof ZodError) {
            return new NextResponse("invalid body", { status: 400 })
        }
        console.error(error)
    }
}