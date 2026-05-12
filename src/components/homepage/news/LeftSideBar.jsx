import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {
                  categories.news_category.map(category => {
                      return <li key={category.category_id} className={` rounded-md font-bold text-center text-md ${activeId === category.category_id && 'bg-slate-100  text-red-500'}`}><Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link></li>
                  })
              }
            </ul>
        </div>
    );
};

export default LeftSideBar;