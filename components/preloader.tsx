"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isPreloaded, setPreloaded] = useState<boolean>(false);

    const path = usePathname();

    useEffect(() => {
        setTimeout(() => {
            setPreloaded(true);
        }, 1000);

        setPreloaded(false);
    }, [path]);

    return (
        <div
            id="preloader"
            style={isPreloaded ? { display: "none" } : { display: "block" }}
        >
            <div id="loader" />
        </div>
    );
}
