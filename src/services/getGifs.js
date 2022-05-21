const apiKey = '8GQU9y1ekk49NNWqfIYmse8vx7owdJSt&q'

export default function getGifs({keyword = 'pickle rick'} = {}){
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=r&lang=en`
      return fetch(apiURL)
          .then(res => res.json())
          .then(response =>{
            const {data} = response
            const gifs = data.map(image => {
              const {title, id, images} = image 
              const {url} = images.fixed_height
              return {title, id, url}
            })
            return gifs
          })
} 