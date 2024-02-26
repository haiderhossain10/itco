"use client";
import navigation from "@/data/navigation";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="navbar-wrap main-menu">
            <ul className="navigation">
                {navigation?.map((item, i) => (
                    <li
                        key={i}
                        className={
                            item.dropdown ? "menu-item-has-children" : ""
                        }
                    >
                        {item.dropdown ? (
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                {item.name}
                            </a>
                        ) : (
                            <Link href={item.url}>{item.name}</Link>
                        )}

                        {item.dropdown && (
                            <>
                                <ul className="sub-menu">
                                    {item.dropdown.map((item2, i2) => (
                                        <li key={i2}>
                                            <Link href={item2.url}>
                                                {item2.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="dropdown-btn">
                                    <span className="fas fa-angle-down" />
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
