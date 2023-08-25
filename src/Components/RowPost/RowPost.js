import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import YouTube from 'react-youtube';
import { API_KEY,imageUrl} from '../../constants/constants'
import './RowPost.css'


function RowPost(props) {
    const[pop,setPop] = useState(false);

    const [urlId,setUrlId] = useState('');

    const [movie, setMovie] = useState([]);
    useEffect(() =>{
        axios.get(props.url ).then(response=>{
   setMovie(response.data.results)

        })
    },[])
    const opts = {
      
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language-US`).then(response=>{

    if(response.data.results.length!==0){
        console.log(response.data)
        setUrlId(response.data.results[0])
        setPop(true);
         
       }else{
        console.log("array is empty")
       }
})
};
const closeVideo=()=>{
    setPop(false)
}

    return (
        <div className='row'>
            <h2> {props.title}</h2>
            <div className='posters'>
             {
                movie.map((obj)=>
                <div>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                    </div>
                )
             }
            </div>
            { pop  && 
            
            <div className="video-popup">
                                    <button className="close-button" onClick={closeVideo}>
 X
</button>
            <div className="video-content">

              <YouTube videoId={urlId.key} opts={opts}/>
              <h2 className='video-title'>{urlId.name}</h2>
     
            </div>
          </div>}
        </div>
        
    )
}

export default RowPost