import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return <>
        <div>
            <h3>
                404 - Page not found.
            </h3>
            <Link to={"/"}>
                <button> Go Back </button>
            </Link>
        </div>
    </>
}