import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ServiceInfo from "@/components/pages/(services)/service-details/service-info";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Details",
};

const breadcumb_data = {
    title: "Service Details",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Service Details",
            url: "/service-details",
        },
    ],
};

export default function ServiceDetails() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <ServiceInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
