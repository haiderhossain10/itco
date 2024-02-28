import { services_2 } from "@/data/site";
import ServiceCard from "./ui/service-card";

export default function Service() {
    return (
        <section className="service-sec2 sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="sec-content text-center mb-5">
                            <h6 className="sec-sub-title">What We Do</h6>
                            <h2 className="sec-title">
                                Services That Help You Grow
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* service part start */}
                    {services_2?.slice(0, 3).map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <ServiceCard data={item} index={i} />
                        </div>
                    ))}
                    {/* service part end */}
                </div>
            </div>
        </section>
    );
}
