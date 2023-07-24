import React from 'react'
import Carousel from 'react-grid-carousel'
import MatchDetails from './MatchDetails'

const LiveMatches = ({liveMatches}) => {
  return (
    <div>
        <Carousel rows={1} cols={5} >
        
        {
          liveMatches?.typeMatches?.map((item) => (
            item?.seriesMatches?.map((matchseries) =>

            // (
            //   <MatchDetails match={match?.seriesAdWrapper} />
            // )
            (
              matchseries?.seriesAdWrapper?.matches?.map((match)=>(
              <Carousel.Item>
                <MatchDetails match={match} />
              </Carousel.Item>
              ))
            )
            
            )
            )
            
            
            )
          }
      </Carousel>
    </div>
  )
}

export default LiveMatches