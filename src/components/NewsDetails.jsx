import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import PhotoCard from './PhotoCard'



const NewsDetails = () => {
    const location=useLocation()
    const newsid = location.state
    const [newsDetails, setNewsDetails] = useState([])

    useEffect(() => {
      fetchFromAPI(`news/v1/detail/${newsid}`).then((data)=>
      setNewsDetails(data))
    }, [newsid])
    

  return (
    <div>
        <h1>{newsDetails?.headline}</h1>
        <PhotoCard photoid={newsDetails?.coverImage?.id} alt={newsDetails?.coverImage?.caption} />
        {
            newsDetails?.content?.map((item)=>(
                <p>
                    {item?.content?.contentValue}
                </p>
            ))
        }
    </div>
  )
}

export default NewsDetails