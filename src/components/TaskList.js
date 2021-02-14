const TaskList = (props) => {
    let tasks = props.tasks;
    const title = props.title;


    const myDate = (d) => {
        let s = new Date(d).toLocaleDateString("en-US");
        return s;

    }
    const normalDate = (unix_timestamp) => {
        var date = new Date(unix_timestamp * 1000);
        var day = date.getDate();
        var month = (date.getMonth()) + 1;
        var year = date.getFullYear();
        var formattedTime = day + '/' + month + '/' + year;
        return formattedTime;
    }


    return (
        <div className="task-list">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <div className="tasks-preview" key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>

                    <p>{normalDate(task.datecreated)}</p>
                    <p>{normalDate(task.datedue)}</p>
                    <p>{task.timedue}</p>
                    <p>{task.location}</p>
                    <p>{task.priority}</p>

                </div>
            ))}

        </div>
    );
}

export default TaskList;