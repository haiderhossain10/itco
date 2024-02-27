import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/pages/(home)/home-1/about";
import Brand from "@/components/pages/(home)/home-1/brand";
import Business from "@/components/pages/(home)/home-1/business";
import CompanyInfo from "@/components/pages/(home)/home-1/company-info";
import Hero from "@/components/pages/(home)/home-1/hero";
import LatestBlog from "@/components/pages/(home)/home-1/latest-blog";
import Newslatter from "@/components/pages/(home)/home-1/newslatter";
import Pricing from "@/components/pages/(home)/home-1/pricing";
import Project from "@/components/pages/(home)/home-1/project";
import Service from "@/components/pages/(home)/home-1/service";
import Testimonial from "@/components/pages/(home)/home-1/testimonial";

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
