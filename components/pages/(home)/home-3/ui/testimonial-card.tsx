import { Team2Type } from "@/types/types";
import Image from "next/image";

export default function TestimonialCard({ data }: { data: Team2Type }) {
    return (
        <div className="single-testimonial-style3 d-flex">
            <div className="feedback">
                <div className="customar-img">
                    <Image
                        src={data.imgUrl}
                        alt="testimonial"
                        height={182}
                        width={185}
                        className="h-100"
                    />
                </div>
                <div className="rating">
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                </div>
            </div>
            <div className="customar-info">
                <div className="customar-title">
                    <h5>{data.name}</h5>
                    <span className="title">{data.title}</span>
                </div>
                <p className="comment">{data.description}</p>
                <div className="com-logo">
                    <i className="flaticon-ux" />
                </div>
            </div>
        </div>
    );
}
