import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/ui/sections/about";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import { Metadata } from "next";
import Business from "@/components/ui/sections/business";
import CompanyInfo from "@/components/pages/(home)/home-1/company-info";
import Testimonial from "@/components/ui/sections/testimonial";
import Team from "@/components/ui/sections/team";
import Subscribe from "@/components/ui/sections/subscribe";

export const metadata: Metadata = {
    title: "About",
};

const breadcumb_data = {
    title: "About",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
    ],
};

export default function OurAbout() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <About />
            <Business />
            <CompanyInfo />
            <Testimonial />
            <Team />
            <Subscribe />
            <Footer />
        </>
    );
}
