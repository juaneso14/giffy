import React, {useState, useEffect} from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';


export default function ListOfGifs({params}){
  const {keyword} = params;
  console.log(params)
  const [gifs, setGifs] = useState({loading: false, results: []});


  useEffect(function () {
    setGifs(actualGifs => ({loading: true, results: actualGifs.results}));

    getGifs({keyword})
      .then(gifs => {
        setGifs({loading: false, results: gifs})
      })
  }, [keyword])

  if(gifs.loading) return <i>Loading...⚡</i>

  return <div>
    {
      gifs.results.map(({id, title, url}) => 
        <Gif 
          key={id}
          title={title} 
          id={id} 
          url={url}
        />
      )
    }
  </div>
  
}