import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log("Category ID:", id);

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-15">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-lg">News by Category</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? news.map((n) => {
            return (
              <NewsCard key={n._id} news={n}>
              </NewsCard>
            );
          }) : <p className="font-bold text-lg text-center my-7">No news found for this category.</p>}
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
