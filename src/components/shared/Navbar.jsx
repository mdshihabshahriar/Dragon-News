'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    return (
        <div className="flex justify-between container mx-auto mt-6 gap-4">
            <div></div>
            <ul className="flex justify-between items-center gap-4 text-gray-700">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            {isPending ? (
                <span className="loading loading-spinner loading-lg"></span>
            ) : user ? (
            <div className="flex items-center gap-2">
                <p>Hello, {user.name}</p>
                <Image className='rounded-full' src={user.image || userAvatar} alt="User Avatar" width={40} height={40} />
                <button className="btn btn-neutral" onClick={async () => await authClient.signOut()}>Logout</button>
            </div>
            ) : (
            <div>
                <button className="btn btn-neutral"><Link href="/login">Login</Link></button>
            </div>
            )}
        </div>
    );
};

export default Navbar;