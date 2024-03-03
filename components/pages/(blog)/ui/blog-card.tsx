import { BlogType2 } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: BlogType2;
}

export default function BlogCard({ data }: Props) {
    return (
        <div
            className="blog-left-box blog-item wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1500ms"
        >
            <div className="img-box">
                <Image
                    src={data.imgUrl}
                    alt="blog"
                    height={516}
                    width={856}
                    className="h-100"
                />
            </div>
            <div className="content-box">
                <div className="meta-box">
                    <ul className="meta-info d-flex">
                        <li>
                            <div className="icon">
                                <i className="flaticon-user" />
                            </div>
                            <span>
                                <a href="#">Admin</a>
                            </span>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="flaticon-calendar" />
                            </div>
                            <span>
                                <a href="#">October 2, 2023</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="title-box blog-title">
                    <h3>
                        <Link href="/blog-details">{data.title}</Link>
                    </h3>
                </div>
                <div className="blog-body">
                    <p className="mt-3">{data.description}</p>
                </div>
                <div className="blog-btn">
                    <Link href="/blog-details" className="thm-btn">
                        <span className="txt">Read More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
