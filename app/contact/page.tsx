import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ContactForm from "@/components/pages/contact/contact-form";
import ContactMap from "@/components/pages/contact/contact-map";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
};

const breadcumb_data = {
    title: "Contact Us",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Contact",
            url: "/contact",
        },
    ],
};

export default function Contact() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <ContactMap />
            <ContactForm />
            <Footer />
        </>
    );
}
