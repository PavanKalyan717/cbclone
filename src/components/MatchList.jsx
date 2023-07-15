import React from 'react'
import { Link } from 'react-router-dom'

const MatchCard=({matchDetails})=>{
  
      if(matchDetails?.seriesAdWrapper){
      return(
      <div>
      <Link className='bg-red-50 m-1' to='/MatchDetails' state={ matchDetails?.seriesAdWrapper}>
      {
        matchDetails?.seriesAdWrapper?.seriesName
      }
      
      </Link>
      </div>
      )
}
}

const MatchList = ({ list }) => {
  console.log('list is \n', list?.typeMatches)
  return (
    <div className='flex flex-row justify-between'>
      {
        list?.typeMatches?.map((item) => (
          <div key={item.matchType} >
            <p >
            {item.matchType}
            </p>
            {
              item?.seriesMatches?.map((matchDetails)=>(
                <MatchCard matchDetails={matchDetails}  />
              ))
            }
          </div>
        ))
      }

    </div>
  )
}

export default MatchList