"use client";
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
            <div className="fix">{children}</div>
        </>
    );
}
