import { Metadata } from "next";
import Header2 from "@/components/header/header-2";
import Hero from "@/components/pages/(home)/home-2/hero";
import Service from "@/components/pages/(home)/home-2/service";
import About from "@/components/pages/(home)/home-2/about";
import Newslatter from "@/components/pages/(home)/home-2/newslatter";
import Project from "@/components/pages/(home)/home-2/project";
import Team from "@/components/pages/(home)/home-2/team";
import Brand from "@/components/ui/sections/brand";
import Faq from "@/components/pages/(home)/home-2/faq";
import Testimonial from "@/components/pages/(home)/home-2/testimonial";
import LatestBlog from "@/components/pages/(home)/home-2/latest-blog";
import Subscribe from "@/components/pages/(home)/home-2/subscribe";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
    title: "Home 2",
};

export default function Home2() {
    return (
        <>
            <Header2 />
            <Hero />
            <Service />
            <About />
            <Newslatter />
            <Project />
            <Team />
            <Brand />
            <Faq />
            <Testimonial />
            <LatestBlog />
            <Subscribe />
            <Footer />
        </>
    );
}
