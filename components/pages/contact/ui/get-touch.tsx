import Link from "next/link";

const socials = [
    {
        icon: "fa-brands fa-facebook-f",
        link: "https://www.facebook.com/",
    },
    {
        icon: "fa-brands fa-linkedin-in",
        link: "https://www.linkedin.com/",
    },
    {
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/",
    },
    {
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/",
    },
];

export default function GetTouch() {
    return (
        <div className="sec-content">
            <h2 className="sec-title">Get In Touch</h2>
            <p>
                These are the phrases we stay via way of means of in the whole
                lotwe do. Each brand we build, and we create.
            </p>
            <div className="get-in-touch">
                {/* project-qinfo */}
                <div className="qinfo-item">
                    {/* qinfo-item-1 */}
                    <div className="qinfo-icon">
                        <i className="flaticon-maps-and-flags" />
                    </div>
                    <div className="qinfo-box">
                        <h5>Location</h5>
                        <Link href="/">
                            7 Green Lake Street Crawfordsville, IN 47933
                        </Link>
                    </div>
                </div>
                <div className="qinfo-item">
                    {/* qinfo-item-2 */}
                    <div className="qinfo-icon">
                        <i className="flaticon-call" />
                    </div>
                    <div className="qinfo-box">
                        <h5>Call Now</h5>
                        <Link href="tel:+1801.234.5678">+1801.234.5678</Link>
                        <Link href="tel:+1784.386.8687">+1784.386.8687</Link>
                    </div>
                </div>
                <div className="qinfo-item mb-0">
                    {/* qinfo-item-3 */}
                    <div className="qinfo-icon">
                        <i className="flaticon-gmail-logo" />
                    </div>
                    <div className="qinfo-box">
                        <h5>Email Us</h5>
                        <Link href="mailto:mehedi@company.com">
                            mehedi@company.com
                        </Link>
                    </div>
                </div>
            </div>
            <div className="company-social d-flex">
                {/* social part start */}
                {socials.map((item, i) => (
                    <Link key={i} href={item.link} target="_blank">
                        <i className={item.icon} />
                    </Link>
                ))}
                {/* social part end */}
            </div>
        </div>
    );
}
