import { Link } from "react-router-dom"

export default function TaskList() {
    return <>
        <h1>TaskList Page</h1>
        <Link to={"/"}>
                <button> Go Back </button>
            </Link>
    </>
};