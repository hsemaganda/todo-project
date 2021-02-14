import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        const abortCont = new AbortController();//helps with clean up on unfinished tasks

        setTimeout(() =>
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();

                })
                .then(data => {
                    //console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    //watch out if you are still updateing the state
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');

                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
            , 1000)

        //clean up function follow up
        return () => abortCont.abort();


    }, [url]);

    return (
        { data, isPending, error }
    );
}

export default useFetch;