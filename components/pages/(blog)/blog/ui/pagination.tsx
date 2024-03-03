import Link from "next/link";

export default function Pagination() {
    return (
        <div className="blog-pagination">
            <ul>
                <li className="pagination-item">
                    <Link href="/" className="active">
                        1
                    </Link>
                </li>
                <li className="pagination-item">
                    <Link href="/">2</Link>
                </li>
                <li className="pagination-item">
                    <Link href="/">3</Link>
                </li>
                <li className="pagination-item">
                    <Link href="/">
                        <i className="fa-solid fa-angles-right" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
