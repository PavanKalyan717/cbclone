import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const MatchInfo = () => {
    const {matchid} = useParams()
    const [matchInfo, setMatchInfo] = useState()
    console.log()

    useEffect(() => {
        fetchFromAPI(`mcenter/v1/${matchid}/scard`).then((data) =>
            setMatchInfo(data)
        )
    },[matchid])

    return (
        <div>
            {
                matchInfo?.scoreCard.map((item) => (
                    <div>  
                        <div>
                            <p>{item?.batTeamDetails?.batTeamName}</p>
                            <p>{item?.scoreDetails?.runs}-{item?.scoreDetails?.wickets}</p>
                            <p>{item?.scoreDetails?.overs} Overs</p>
                        </div>
                        {/* <div>
                            {
                            item?.batTeamDetails?.batsmenData
                            
                            }
                        </div>     */}
                    </div>
                ))
            }
        </div>
    )
}

export default MatchInfo