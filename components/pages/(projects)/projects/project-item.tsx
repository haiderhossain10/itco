import ProjectCard from "@/components/ui/cards/project-card";
import { projects_2 } from "@/data/site";

export default function ProjectItem() {
    return (
        <section className="project-sec2 sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="sec-content text-center mb-5">
                            <h6 className="sec-sub-title">
                                Latest Our Projects
                            </h6>
                            <h2 className="sec-title">Some Of Our Work</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* project part start */}
                    {projects_2?.slice(0, 6).map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <ProjectCard data={item} index={i} />
                        </div>
                    ))}
                    {/* project part end */}
                </div>
            </div>
        </section>
    );
}
