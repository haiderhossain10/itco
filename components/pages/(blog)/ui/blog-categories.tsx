import { service_list } from "@/data/site";
import Link from "next/link";

export default function BlogCategories() {
    return (
        <div className="sidebar-item service-list">
            <h4 className="stitle">Categories</h4>
            <ul className="cat-list">
                {service_list?.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url}>
                            {item.name}
                            <i className="flaticon-right-arrow child" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
