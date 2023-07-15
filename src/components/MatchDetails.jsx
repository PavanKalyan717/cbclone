import React from 'react'
import { useLocation } from 'react-router-dom'

const MatchDetails = () => {
    const location = useLocation()
    const details = location.state
    console.log('match details are', details)
  return (
    <div className='grid grid-cols-4 grid-flow-row'>
        {
            details?.matches?.map((match)=>(
                <div className='p-5'>
                    <p>{match?.matchInfo?.matchFormat}</p>
                    <p>{match?.matchInfo?.seriesName}</p>
                    <p>{match?.matchInfo?.status}</p>
                    <p>{match?.matchInfo?.team1?.teamSName} vs {match?.matchInfo?.team2?.teamSName}</p>           
                    <div>
                        <p>Match Score:</p>
                        <div className='flex flex-row justify-between'>
                            <p>{match?.matchInfo?.team1?.teamSName}</p>
                            <p>
                            {match?.matchScore?.team1Score.inngs1?.runs}/{match?.matchScore?.team1Score.inngs1?.wickets}
                            <span> </span>
                            ({match?.matchScore?.team1Score.inngs1?.overs})</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p>{match?.matchInfo?.team2?.teamSName}</p>
                            <p>
                            {match?.matchScore?.team2Score.inngs1?.runs}/{match?.matchScore?.team2Score.inngs1?.wickets}
                            <span> </span>
                            ({match?.matchScore?.team2Score.inngs1?.overs})</p>
                        </div>
                    </div>       
                </div>
            ))
        }
    </div>
  )
}

export default MatchDetails