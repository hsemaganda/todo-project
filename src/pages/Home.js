import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import Background from "../components/Background";
import TaskList from "../components/TaskList";
import useFetch from '../components/useFetch';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


const Home = () => {


    //const {data: tasks , isPending, error} = useFetch('http://localhost:8000/tasks');

    return (
        <>
            <Background>
                <AddTask />
                {/*<Banner title= "new task" />*/}



                <div>
                    <div className="home">
                        {/*using conditional to ensure I dont render an empty list */}
                        {/*tasks && <TaskList tasks={tasks} title="my tasks"  name="web dev assignment"/>*/}


                    </div>

                </div>

            </Background>
            {/*<AddTask/>*/}
        </>



    );
}

export default Home;