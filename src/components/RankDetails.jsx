import React,{useState,useEffect} from 'react'
import statinfo from '../constants/stats'

const RankDetails = ({selected}) => {
  // const [category, setCategory] = useState('')
  // const [format, setFormat] = useState('')
  // const [gender, setGender] = useState('')
  
  // if(statinfo.Category.includes(selected)){
  //   setCategory(selected)
  // }
  // else if(statinfo.formatType.includes(selected)){
  //   setFormat(selected)
  // }
  // else{
  //   setGender(selected)
  // }
  // console.log('Search array is', category,format,gender)
  
  useEffect(() => {
   
  }, [])
  
  return (
    <div>
      {
        selected
      }
    </div>
  )
}

export default RankDetails