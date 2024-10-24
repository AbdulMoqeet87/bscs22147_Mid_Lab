import MovieItem from "./MovieItem";

function MovieList()
{

    const data = [
        {
            
            title: 'Interstellar',
            rating: '8.7',
            r_date: '22-08-2003'
        },
        {            
            title: 'Shutter Island',
            rating: '9.0',
            r_date: '25-08-2005'
        },
        {
            
            title: 'Interstellar',
            rating: '8.7',
            r_date: '22-08-2003'
        },
        {            
            title: 'Shutter Island',
            rating: '9.0',
            r_date: '25-08-2005'
        },


        ];

    return(
        <>
        

<div className="ml-20 flex flex-column ...">    
        {data.map((d, index) => (
            <div key={index} className="w-80 h-56 grid grid-cols-3 gap-4 content-start ...">
                           <MovieItem det={data[index]}/>
            </div>
          ))}

</div>

        </>
    
    );



}

export default MovieList;