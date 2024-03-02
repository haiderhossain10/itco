import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ProjectInfo from "@/components/pages/(projects)/project-details/project-info";
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
            name: "Project Details",
            url: "/project-details",
        },
    ],
};
export default function ProjectDetails() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <ProjectInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
