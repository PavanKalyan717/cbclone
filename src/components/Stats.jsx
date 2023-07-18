import React,{useState,Fragment,useEffect} from 'react'
import { Listbox,Transition } from '@headlessui/react'
import ChevRonImg from '../assets/chevron-up-down.svg'
import statinfo from '../constants/stats'
import { fetchRankFromAPI } from '../utils/fetchFromAPI'
import RankDetails from './RankDetails'

const StatsInfoMenu = ({options}) => {
    const [selected, setSelected] = useState(options[0])
    const [rankData, setRankData] = useState([])
    console.log('selected is',selected)
    console.log('rank Data is',rankData)


    useEffect(() => {
        const getRank= ['batsmen','test','Men']

      if(statinfo.Category.includes(selected)){
        getRank[0]=selected
      }
      else if(statinfo.formatType.includes(selected)){
        getRank[1]=selected
      }
      console.log(getRank)
      fetchRankFromAPI(`stats/v1/rankings/${getRank[0]}?formatType=${getRank[1]}`).then((data)=>
      (setRankData(data)))
    },[selected])
    

    return (
        <div className='w-fit'>
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e)
                }}

            >
                <div className='relative w-fit z-10'>
                    <Listbox.Button className='relative w-full min-w-[147px] flex
                     justify-between items-center cursor-pointer rounded-lg bg-white
                      py-2 px-3 text-left shadow-md sm:text-sm border'>
                        <span className='block truncate'>{selected }</span>
                        < img
                            src={ChevRonImg}
                            width={20}
                            height={20}
                            className='ml-4 object-contain'
                            alt='chevron up down'
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opactiy-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options
                            className='absolute mt-1 max-h-60 w-full 
                            overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
                             ring-black ring-opacity-5 focus:outline-none sm:text-sm;'
                        >
                            {
                                options.map((option) => (
                                    <Listbox.Option
                                        key={option}
                                        value={option}
                                        className={({ active }) => `relative cursor-pointer select-none py-2 px-4
                        ${active ? 'bg-[#28bc95]' : 'text-gray-900'}
                        `}
                                    >
                                        {({ selected }) => (
                                            <span className={`block truncate  ${selected ? "font-medium" : "font-normal"}`}>
                                                {option}
                                            </span>
                                        )
                                        }
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            <RankDetails />
        </div>
    )
}

const Stats=()=>{

    return(
        <div className='flex justify-center' >
            {
                Object.keys(statinfo).map((key)=>(
                   <div className='px-4'>
                       <StatsInfoMenu options={statinfo[key]}  />
                    </div> 
                ))
            }
        </div>
    )
}


export default Stats