import {
    footer_blogs,
    service_links,
    social_links,
    useful_links,
} from "@/data/footer";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-sec">
            <div className="section-overlay sec-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xl-3">
                            <div className="footer-widget">
                                <div className="footer-widget-logo">
                                    <Link href="/">
                                        <Image
                                            src="/assets/images/logo/logo1.png"
                                            alt="site-logo"
                                            height={40}
                                            width={104}
                                        />
                                    </Link>
                                </div>
                                <div className="footer-widget-content">
                                    <p className="ft-text">
                                        Mauris ut enim sit amet lacus ornare
                                        ullamcor. Praesent placerat nequ puru
                                        rhoncu tincidunt odio ultrices. Sed odio
                                        feugiat feugiat felis.
                                    </p>
                                    <div className="footer-social">
                                        <div className="footer-social-icon d-flex">
                                            {/* social link part start */}
                                            {social_links?.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <i className={item.icon} />
                                                </Link>
                                            ))}
                                            {/* social link part end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 offset-xl-1 col-xl-2">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title tx-white">
                                    Our Services
                                </h4>
                                <div className="footer-widget-content">
                                    <div className="footer-links">
                                        <ul>
                                            {/* service link part start */}
                                            {service_links?.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.url}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            {/* service link part end */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 offset-xl-1 col-xl-2">
                            <div className="footer-widget pages-links">
                                <h4 className="footer-widget-title tx-white">
                                    Useful Links
                                </h4>
                                <div className="footer-widget-content">
                                    <div className="footer-links">
                                        <ul>
                                            {/* useful link part start */}
                                            {useful_links?.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.url}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            {/* useful link part end */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title tx-white">
                                    Recent Post
                                </h4>
                                <div className="footer-widget-content">
                                    <div className="footer-recent-post">
                                        <ul>
                                            {/* recent blog part start */}
                                            {footer_blogs?.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="blog-sidebar-box-item blog-item d-flex"
                                                >
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
                                                                        <Link href="/">
                                                                            Dec
                                                                            27,
                                                                            2023
                                                                        </Link>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="title-box">
                                                            <h3>
                                                                <Link href="/">
                                                                    {item.title}
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                            {/* recent blog part end */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sx-12 p-0">
                            <hr className="footer-hr" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row footer-copyright">
                        <div className="col">
                            <div className="footer-copyright-text text-center">
                                <p className="mb-0">
                                    ©{" "}
                                    <a href="https://themeforest.net/user/qubohub">
                                        Qubohub
                                    </a>{" "}
                                    {new Date().getFullYear()}. All Rights
                                    Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
