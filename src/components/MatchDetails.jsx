import React from 'react'
import Carousel from 'react-grid-carousel'
import { useLocation } from 'react-router-dom'

const MatchDetails = () => {
    const location = useLocation()
    const details = location.state
    console.log('match details are', details)
  return (
    <div  className='py-6' >
        <Carousel cols={4} rows={1}>
            
        {
            details?.matches?.map((match)=>(
                <Carousel.Item>
                <div className='p-5 bg-white h-[12rem] w-[20rem] rounded-lg shadow-lg cursor-pointer '>
                    <p className='text-[12px]'>{match?.matchInfo?.seriesName}</p>
                    <div className='flex justify-between items-center py-2'>
                        <><p>{match?.matchInfo?.matchDesc}</p>
                        </>
                        <>
                        <p className='rounded-full bg-red-700 text-[12px] px-2 text-white font-semibold'>
                            {match?.matchInfo?.matchFormat}
                        </p>
                        </>
                    </div>
                    {/* <p>{match?.matchInfo?.team1?.teamSName} vs {match?.matchInfo?.team2?.teamSName}</p>     */}
                    <div>
                        
                        <div className='flex flex-row justify-between text-sm'>
                            <p>{match?.matchInfo?.team1?.teamSName}</p>
                            <p>
                            {match?.matchScore?.team1Score.inngs1?.runs}/{match?.matchScore?.team1Score.inngs1?.wickets}
                            <span> </span>
                            ({match?.matchScore?.team1Score.inngs1?.overs})</p>
                        </div>
                        <div className='flex flex-row justify-between text-sm '>
                            <p>{match?.matchInfo?.team2?.teamSName}</p>
                            <p>
                            {match?.matchScore?.team2Score.inngs1?.runs}/{match?.matchScore?.team2Score.inngs1?.wickets}
                            <span> </span>
                            ({match?.matchScore?.team2Score.inngs1?.overs})</p>
                        </div>
                    </div>
                    <p className='text-[14px] py-2'>{match?.matchInfo?.status}</p>
                           
                </div>
     </Carousel.Item>
            ))
        }
        </Carousel>
    </div>
  )
}

export default MatchDetails