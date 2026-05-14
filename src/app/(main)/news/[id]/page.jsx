import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return (
    <div className="max-w-4xl mx-auto my-8 card">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author info */}
          <div className="flex items-center justify-between bg-slate-200 p-4">
            <div className="flex items-center gap-1">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <CiShare2 className="text-xl" />
              <CiBookmark className="text-xl" />
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              height={400}
              width={600}
              className="w-full"
            />
          </figure>
          <p className="">{news.details}</p>
          <div className="flex items-center justify-between gap-2">
            <Link href={`/category/${news.category_id}`}>
              <button className="btn btn-primary">See other news for the category <BsArrowRight /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
