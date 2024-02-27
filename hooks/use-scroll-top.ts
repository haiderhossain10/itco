import { useEffect, useState } from "react";

export default function useScrollTop(y = 100): boolean {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                if (window.scrollY > y) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return scroll;
}
