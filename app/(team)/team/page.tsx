import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import TeamInfo from "@/components/pages/(team)/team/team-info";
import Breadcumb from "@/components/ui/breadcumbs/breadcumb";
import Subscribe from "@/components/ui/sections/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team",
};

const breadcumb_data = {
    title: "Our Team",
    list: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Team",
            url: "/team",
        },
    ],
};
export default function Team() {
    return (
        <>
            <Header />
            <Breadcumb data={breadcumb_data} />
            <TeamInfo />
            <Subscribe />
            <Footer />
        </>
    );
}
