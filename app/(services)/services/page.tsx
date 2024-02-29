import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Pricing from "@/components/ui/sections/pricing";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";
import Newslatter from "@/components/ui/sections/newslatter";
import Service from "@/components/pages/(services)/service";

export const metadata: Metadata = {
    title: "Our Services",
};

const breadcumb_data = {
    title: "Our Services",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Services",
            url: "/services",
        },
    ],
};

export default function Services() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <Service />
            <Newslatter />
            <Pricing />
            <Subscribe />
            <Footer />
        </>
    );
}
