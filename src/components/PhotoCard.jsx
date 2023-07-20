import React,{useEffect,useState} from 'react'
import {  fetchImagefromAPI } from '../utils/fetchFromAPI'

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
    
        <div className='flex justify-center' >
            <img src={photo} alt={alt}
            className='rounded-full w-[40px] h-[40px]'
            />
        </div>
        )
    }
    else{
        return null
    }
}

export default PhotoCard