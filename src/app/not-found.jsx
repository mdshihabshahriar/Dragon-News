import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
            <h2 className="text-5xl font-bold text-purple-500">This page is not found</h2>
            <Link href="/"><button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Go back home </button></Link>
        </div>
    );
};

export default NotFound;