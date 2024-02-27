import { blogs } from "@/data/site";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function LatestBlog() {
    return (
        <section className="blog-sec sec-ptb bg-light-greem">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-content mb-5">
                            <h6 className="sec-sub-title">Our Blogs</h6>
                            <h2 className="sec-title">
                                Let's Checkout Our All Latest News
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="blog-left-box blog-item me-lg-5 wow fadeInLeft"
                            data-wow-delay="500ms"
                            data-wow-duration="1500ms"
                        >
                            {/* blog left box */}
                            <div className="img-box">
                                <Image
                                    src="/assets/images/blog/blog-f1.png"
                                    alt="blog"
                                    height={569}
                                    width={588}
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
                                                <Link href="/">
                                                    October 2, 2023
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h3>
                                        <Link href="/blog-details">
                                            Everything you need to learn about
                                            IT Solution for your Company.
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-sidebar-box">
                            {/* lasted blog part start */}
                            <ul>
                                {blogs?.slice(0, 3).map((item, i) => (
                                    <li
                                        key={i}
                                        className="blog-sidebar-box-item blog-item d-sm-flex wow fadeInUp"
                                        data-wow-delay="500ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="img-box">
                                            <Image
                                                src={item.imgUrl}
                                                alt="blog"
                                                height={174}
                                                width={236}
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
                                                            <Link href="/">
                                                                Admin
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-calendar" />
                                                        </div>
                                                        <span>
                                                            <Link href="/">
                                                                {moment(
                                                                    item.date
                                                                ).format(
                                                                    "MMM  DD, YYYY "
                                                                )}
                                                            </Link>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="title-box">
                                                <h3>
                                                    <Link href="/blog-details">
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="btn-box">
                                                <Link
                                                    href="/blog-details"
                                                    className="read-more"
                                                >
                                                    <span className="txt">
                                                        Read More
                                                    </span>
                                                    <i className="flaticon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {/* lasted blog part end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
