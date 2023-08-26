'use client'

import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
//import { UserInfo } from 'os'
//import { AdapterUser } from 'next-auth/adapters'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import UserAvatar from './UserAvatar'
//import { userAgent } from 'next/server'


type Props = {
    user:User
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar user={user}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <div className='flex items-center justify-start gap-2 p-2'>
                <div className='flex flex-col space-y-1 leading-none'>

                </div>
                {user?.name && (<p className='font-medium'>{user.name}</p>)}
                {user?.email && (<p className='w-{200px} truncate text-sm text-secondary-foreground'>{user.email}</p>)}
            </div>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onSelect={()=>{
                signOut();


            }}
            className='text-red-600 cursor-pointer'
            >Sign out <LogOut className="w-4 h-4 ml-2"/></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav