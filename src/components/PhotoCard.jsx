import React,{useEffect,useState} from 'react'
import { fetchFromAPI, fetchImagefromAPI } from '../utils/fetchFromAPI'

const PhotoCard = ({photoid,alt}) => {
    const [photo,setPhoto] = useState('')
    console.log('photo is', photo,photoid)
    useEffect(() => {
        const url= `img/v1/i1/c${photoid}/i.jpg`
        console.log(url)
      fetchImagefromAPI(url).then((data)=>(
        setPhoto(data)
      ))
    }, [photoid])
    
    if(photoid){
        return(
    <div>
        <img src={photo} alt={alt}  />
    </div>
        )
    }
    else{
        return(
            <h1>
                Image corrupted.
            </h1>
        )
    }
}

export default PhotoCard