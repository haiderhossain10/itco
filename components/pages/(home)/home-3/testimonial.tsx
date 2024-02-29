"use client";
import TestimonialCard from "./ui/testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials_3 } from "@/data/site";

export default function Testimonial() {
    return (
        <section className="testimonial-sec sec-ptb bg-light-greem">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="sec-content text-center">
                            <h6 className="sec-sub-title">
                                Clients Testimonials
                            </h6>
                            <h2 className="sec-title">Our clients reviews</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="testimonial-slider3 owl-carousel owl-theme pt-5">
                        <div className="item">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    el: ".ui-testimonial-pagination",
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                }}
                                autoplay={{
                                    delay: 2500,
                                }}
                            >
                                {testimonials_3?.slice(0, 4).map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <TestimonialCard data={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="ui-testimonial-pagination ui-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
