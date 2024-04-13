import { PriceType } from "@/types/types";
import Link from "next/link";

interface Props {
    data: PriceType;
    index: number;
}

export default function PriceCard({ data, index }: Props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div
                className={`single-pricing ${
                    index === 1 ? "popular" : ""
                } wow fadeInUp`}
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
            >
                <div className="pricing-badge text-center">
                    <span className="title">{data.planeName}</span>
                    <div className="pricing-price">
                        <span className="currency">$</span>
                        <h3 className="price">
                            {data.price}
                            <span>/Per Month</span>
                        </h3>
                    </div>
                    <div className="pricing-btn">
                        <Link className="btn" href="/pricing-plan">
                            Discover More
                        </Link>
                    </div>
                </div>
                <div className="pricing-content">
                    <ul className="pricing-list">
                        <li>Key Words Optimized</li>
                        <li>Top 10 Ranking Guarantee</li>
                        <li>Weekly Reporting</li>
                        <li>Key Words Optimized</li>
                        <li>Top 10 Ranking Guarantee</li>
                        <li>Unlimited users</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
