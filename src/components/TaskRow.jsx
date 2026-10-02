import { memo } from "react";
import { Link } from "react-router-dom";


const TaskRow = memo(({ task }) => {

    const backgroundColor = task.status.replace(" ", "").toLowerCase();

    return <tr>
        <th><Link to={`task/${task.id}`}>{task.title}</Link></th>
        <th className={backgroundColor}>{task.status}</th>
        <th>{new Date(task.createdAt).toLocaleDateString()}</th>
    </tr>
})

export default TaskRow;