import { BlogType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: BlogType;
    index: number;
}

export default function LatestBlogCard({ data, index }: Props) {
    return (
        <div
            className="blog-item blog-box-shadow wow fadeInUp"
            data-wow-delay={`${index * 300}ms`}
            data-wow-duration="1500ms"
        >
            {/* blog item 1 */}
            <div className="img-box">
                <Image
                    src={data.imgUrl}
                    alt="blog"
                    height={350}
                    width={416}
                    className="h-100"
                />
                <div className="blog-date">
                    <span className="data">01</span>
                    <span className="month">Jan</span>
                </div>
            </div>
            <div className="content-box">
                <div className="meta-box">
                    <ul className="meta-info d-flex">
                        <li>
                            <div className="icon">
                                <i className="flaticon-user" />
                            </div>
                            <span>
                                <Link href="/">Admin</Link>
                            </span>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="flaticon-calendar" />
                            </div>
                            <span>
                                <Link href="/">January 1, 2024</Link>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="title-box">
                    <h3>
                        <Link href="/blog-details">{data.title}</Link>
                    </h3>
                </div>
                <div className="btn-box">
                    <Link href="/blog-details" className="read-more">
                        <span className="txt">Read More</span>
                        <i className="flaticon-right-arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
