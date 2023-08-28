## Learning Journey- Full-Stack-AI-Course-Generator
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a fully-functioning AI web application that generates courses based on the title and the units you provide it. It uses OpenAI's API using prompt-engineering to utilize user provided data to generate the courses. Any topic can be provided, the ideas are ENDLESS! It has a login feature to login through your Google account (used Google Cloud API) and also generates relevant images using Unsplash API. The relevant YouTube videos are generated through YouTube's API and the Summary section summarizes the video transcript. It uses Prisma, an open-source ORM which generates all the configuartions for the MySQL-compatible serverless database - PlanetScale.

## Getting Started

First, run the development server on your terminal - no need to use an IDE. Make sure that you are in the current directory of learning-journey-yt before beginning.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page should be like the one shown below once you sign in:



![lj1](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/aaf6104f-a818-458d-8e1a-9e658bf16bd6)




You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



The Gallery page shows the courses you have generated using Learning Journey. Here are some I generated below! You can generate courses from the simplest to the most complicated topics....



![lj2](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/9beb8222-9928-4983-911c-e48a30ecd7d1)



Click on the create course button to create your first course!! Input the titles and units you want. You can input as many units as you want by clicking on "Add Unit". The default value is 3 units. 



![lj-3](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/026b31ae-c396-4f61-a4a4-98fdc10dd373)



All the pages can be viewed in both light and dark themes ! My favourite is the dark theme.



![lj-4](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/bc8c7ddf-fd4c-409f-8fdc-d1109955f20d)



Once the course has been generated the page should look like the one shown below.



![lj-5](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/270352e9-2ed7-4045-94db-b0c3c2c7b7b6)



Each chapter within the course will have a relevant video generated from YouTube along with a short summary summarising the video's transcript.



![lj-11](https://github.com/maggike/Full-Stack-AI-Course-Creator-Learning-Journey/assets/140755916/5f995580-b0fd-4cb9-967f-81557fb42a2b)



You can return to the course generated anytime from the course gallery.
Have fun creating courses!



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
