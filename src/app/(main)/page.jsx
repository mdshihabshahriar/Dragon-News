import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";
import { redirect } from "next/navigation";

const default_category_id = "01";

const Home = async () => {
    redirect(`/category/${default_category_id}`);
};

export default Home;