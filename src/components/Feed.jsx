import React, { useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useState } from 'react'
import { MatchList, MatchCard } from './MatchList'
import data from '../constants/index'
import News from './News'
import MatchDetails from './MatchDetails'
import { Routes, Route } from 'react-router-dom'
import Carousel from 'react-grid-carousel'
import LiveMatches from './LiveMatches'

const Feed = () => {
  const [matchlist, setMatchlist] = useState(data)
  const [liveMatches, setLiveMatches] = useState([])
  console.log(liveMatches)
  //console.log('Hello data',data?.data[0])
  // useEffect(()=>{
  //   fetchFromAPI('matches/v1/recent').then((data)=>{
  //     console.log('data is',data)
  //     setMatchlist(data)
  //   })
  // },[])
  useEffect(() => {
    fetchFromAPI('matches/v1/live').then((data) =>
      setLiveMatches(data)
    )
  }, [])


  return (
    <div>
      <MatchList list={matchlist} />
      <LiveMatches liveMatches={liveMatches} />
      {/* <News /> */}
    </div>
  )
}

export default Feed