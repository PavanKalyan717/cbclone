import { Tab } from '@headlessui/react'
import React, { Fragment,useState,useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import newscat from '../constants/newscat'
import PhotoCard from './PhotoCard'
import Carousel from 'react-grid-carousel'
import { Link } from 'react-router-dom'

// const NewsSection = () => {
//   const options=['1','2','3','4','5']
//   const [cat, setCat] = useState([])
//   const [catData, setCatData] = useState([])
//   const [id, setId] = useState(1)
//   console.log(cat)
//   console.log('cat',catData)
//   console.log('id is',id)
//   useEffect(() => {
//     fetchFromAPI('news/v1/cat').then((data)=>{
//       console.log('api called')
//       setCat(data?.storyType)
//   })
    
//   }, [])
  

//   return (
//     <Tab.Group>
//     <Tab.List className='flex justify-center' >
//       {
//         cat.map((item)=>(
//           <Tab as={ Fragment } className='px-4'  >
//                  {({ selected }) => (
//             /* Use the `selected` state to conditionally style the selected tab. */
//             <button
//               className={
//                 selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
//               }
//             onClick={()=>setId(item.id)} 
//             >
//               {item.name}
//             </button>
//           )}
//           </Tab>
//         ))
//       }
      
//     </Tab.List>
//     <Tab.Panels>
//       {
//         cat.map((item)=>(
          
//       <Tab.Panel>{item.description}</Tab.Panel>
//         ))
//       }
//     </Tab.Panels>
//   </Tab.Group>
//   )
// }


export const NewsSection = () => {
  //console.log(newscat)
  const [id, setId] = useState(1)
  const [dataById, setDataById] = useState()
  console.log(dataById)
  useEffect(() => {
    fetchFromAPI(`news/v1/cat/${id}`).then((data)=>
    {setDataById(data)
    console.log('api called')}
    )
  }, [id])
  

  const handleClick=(item)=>{
    console.log(item.id)
    setId(item.id)
  }

  return (
    <div className='flex flex-col mb-14' >
      <div className='flex justify-center py-4'>

      {
        newscat.storyType.map((item)=>(
          <button className=' hover:bg-[#009270] hover:text-white focus:bg-[#009270] focus:text-white
           rounded-lg mx-2 font-semibold  text-xs px-4 py-1 ' onClick={()=>handleClick(item)}>
            {item.name}
          </button>
        ))
      }
      </div>
      {/* {
        dataById?.storyList?.map((item)=>(

          <div className='flex'>
            <PhotoCard photoid={item?.story?.imageId} alt={item?.coverImage?.caption} styling='' />
            <div>
              <p>{item?.story?.context}</p>
              <p>{item?.story?.hline}</p>
              <p>{item?.story?.intro}</p>
              <p>{item?.story?.seoHeadline}</p>
            </div>
          </div>
          
        ))
      } */}
      
        <div className='flex text-sm'>
          <Carousel cols={4} rows={2} loop>
            {
              dataById?.storyList.map((item)=>(
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
      
    </div>
  )
}



export default NewsSection