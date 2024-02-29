import { BreadcumbType } from "@/types/types";
import Link from "next/link";

export default function Breadcumb({ data }: { data: BreadcumbType }) {
    return (
        <section
            id="site-breadcumb"
            style={{
                backgroundImage:
                    'url("assets/images/breadcumb/breadcumb-bd.svg")',
            }}
        >
            <div className="site-breadcumb-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">
                                    {data.title}
                                </h1>
                                <ul className="page-navigator">
                                    {/* path part start */}
                                    {data?.list.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.url}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                    {/* path part end */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
