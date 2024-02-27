"use client";
import ScrollTop from "@/components/scroll-top";
import { useEffect } from "react";

// boostrap
if (typeof window !== "undefined") {
    require("bootstrap");
}

export default function Providers({ children }: { children: React.ReactNode }) {
    // WOW.js
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("wowjs").then((WOW) => {
                const wow = new WOW.WOW({
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: false,
                    live: true,
                });
                wow.init();
            });
        }
    }, []);
    return (
        <>
            {/* scroll top part start */}
            <ScrollTop />
            {/* scroll top part end */}
            <div className="fix">{children}</div>
        </>
    );
}
