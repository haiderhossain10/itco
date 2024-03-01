import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ProjectItem from "@/components/pages/(projects)/projects/project-item";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects",
};

const breadcumb_data = {
    title: "Our Projects",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Projects",
            url: "/projects",
        },
    ],
};

export default function Projects() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <ProjectItem />
            <Subscribe />
            <Footer />
        </>
    );
}
