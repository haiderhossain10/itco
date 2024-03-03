import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import BlogDetailsInfo from "@/components/pages/(blog)/blog-details/blog-details-info";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details",
};

const breadcumb_data = {
    title: "Blog Details",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Blog Details",
            url: "/blog-details",
        },
    ],
};

export default function BlogDetails() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <BlogDetailsInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
