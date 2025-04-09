import { useEffect, useState } from "react"
import { getMovie } from "../services/getService";
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const [data, setData] = useState([]);

    const getMovieData = async () => {
        try {
            const res = await getMovie();
            console.log(res.data.Search);
            setData(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <ul className="container grid grid-four--cols">
            {data.map((curElem) => {
                return <Card key={curElem.imdbID} movieData={curElem} />
            })}
        </ul>
    )
}