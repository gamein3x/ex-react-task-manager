import { memo } from "react";

const TaskRow = memo(({ task }) => {

    const backgroundColor = task.status.replace(" ", "").toLowerCase();

    return <tr>
        <th>{task.title}</th>
        <th className={backgroundColor}>{task.status}</th>
        <th>{new Date(task.createdAt).toLocaleDateString()}</th>
    </tr>
})

export default TaskRow;