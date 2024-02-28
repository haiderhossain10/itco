import { ProjectType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: ProjectType;
    index: number;
}

export default function ProjectCard({ data, index }: Props) {
    return (
        <div
            className="single-project single-project-style2 wow fadeInUp"
            data-wow-delay={`${index * 300}ms`}
            data-wow-duration="1500ms"
        >
            <div className="project-img">
                <Image
                    src={data.imgUrl}
                    alt="project"
                    height={400}
                    width={416}
                    className="h-100"
                />
            </div>
            <div className="project-title">
                <h5>
                    <Link href="/project-details">{data.title}</Link>
                </h5>
                <span className="project-cat">{data.category}</span>
            </div>
            <Link href="/home-2" className="project-btn">
                <i className="flaticon-right-arrow" />
            </Link>
        </div>
    );
}
