import { ServiceType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: ServiceType;
    index: number;
}

export default function ServiceCard({ data, index }: Props) {
    return (
        <div
            className="single-service-style2 wow fadeInUp"
            data-wow-delay={`${index * 300}ms`}
            data-wow-duration="1500ms"
        >
            <div className="img-box">
                <Image
                    src={data.imgUrl}
                    alt="service"
                    height={250}
                    width={416}
                    className="h-h-100"
                />
            </div>
            <div className="content-box d-flex">
                <div className="single-service-content">
                    <h5>
                        <Link href="service-details">{data.title}</Link>
                    </h5>
                    <p>{data.brief}</p>
                    <Link href="/service-details" className="read-more">
                        Read More <i className="flaticon-right-arrow" />
                    </Link>
                </div>
                <div className="single-service-icon">
                    <i className={data.icon} />
                </div>
            </div>
        </div>
    );
}
