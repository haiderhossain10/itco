"use client";
import { useState } from "react";
import FaqCollapse from "./ui/faq-collapse";
import { faq } from "@/data/site";
import Image from "next/image";

export default function Faq() {
    const [collapsed, setCollapsed] = useState<number | null>(0);

    // Handler for collapsed
    const collapsedHandler = (id: number | null) => {
        if (id === collapsed) {
            return setCollapsed(null);
        }
        setCollapsed(id);
    };

    return (
        <section className="faq-sec sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                        <div className="sec-content mb-5">
                            <h6 className="sec-sub-title">FAQs</h6>
                            <h2 className="sec-title">Looking For Answers?</h2>
                        </div>
                        {/* faq part start */}
                        <div
                            id="accordion"
                            className="accordion-container wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                        >
                            {faq?.map((item, i) => (
                                <FaqCollapse
                                    key={i}
                                    handler={collapsedHandler}
                                    collapsed={collapsed}
                                    index={i}
                                    data={item}
                                />
                            ))}
                        </div>
                        {/* faq part end */}
                    </div>
                    <div className="col-lg-6 tab-col-gap">
                        <div
                            className="sec-images wow fadeInRight"
                            data-wow-delay="0.5s"
                            data-wow-duration="1500ms"
                        >
                            <div className="sec-img-one">
                                <Image
                                    src="/assets/images/about/faq.png"
                                    alt="faq"
                                    height={662}
                                    width={560}
                                    className="h-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
