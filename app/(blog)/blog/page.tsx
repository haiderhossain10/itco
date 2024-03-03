import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import BlogInfo from "@/components/pages/(blog)/blog/blog-info";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Blogs",
};

const breadcumb_data = {
    title: "Our Blogs",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Blog",
            url: "/blog",
        },
    ],
};

export default function Blog() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <BlogInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
