import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const controller = new AbortController();

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);

        fetch(url, {signal: controller.signal})
        .then(res => {
            if(!res.ok ){
                throw Error('Data fetching error')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setLoading(false);
                setError(err.message);
            }
        });

        return () => controller.abort();

    },[url]);

    return {data, setData, loading, error};
}

export default useFetch;