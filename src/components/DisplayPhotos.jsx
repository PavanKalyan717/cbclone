import React,{useEffect,useState} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import PhotoCard from './PhotoCard'
import Carousel from 'react-grid-carousel'

const DisplayPhotos = () => {
  const [photos, setPhotos] = useState([])
  console.log('photos data is',photos?.photoGalleryInfoList)
  useEffect(() => {
    fetchFromAPI('photos/v1/index').then((data)=>(
      setPhotos(data)
    ))

  }, [])
  
  return (
    <div> 
      <Carousel cols={4} rows={1} gap={10} loop className='pt-5'>
      {
        photos?.photoGalleryInfoList?.map((item)=>(
          <Carousel.Item >
            <PhotoCard photoid={item?.photoGalleryInfo?.imageId} alt= {item?.photoGalleryInfo?.headline} />
            <p>{item?.photoGalleryInfo?.headline}</p>
          </Carousel.Item>
        ))
      }
      </Carousel>
    </div>
  )
}

export default DisplayPhotos