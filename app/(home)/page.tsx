import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/ui/sections/about";
import Brand from "@/components/ui/sections/brand";
import Business from "@/components/ui/sections/business";
import CompanyInfo from "@/components/pages/(home)/home-1/company-info";
import Hero from "@/components/pages/(home)/home-1/hero";
import LatestBlog from "@/components/pages/(home)/home-1/latest-blog";
import Newslatter from "@/components/ui/sections/newslatter";
import Pricing from "@/components/ui/sections/pricing";
import Project from "@/components/pages/(home)/home-1/project";
import Service from "@/components/pages/(home)/home-1/service";
import Testimonial from "@/components/ui/sections/testimonial";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Service />
            <Newslatter />
            <Project />
            <Business />
            <CompanyInfo />
            <Pricing />
            <Brand />
            <Testimonial />
            <LatestBlog />
            <Footer />
        </>
    );
}
