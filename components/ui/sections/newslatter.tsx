import Link from "next/link";

export default function Newslatter() {
    return (
        <section className="newslatter-sec bg-green">
            <div className="container">
                <div className="row aximo_screenfix_left">
                    <div className="col-lg-7 p-0">
                        <div className="video-sec">
                            <div className="video-sec-overlay d-flex align-items-center justify-content-center">
                                <Link href="/" className="video-btn">
                                    <i className="flaticon-play-button-arrowhead" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center">
                        <div className="sec-content">
                            <h2 className="sec-title">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="sec-text">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                            <div className="Subscribe-form d-sm-flex">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    id="cta-email"
                                    name="cta-eail"
                                    required
                                />
                                <div className="submit-btn">
                                    <button type="submit" className="thm-btn">
                                        <span className="txt">
                                            Subscribe Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
