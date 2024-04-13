"use client";
import Link from "next/link";
import HeaderTop from "../ui/bar/header-top";
import Image from "next/image";
import Navigation from "./ui/navigation";
import useHeaderFixed from "@/hooks/use-header-fixed";

export default function Header2() {
    // sticky header
    const isSticky = useHeaderFixed(245);

    return (
        <header className="main-header main-header-one main-header-two">
            <div
                id="sticky-header"
                className={`menu-area ${isSticky ? "sticky-menu" : ""}`}
            >
                <div className="main-header-one__outer">
                    <div className="main-header-one__right">
                        <div className="container">
                            <div className="menu-area__inner">
                                <div className="mobile-nav-toggler align-items-center">
                                    <div className="site-ligo">
                                        <Link href="/home-2">
                                            <Image
                                                src="/assets/images/logo/logo1.png"
                                                alt="site-logo"
                                                height={40}
                                                width={105}
                                            />
                                        </Link>
                                    </div>
                                    <i
                                        className="fas fa-bars"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasExample"
                                        aria-controls="offcanvasExample"
                                    />
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="main-header-one__inner">
                                            {/* header top part start */}
                                            <HeaderTop />
                                            {/* header top part end */}
                                            <div className="main-header-one__bottom">
                                                <div className="main-header-one__bottom-left d-flex">
                                                    <div className="site-ligo d-flex align-items-center">
                                                        <Link href="/home-2">
                                                            <Image
                                                                src="/assets/images/logo/logo1.png"
                                                                alt="site-logo"
                                                                height={40}
                                                                width={105}
                                                            />
                                                        </Link>
                                                    </div>
                                                    {/* navigation part start */}
                                                    <Navigation />
                                                    {/* navigation part end */}
                                                </div>
                                                <div className="main-header-one__bottom-right">
                                                    <div className="search-box">
                                                        <a
                                                            href="#"
                                                            className="main-menu__search search-toggler icon-magnifying-glass"
                                                        />
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link
                                                            className="thm-btn"
                                                            href="/contact"
                                                        >
                                                            <span className="txt">
                                                                Get A Free Quote
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
