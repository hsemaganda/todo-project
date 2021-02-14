
import useFetch from './useFetch';
import TaskList from "../components/TaskList";
import Loading from './Loading';
import Background from './Background';

const GetList = (props) => {
    let tasks = props.tasks;
    const title = props.title;


    tasks = tasks.filter(task => task.datedue >= 1613098835);//change this hard coded value
    console.log(new Date().getTime());

    const myDate = (d) => {
        let s = new Date(d).toLocaleDateString("en-US");
        return s;

    }

    return (
        <div className="task-list">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <div className="tasks-preview" key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.datedue}</p>

                    <p>{myDate(task.datecreated)}</p>
                    <p>{myDate(task.datedue)}</p>
                    <p>{task.timedue}</p>
                    <p>{task.location}</p>
                    <p>{task.priority}</p>

                </div>
            ))}

        </div>
    );
}

const Pendingtasks = (props) => {

    const { data: tasks, isPending, error } = useFetch('http://localhost:8000/tasks');



    const myDate = (d) => {
        let s = new Date(d).toLocaleDateString("en-US");
        return s;

    }



    //console.log(myDate(5535535525));


    return (
        <Background>
            <div className="center">

                {/*using conditional to ensure I dont render an empty list */}
                {/*{tasks && <TaskList tasks={tasks} title="All tasks"  />}*/}





                {!tasks ? <Loading /> : <GetList tasks={tasks} />}





            </div>

        </Background>

    );
}

export default Pendingtasks;