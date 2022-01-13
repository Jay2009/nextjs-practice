import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params,results}) {
    const router = useRouter();
    const [title, id, overview] = router.query.params || [];
    const movieInfo = results.find(movie => movie.id == id);

    console.log(movieInfo);
    return <div className="movie">
        
        <Seo title={title}/>
        
        <h4>{title}</h4>
            <div className="container">
                <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} />
                <span>Released date: {movieInfo.release_date}  Rate: {movieInfo.vote_average}</span>
            </div>
        <h4>{overview}</h4>

        <style jsx>{` 
            .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
            }
            .container span{
                padding: 15px;
                font-family: bold;
            }
            .movie img {
                max-width: 100%;

                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
        `}
        </style>
        
        </div>;
}

export async function getServerSideProps({params: {params}}) {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    
    return {
        props: {
            params,
            results
        },
    };
};