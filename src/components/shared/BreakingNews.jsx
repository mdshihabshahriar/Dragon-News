import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: 1,
        title: "Match Highlights: Germany vs Spain — as it happened!    "
    },
    {
        _id: 2,
        title: "Match Highlights: Germany vs Spain as...    "
    },
    {
        _id: 3,
        title: "Match Highlights: Germany vs Spain — as it happened!  "
    },
]

const BreakingNews = () => {
    return (
        <div className="flex justify-between items-center gap-4 bg-gray-200 py-4 container mx-auto px-2">
            <button className="btn btn-secondary text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => <span key={n._id} className="mr-10">{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;