import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import TestimonialsList from "@/components/pages/testimonials/testimonials-list";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials",
};

const breadcumb_data = {
    title: "Testimonials",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Testimonials",
            url: "/testimonials",
        },
    ],
};

export default function Testimonials() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <TestimonialsList />
            <Subscribe />
            <Footer />
        </>
    );
}
