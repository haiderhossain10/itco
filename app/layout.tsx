import { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--thm-body-font",
});

export const metadata: Metadata = {
    title: {
        default: "Home 1 || Itco Nextjs 14 Template",
        template: "%s || Itco Nextjs 14 Template",
    },
    description:
        "Itco Nextjs 14 Template for agencies, businesses, consulting firms, creative ventures, cybersecurity providers, data management specialists, digital agencies, IT services, IT solutions providers, SaaS companies, software developers, startups, and technology service providers.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={outfit.className}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
