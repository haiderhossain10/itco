import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Contact from "@/components/pages/(team)/team-details/contact";
import TeamBio from "@/components/pages/(team)/team-details/team-bio";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Details",
};

const breadcumb_data = {
    title: "Team Details",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Team Details",
            url: "/team-details",
        },
    ],
};
export default function TeamDetails() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <TeamBio />
            <Contact />
            <Subscribe />
            <Footer />
        </>
    );
}
