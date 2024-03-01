import { TeamType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const social = [
    {
        name: "facebook",
        link: "http://facebook.com",
        icon: "fa-brands fa-facebook-f",
    },
    {
        name: "twitter",
        link: "http://twitter.com",
        icon: "fa-brands fa-twitter",
    },
    {
        name: "instagram",
        link: "http://instagram.com",
        icon: "fa-brands fa-instagram",
    },
    {
        name: "linkedin",
        link: "http://linkedin.com",
        icon: "fa-brands fa-linkedin-in",
    },
];

export default function TeamCard({ data }: { data: TeamType }) {
    return (
        <div className="item single-team">
            <div className="member-img">
                <Image
                    src={data.imgUrl}
                    alt="team"
                    height={366}
                    width={412}
                    className="h-100"
                />
            </div>
            <ul className="team-social">
                {/* social part start */}
                {social?.map((item, i) => (
                    <li key={i}>
                        <Link
                            className="icon-1"
                            href={item.link}
                            target="_blank"
                        >
                            <i className={item.icon} />
                        </Link>
                    </li>
                ))}
                {/* social part end */}
            </ul>
            <div className="member-info">
                <Link href="/">
                    <h3 className="member-name">{data.title}</h3>
                </Link>
                <span className="member-cat">{data.category}</span>
            </div>
        </div>
    );
}
