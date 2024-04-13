import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import FaqItem from "@/components/pages/faq/faq-item";
import Testimonial from "@/components/pages/faq/ui/testimonial";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
};

const breadcumb_data = {
    title: "FAQs",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "FAQs",
            url: "/faqs",
        },
    ],
};

export default function Faqs() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <FaqItem />
            <Testimonial />
            <Subscribe />
            <Footer />
        </>
    );
}
