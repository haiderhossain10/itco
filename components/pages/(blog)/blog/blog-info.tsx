import { blogs_2 } from "@/data/site";
import BlogSidebar from "./ui/blog-sidebar";
import BlogCard from "../ui/blog-card";
import Pagination from "./ui/pagination";

export default function BlogInfo() {
    return (
        <section className="blog-page-sec sec-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="blog-item-wrapper">
                            {/* blog card part start */}
                            {blogs_2?.map((item, i) => (
                                <BlogCard key={i} data={item} />
                            ))}
                            {/* blog card part end */}
                        </div>
                        {/* pagination part start */}
                        <Pagination />
                        {/* pagination part end */}
                    </div>
                    <div className="col-xl-4">
                        {/* blog sidebar part start */}
                        <BlogSidebar />
                        {/* blog sidebar part end */}
                    </div>
                </div>
            </div>
        </section>
    );
}
