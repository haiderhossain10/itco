import { footer_blogs } from "@/data/footer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function BlogRecentPost() {
    return (
        <div className="sidebar-item">
            <h4 className="stitle">Recent Posts</h4>
            <div className="blog-recent-post footer-recent-post">
                <ul>
                    {/* recent blog part start */}
                    {footer_blogs?.map((item, i) => (
                        <li className="blog-sidebar-box-item blog-item d-flex">
                            <div className="img-box">
                                <Image
                                    src={item.imgUrl}
                                    alt="blog"
                                    height={93}
                                    width={109}
                                    className="h-100"
                                />
                            </div>
                            <div className="content-box">
                                <div className="meta-box">
                                    <ul className="meta-info">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-calendar" />
                                            </div>
                                            <span>
                                                <Link
                                                    href="/"
                                                    className="c-black"
                                                >
                                                    Oct 2, 2023
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h3 className="c-black">
                                        <Link href="/">{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                    {/* recent blog part end */}
                </ul>
            </div>
        </div>
    );
}
