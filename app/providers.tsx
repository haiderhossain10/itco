"use client";
if (typeof window !== "undefined") {
    import("wowjs")
        .then((WOW) => {
            // Initialize WOW.js or use it as needed
            const wow = new WOW.WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: false,
                live: true,
            });
            wow.init();
        })
        .catch((error) => {
            console.error("Error loading WOW.js:", error);
        });
}
// boostrap
if (typeof window !== "undefined") {
    require("bootstrap");
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fix">{children}</div>
        </>
    );
}
