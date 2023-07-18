import React from 'react'
import news from '../constants/news'
import Carousel from 'react-grid-carousel'
import PhotoCard from './PhotoCard'
import { Link } from 'react-router-dom'

const News = () => {
  console.log('news is',news?.storyList)
  return (
    <div className='py-4'>
      <h1 className='text-center py-4'>
        News:
      </h1>
      <Carousel cols={4} rows={1} loop>
        {
          news?.storyList.map((item)=>(
            (item?.story?.hline)?
            <Carousel.Item >
              <Link to='/NewsDetails' state={item?.story?.id}>
                <PhotoCard photoid={item?.story?.imageId} alt={item?.story?.hline}  />
                <p >{item?.story?.hline}</p>
                <h1 >{item?.story?.intro}</h1>
              </Link>
            </Carousel.Item>
            :<>
            </>
          ))
        }
      </Carousel>
    </div>
  )
}

export default News