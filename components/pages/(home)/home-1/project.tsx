"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { projects } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
    return (
        <section className="project-sec sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-content">
                            <h6 className="sec-sub-title">Latest Project</h6>
                            <h2 className="sec-title">
                                Let’s Looks Our Global Projects
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="project-slider pt-5">
                            <Swiper
                                spaceBetween={30}
                                navigation={{
                                    nextEl: ".owl-next",
                                    prevEl: ".owl-prev",
                                }}
                                modules={[Navigation]}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {projects?.slice(0, 6).map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="item single-project">
                                            <div className="project-img">
                                                <Image
                                                    src={item.imgUrl}
                                                    alt="project"
                                                    height={396}
                                                    width={412}
                                                    className="h-100"
                                                />
                                            </div>
                                            <div className="project-title">
                                                <h5>
                                                    <Link href="/project_details">
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                <span className="project-cat">
                                                    {item.category}
                                                </span>
                                                <Link
                                                    href="/project_details"
                                                    className="project-btn"
                                                >
                                                    <i className="flaticon-right-arrow" />
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="owl-nav">
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="owl-prev"
                                >
                                    <i className="flaticon-left-arrow" />
                                </a>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="owl-next"
                                >
                                    <i className="flaticon-right-arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
