import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Faq from "@/components/ui/sections/faq";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Newslatter from "@/components/ui/sections/newslatter";
import Pricing from "@/components/ui/sections/pricing";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Pricing",
};

const breadcumb_data = {
    title: "Our Pricing",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Pricing",
            url: "/price-plan",
        },
    ],
};

export default function PricePlan() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <Pricing />
            <Newslatter />
            <Faq />
            <Subscribe />
            <Footer />
        </>
    );
}
