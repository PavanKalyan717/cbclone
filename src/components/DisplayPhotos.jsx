import React,{useEffect,useState} from 'react'
import { fetchFromAPI, fetchImagefromAPI } from '../utils/fetchFromAPI'
import PhotoCard from './PhotoCard'
import Carousel from 'react-grid-carousel'
import { Link } from 'react-router-dom'

const DisplayPhotos = () => {
  const [photos, setPhotos] = useState([])
  //const [isSelected, setIsSelected] = useState(false)
  const [galleryDetails, setgalleryDetails] = useState([])
  console.log('photos data is',photos?.photoGalleryInfoList)
  console.log(galleryDetails,galleryDetails?.photoGalleryDetails?.length)
  useEffect(() => {
    fetchFromAPI('photos/v1/index').then((data)=>(
      setPhotos(data)
    ))

  },[] )

  const handleClick=(id)=>{
    fetchFromAPI(`photos/v1/detail/${id}`).then((data)=>{
    console.log('gallery data',data)
    setgalleryDetails(data)
  }) 
  }
  
  return (
    <div className='py-5'> 
      <Carousel cols={4} rows={1} gap={10} loop >
      {
        photos?.photoGalleryInfoList?.map((item)=>(
          (item?.photoGalleryInfo?.imageId)?
          <Carousel.Item  >
            <button onClick={()=>handleClick(item?.photoGalleryInfo?.galleryId)} className='cursor-pointer'>
              <PhotoCard photoid={item?.photoGalleryInfo?.imageId} alt= {item?.photoGalleryInfo?.headline} />
            </button>
            <p>{item?.photoGalleryInfo?.headline}</p>
          </Carousel.Item>
          :
          <>
          </>
        ))
      }
      </Carousel>
      {
       (galleryDetails?.photoGalleryDetails?.length)
       ?
      <div >
        <p className='text-center py-10'>
          Image Gallery :
        </p>
        <Carousel cols={4} rows={2}>
        {
          galleryDetails?.photoGalleryDetails?.map((item)=>(     
            <Carousel.Item>
                <PhotoCard
                photoid={item?.imageId}
                alt={item?.caption}
                styling={'rounded-md'}
                />
                </Carousel.Item>
          ))
        }
        </Carousel>
      </div> 
      :
      <div>
        <p> Please select the Above News to view the Gallery Details</p>
      </div> 
      }
    </div>
  )
}

export default DisplayPhotos