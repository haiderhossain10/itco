import Image from "next/image";
import ServiceDetailsSidebar from "./service-details-sidebar";

export default function ServiceInfo() {
    return (
        <section className="service-details sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="service-details-wrapper">
                            <div className="feature-img">
                                <Image
                                    src="/assets/images/service/sfeature.png"
                                    alt="feature"
                                    height={516}
                                    width={856}
                                    className="h-100"
                                />
                            </div>
                            <div className="service-details-content">
                                <div className="info-part">
                                    <h2
                                        className="sec-title wow fadeInUp"
                                        data-wow-delay="0.5s"
                                        data-wow-duration="1500ms"
                                    >
                                        Service Overview
                                    </h2>
                                    <p className="mb-4">
                                        Lorem ipsum is simply free text used by
                                        copytyping refreshing. Neque porro est
                                        qui dolorem ipsum quia var quaed
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                        Aelltes port lacus quis enim var sed
                                        efficitur turpis gilla sed sit amet
                                        finibus eros. Lorem Ipsum is simply
                                        dummy text of the been printing and
                                        typesetting industry. Lorem Ipsum has
                                        been the ndustry standard dummy text
                                        ever since the 1500s, when an unknown
                                        printer took a galley of type and
                                        scrambled it to make.
                                    </p>
                                    <p>
                                        When an unknown printer took a galley of
                                        type and scrambled it to make a type
                                        specimen book. It leap survive not only
                                        five centurie, but also the leap into
                                        electronic typesetting, remaining
                                        essentiall unchange Lorem ipsum dolor
                                        sit amet consec tetur adipis icing elit.
                                    </p>
                                </div>
                                <div className="info-part">
                                    <h4>Service Center</h4>
                                    <p className="mb-4">
                                        With over a decade of experience, we’ve
                                        established ourselves as one of the
                                        pioneering agencies in the region. Our
                                        small, flexible, agile and design-led
                                        structures and processes allow us to
                                        highly responsive and innovative. We’re
                                        made of passionate leaders, strategists,
                                        managers, developers, animators and
                                        designers who work together under one
                                        umbrella. We are a digitally-led,
                                        service creative agency. We combine
                                        strategy, marketing, design.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div
                                                className="info-part-img wow fadeInUp"
                                                data-wow-delay="0.5s"
                                                data-wow-duration="1500ms"
                                            >
                                                <Image
                                                    src="/assets/images/service/sfeature1.png"
                                                    alt="feature"
                                                    height={310}
                                                    width={416}
                                                    className="h-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div
                                                className="info-part-img wow fadeInUp"
                                                data-wow-delay="0.8s"
                                                data-wow-duration="1500ms"
                                            >
                                                <Image
                                                    src="/assets/images/service/sfeature2.png"
                                                    alt="feature"
                                                    height={310}
                                                    width={416}
                                                    className="h-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        When an unknown printer took a galley of
                                        type and scrambled it to make a type
                                        specimen book. It has leap survive not
                                        only five centurie, but also the leap
                                        into electronic typesetting, remaining
                                        essentiall dolor unchange Lorem ipsum
                                        dolor sit amet consec tetur adipis icing
                                        elit.
                                    </p>
                                </div>
                                <div className="info-part mb-0">
                                    <h4>Services All Details</h4>
                                    <p className="mb-4">
                                        Cast obscure badger jeep quail
                                        congenialy when changed as cat jeepers
                                        affectionate thus facilisi goodness this
                                        far like ipsum dolor sit amet,
                                        consectetur adipisicing elits sed do
                                        eiusmod tempo et incididunt et laboret
                                        dolore magna aliqua enim ad minim.
                                        Eveniet in vulputate velit esse molestie
                                        consequat, illum dolore eu feugiat nulla
                                        facilisis at seds eros sed accumsan.
                                    </p>
                                    <ul className="info-list">
                                        <li>
                                            Aliquam Eros Justo, Posuere Loborti
                                            Robart That
                                        </li>
                                        <li>
                                            Fermentum Ullamcorper Viverra
                                            Laoreet
                                        </li>
                                        <li>
                                            Lobortis, Viverra Laoreet Augue
                                            Attis Hrculies
                                        </li>
                                        <li>
                                            Fermentum Ullamcorper Viverra
                                            Laoreet
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <ServiceDetailsSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
