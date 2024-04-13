"use client";
import navigation from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const socialLinks = [
    {
        icon: "fab fa-facebook-f",
        url: "https://facebook.com",
    },
    {
        icon: "fab fa-twitter",
        url: "https://twitter.com",
    },
    {
        icon: "fab fa-instagram",
        url: "https://instagram.com",
    },
    {
        icon: "fab fa-linkedin-in",
        url: "https://linkedin.com",
    },
    {
        icon: "fab fa-youtube",
        url: "https://youtube.com",
    },
];

export default function SidebarNavigation() {
    return (
        <>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
                style={{ zIndex: 999999 }}
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title " id="offcanvasExampleLabel">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo/site-logo.png"
                                alt="site-logo"
                                height={40}
                                width={105}
                            />
                        </Link>
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <Sidebar>
                        <Menu>
                            {navigation?.map((item, i) =>
                                item.dropdown ? (
                                    <SubMenu key={i} label={item.name}>
                                        {item.dropdown.map((item2, i2) => (
                                            <MenuItem
                                                key={i2}
                                                component={
                                                    <Link href={item2.url} />
                                                }
                                            >
                                                <div
                                                    data-bs-dismiss="offcanvas"
                                                    aria-label="Close"
                                                >
                                                    {item2.name}
                                                </div>
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    <MenuItem
                                        key={i}
                                        component={<Link href={item.url} />}
                                    >
                                        <div
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            {item.name}
                                        </div>
                                    </MenuItem>
                                )
                            )}
                        </Menu>
                    </Sidebar>
                    <div className="mobile-menu mobile-menu-unset">
                        {/* contact part start */}
                        <div className="contact-info">
                            <div className="icon-box">
                                <i className="flaticon-call" />
                            </div>
                            <p>
                                <Link href="tel:123456789">(629) 555-0129</Link>
                            </p>
                        </div>
                        {/* contact part end */}

                        {/* social part start */}
                        <div className="social-links">
                            <ul className="clearfix list-wrap">
                                {socialLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link target="_blank" href={item.url}>
                                            <i className={item.icon} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* social part end */}
                    </div>
                </div>
            </div>
        </>
    );
}
