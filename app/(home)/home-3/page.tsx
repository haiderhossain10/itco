import Header3 from "@/components/header/header-3";
import Team from "@/components/ui/sections/team";
import About from "@/components/pages/(home)/home-3/about";
import Hero from "@/components/pages/(home)/home-3/hero";
import Service from "@/components/pages/(home)/home-3/service";
import { Metadata } from "next";
import Video from "@/components/pages/(home)/home-3/video";
import Project from "@/components/pages/(home)/home-3/project";
import Testimonial from "@/components/pages/(home)/home-3/testimonial";
import Footer from "@/components/footer/footer";
import LatestBlog from "@/components/pages/(home)/home-3/latest-blog";

export const metadata: Metadata = {
    title: "Home 3",
};

export default function Home3() {
    return (
        <>
            <Header3 />
            <Hero />
            <Service />
            <About />
            <Team />
            <Video />
            <Project />
            <Testimonial />
            <LatestBlog />
            <Footer />
        </>
    );
}
