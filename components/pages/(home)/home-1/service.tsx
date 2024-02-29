import { services } from "@/data/site";
import Link from "next/link";

export default function Service() {
    return (
        <section className="service-sec bg-light-greem sec-ptb">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="sec-content">
                            <h6 className="sec-sub-title">
                                Our latest services
                            </h6>
                            <h2 className="sec-title">
                                Our clients are the best at IT Management
                            </h2>
                            <p className="sec-text">
                                Our Custom Software Design And Development Teams
                                Can Design, Build, Test, And Deliver A Product
                                That Fits Both Your Vision And With Market
                                Demand. With Our Support, You Will Find
                                Customers, Build Income And Attract New
                                Investors.
                            </p>
                            <div className="sec-btn">
                                <Link href="/services" className="thm-btn">
                                    <span className="txt">
                                        View All Services
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 tab-col-gap">
                        <div className="service-lists service-lists-style1">
                            {services?.map((item, i) => (
                                <div
                                    key={i}
                                    className="single-service d-flex align-items-center wow fadeInUp"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                >
                                    {/* single-service 1*/}
                                    <div className="single-service-icon">
                                        <i className={item.icon} />
                                    </div>
                                    <div className="single-service-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.brief}</p>
                                        <Link href="/service-details">
                                            <i className="flaticon-right-arrow" />
                                            a
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
