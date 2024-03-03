import BlogCategories from "../../ui/blog-categories";
import BlogRecentPost from "../../ui/blog-recent-post";
import BlogSearch from "../../ui/blog-search";
import BlogTags from "../../ui/blog-tags";

export default function BlogSidebar() {
    return (
        <div className="sidebar ms-xl-4">
            {/* blog search part start */}
            <BlogSearch />
            {/* blog search part end */}

            {/* blog categories part start */}
            <BlogCategories />
            {/* blog categories part end */}

            {/* blog recent post part start */}
            <BlogRecentPost />
            {/* blog recent post part end */}

            {/* blog tags part start */}
            <BlogTags />
            {/* blog tags part end */}
        </div>
    );
}
