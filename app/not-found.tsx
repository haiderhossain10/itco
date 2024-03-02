import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import NotFoundInfo from "@/components/pages/404/not-found-info";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
};

const breadcumb_data = {
    title: "Page Not Found",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "404",
            url: "/404",
        },
    ],
};

export default function NotFound() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <NotFoundInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
