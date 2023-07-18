import React, { useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useState } from 'react'
import MatchList from './MatchList'
import data from '../constants/index'
import News from './News'
const Feed = () => {
  const [matchlist, setMatchlist] = useState(data)
  //console.log('Hello data',data?.data[0])
  // useEffect(()=>{
  //   fetchFromAPI('matches/v1/recent').then((data)=>{
  //     console.log('data is',data)
  //     setMatchlist(data)
  //   })
  // },[])

  return (
    <div>
      <MatchList list={matchlist}  />
      <News />
    </div>
  )
}

export default Feed