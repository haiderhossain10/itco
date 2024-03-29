"use client";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const progress_data = [
    {
        title: "Productivity",
        completed: 80,
    },
    {
        title: "Digital Marketing",
        completed: 75,
    },
    {
        title: "Technology",
        completed: 90,
    },
];

export default function Business() {
    return (
        <section className="business-sec sec-ptb bg-light-greem">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-content h-100 d-flex justify-content-center flex-column">
                            <h6 className="sec-sub-title">Buisness Process</h6>
                            <h2 className="sec-title">
                                Easy Way Build Success your Buisness Pla
                            </h2>
                            <p className="sec-text">
                                Solve Business Problems And Automate Workflows
                                With Artificial Intelligence-Based Solutions.
                                Unlock The Hidden Power Of The Data You Already
                                Have And Hand.
                            </p>
                            {/* progressbar part start */}{" "}
                            {progress_data?.map((item, i) => (
                                <div key={i} className="ab-progress">
                                    <h2 className="progress-title">
                                        {item.title}
                                    </h2>
                                    <ProgressBar
                                        className="ui-progressbar"
                                        completed={item.completed}
                                        animateOnRender={true}
                                        height="8px"
                                        baseBgColor="#a1cebe"
                                        bgColor="var(--thm-teal)"
                                        labelClassName="ui-progressbar-label"
                                    />
                                </div>
                            ))}
                            {/* progressbar part end */}
                        </div>
                    </div>
                    <div className="col-lg-6 tab-col-gap">
                        <div
                            className="sec-images wow fadeInRight"
                            data-wow-delay="500ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="sec-img-one">
                                <Image
                                    src="/assets/images/about/about03.png"
                                    alt="about-img"
                                    height={573}
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
