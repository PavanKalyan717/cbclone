//import React,{useState,Fragment,useEffect} from 'react'
// import { Listbox,Transition } from '@headlessui/react'
// import ChevRonImg from '../assets/chevron-up-down.svg'
import statinfo from '../constants/stats'
import { fetchRankFromAPI } from '../utils/fetchFromAPI'
// import RankDetails from './RankDetails'
import ranks from '../constants/ranks'

// const StatsInfoMenu = ({options}) => {
//     const [selected, setSelected] = useState(options[0])
//     const [rankData, setRankData] = useState([])
//     console.log('selected is',selected)
//     console.log('rank Data is',rankData)


//     // useEffect(() => {
//     //     const getRank= ['batsmen','test','Men']

//     //   if(statinfo.Category.includes(selected)){
//     //     getRank[0]=selected
//     //   }
//     //   else if(statinfo.formatType.includes(selected)){
//     //     getRank[1]=selected
//     //   }
//     //   console.log(getRank)
//     //   fetchRankFromAPI(`stats/v1/rankings/${getRank[0]}?formatType=${getRank[1]}`).then((data)=>
//     //   (setRankData(data)))
//     // },[selected])


//     return (
//         <div className='w-fit'>
//             <Listbox
//                 value={selected}
//                 onChange={(e) => {
//                     setSelected(e)
//                 }}

//             >
//                 <div className='relative w-fit z-10'>
//                     <Listbox.Button className='relative w-full min-w-[147px] flex
//                      justify-between items-center cursor-pointer rounded-lg bg-white
//                       py-2 px-3 text-left shadow-md sm:text-sm border'>
//                         <span className='block truncate'>{selected }</span>
//                         < img
//                             src={ChevRonImg}
//                             width={20}
//                             height={20}
//                             className='ml-4 object-contain'
//                             alt='chevron up down'
//                         />
//                     </Listbox.Button>
//                     <Transition
//                         as={Fragment}
//                         leave='transition ease-in duration-100'
//                         leaveFrom='opactiy-100'
//                         leaveTo='opacity-0'
//                     >
//                         <Listbox.Options
//                             className='absolute mt-1 max-h-60 w-full 
//                             overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
//                              ring-black ring-opacity-5 focus:outline-none sm:text-sm;'
//                         >
//                             {
//                                 options.map((option) => (
//                                     <Listbox.Option
//                                         key={option}
//                                         value={option}
//                                         className={({ active }) => `relative cursor-pointer select-none py-2 px-4
//                         ${active ? 'bg-[#28bc95]' : 'text-gray-900'}
//                         `}
//                                     >
//                                         {({ selected }) => (
//                                             <span className={`block truncate  ${selected ? "font-medium" : "font-normal"}`}>
//                                                 {option}
//                                             </span>
//                                         )
//                                         }
//                                     </Listbox.Option>
//                                 ))
//                             }
//                         </Listbox.Options>
//                     </Transition>
//                 </div>
//             </Listbox>
//             <RankDetails selected={selected}/>
//         </div>
//     )
// }

// const Stats=()=>{

//     return(
//         <div className='flex justify-center' >
//             {
//                 Object.keys(statinfo).map((key)=>(
//                    <div className='px-4'>
//                        <StatsInfoMenu options={statinfo[key]}  />
//                     </div> 
//                 ))
//             }
//         </div>
//     )
// }


// export default Stats




import React, { useState } from 'react'
import PhotoCard from './PhotoCard'

const Stats = () => {
    const [category, setCategory] = useState('batsmen')
    const [format, setFormat] = useState('odi')
    const [gender, setGender] = useState('Men')
    const [rankData, setRankData] = useState([])
    const [isSubmitted, setisSubmitted] = useState(false)
    console.log('rank data is',rankData)
    const Trend=({trend})=>{
        if(trend==='Flat')
        {
            return(<>{'-'}</>)
        }
        else if(trend==='Up')
        {
            return(<>{'▲'}</>)
        }
        else{
            return(<>{'▼'}</>)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        
        console.log(category, format, gender)
        fetchRankFromAPI(`stats/v1/rankings/${category}?formatType=${format}`).then(
            (data) => {
                console.log('api call happened')
                setRankData(data)
                console.log(rankData)
                setisSubmitted(true)
            }
        )
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleFormat = (e) => {
        setFormat(e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-row justify-center py-2'>
                <select value={category} onChange={handleCategory} className='p-2 rounded-lg mx-4' >
                    {
                        statinfo.Category.map((item) => (
                            <option value={item} className='py-2' >
                                {item}
                            </option>
                        ))
                    }
                </select>

                <select value={format} onChange={handleFormat} className='p-2 rounded-lg mx-4'>
                    {
                        statinfo.formatType.map((item) => (
                            <option value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                <select value={gender} onChange={handleGender} className='p-2 rounded-lg mx-4' >
                    {
                        statinfo.Gender.map((item) => (
                            <option value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                <input type='submit' value='Submit' 
                className='hover:bg-[#28bc95] bg-white cursor-pointer p-2 rounded-lg mx-4' />
            </form>
            <div>
            {
                isSubmitted?
                <div>
                <table className='w-full text-center'>
                    <thead>
                        <tr >
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Rating</th>
                            <th>Points</th>
                            <th>trend</th>
                            <th>profile Pic</th>
                        </tr>
                    </thead>
                    

                        {
                            rankData.rank.map((item) => (
                            <tbody>
                                <tr className='py-10' >
                                    <td>{item.rank}</td>
                                    <td>{item.name}</td>
                                    <td>{item.country}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.points}</td>
                                    <td><Trend trend={item.trend}/></td>
                                    <td className='content-center' >
                                
                                        <PhotoCard photoid={item.faceImageId || item?.imageId} alt={item.name}
                                        styling={'rounded-full w-[40px] h-[40px]'}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                            ))
                        } 
                </table>
                </div>
                :
                <div className='flex justify-center py-6'>
                    <p>
                        Please select the Categories and click submit to see the Ranks.
                    </p>
                </div>
            }
            </div>
        </div>
    )
}

export default Stats