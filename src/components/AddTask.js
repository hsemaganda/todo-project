import { useState } from "react";
import { useHistory } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AddTask = () => {
    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('Description');
    const [datecreated, setDatecreated] = useState('2012.08.10');//change to current date
    const [datedue, setDatedue] = useState('2021.03.16');//change
    const [time_due, setTime_due] = useState('10:00');//change
    const [location, setLocation] = useState('DELAND');
    const [priority, setPriority] = useState('0-5');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const [unixDatecreated, setUnixDatecreated] = useState(1344571200);
    const [unixDatedue, setUnixDatedue] = useState(1344571200);





    const unixDate = (d) => {

        //'2012.08.10'

        var t = new Date(d).getTime() / 1000;
        //console.log("we are here");
        return t;

    }

    //console.log('This is date created ' );


    /*const handleSubmit = (e) => {
          //unixDatecreated = unixDate(datecreated);
     //unixDatedue = unixDate(datecreated);
     //console.log("thus " + unixDatedue);
     //setDatecreated("hey");
    // setUnixDatecreated(821833868000);
     console.log('This is date created ' + unixDatecreated);
        e.preventDefault();
        const task = { title, description, unixDatecreated, unixDatedue, time_due, location, priority };

        setIsPending(true);
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log("new task added");
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })

    }*/
    const handleSubmit = (e) => {
        console.log("form submitted" + e);
    }
    return (
        <div class="center">
            {/*
            <form onSubmit={handleSubmit}>
                <label> Task title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                >
                </input><br></br>
                <label> Task body:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}


                ></textarea><br></br>
                <label> date created:</label>
                <input
                    type="text"
                    required
                    value={datecreated}
                    onChange={(e) => setDatecreated((e.target.value))}

                >
                </input><br></br>
                <label> date due</label>
                <input
                    type="text"
                    required
                    value={datedue}
                    onChange={(e) => setDatedue(e.target.value)}

                >
                </input><br></br>
                <label> Time due:</label>
                <input
                    type="text"
                    required
                    value={time_due}
                    onChange={(e) => setTime_due(e.target.value)}

                >
                </input><br></br>
                <label> Task location:</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                >
                </input><br></br>
                <label> Task priority:</label>
                <input
                    type="text"
                    required
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}

                >
                </input><br></br>


                {!isPending && <button className="btn-primary"> Add task</button>}
                {isPending && <button disabled> Adding task...</button>}
                <div>
                    {/*} <h3>Preview</h3>
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{datecreated}</p>
                    <p>{datedue}</p>
                </div>



            </form>*/}
            <h1>ADD TASK</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">body</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} ></input>

                </div>
                <div className="form-group">
                    <label htmlFor="date">date</label>
                    <input type="text" className="form-control" id="date" value={datedue}
                        onChange={(e) => setDatedue((e.target.value))} required></input>

                </div>
                <div className="form-group">
                    <label htmlFor="time">Time due</label>
                    <input type="text" className="form-control" id="time" value={time_due}
                        onChange={(e) => setTime_due(e.target.value)} required></input>

                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" value={location}
                        onChange={(e) => setLocation(e.target.value)} required></input>

                </div>
                <div className="form-group">
                    <label htmlFor="priority">priority</label>
                    <input type="text" className="form-control" id="priority" value={priority}
                        onChange={(e) => setPriority(e.target.value)} required></input>

                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/*<p>{title}</p>
<p>{description}</p>
<p>{datecreated}</p>
<p>{datedue}</p>
<p>{location}</p>
        <p>{priority}</p>*/}
        </div>

    );
}

export default AddTask;