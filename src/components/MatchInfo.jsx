import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const MatchInfo = () => {
    const { matchid } = useParams()
    const [matchInfo, setMatchInfo] = useState()
    console.log('matchInfo is', matchInfo)

    useEffect(() => {
        fetchFromAPI(`mcenter/v1/${matchid}/scard`).then((data) =>
            setMatchInfo(data)
        )
    }, [matchid])

    return (
        <div >
            
            <p className='mx-2 text-lg font-bold py-2'>{matchInfo?.status}</p>

            {

                matchInfo?.scoreCard?.map((item) => (
                    <div className='py-2'>
                        <div className='w-[50%] flex justify-between  bg-slate-600 mx-2 p-2 text-white font-semibold'>
                            <p>{item?.batTeamDetails?.batTeamName}</p>

                            <div className='flex'>
                                <p>{item?.scoreDetails?.runs}-{item?.scoreDetails?.wickets}</p>
                                <p>({item?.scoreDetails?.overs} Overs)</p>
                            </div>
                        </div>
                        {/* 
                        <div className='w-full text-center'>
                            {
                                Object?.entries(item?.batTeamDetails?.batsmenData).map(([batkey,batvalue])=>
                                        (
                                            <div className='flex justify-center items-center'>
                                                <p>{batvalue?.batName}</p>
                                                <p>{batvalue?.outDesc}</p>
                                                <p>{batvalue?.runs}</p>
                                                <p>{batvalue?.balls}</p>
                                                <p>{batvalue?.fours}</p>
                                                <p>{batvalue?.strikeRate}</p>
                                                <p>{batvalue}</p>
                                            </div>
                                            <>
                                            {
                                                Object.entries(batvalue).map(([key,value])=>
                                                (
                                                   <div>
                                                    <p>{key} : {value}</p>
                                                   </div>
                                                )
                                                )
                                            }
                                            </>
                                        )
                                    
                                        
                                    
                                )
                            }
                        </div>     */}
                        <div>
                            <table className='w-[50%] text-center  mx-2'>
                                <thead className='bg-slate-500'>
                                    <tr >
                                        <th>Batter</th>
                                        <th>Out Description1</th>
                                        <th>Runs</th>
                                        <th>Balls</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>


                                {
                                    Object.entries(item?.batTeamDetails?.batsmenData).map(([batkey, batvalue]) => (
                                        <tbody>
                                            <tr className='py-10' >
                                                <td>{batvalue?.batName}</td>
                                                <td>{batvalue?.outDesc}</td>
                                                <td>{batvalue?.runs}</td>
                                                <td>{batvalue?.balls}</td>
                                                <td>{batvalue?.fours}</td>
                                                <td>{batvalue?.sixers}</td>
                                                <td>{batvalue?.strikeRate}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                        </div>

                    </div>
                ))
            }
            <div>
                <p>Match Info : </p>
                <p>{matchInfo?.matchHeader?.team1?.shortName} Vs {matchInfo?.matchHeader?.team2?.shortName}</p>
                <p>{matchInfo?.matchHeader?.seriesName}</p>
                <p>{matchInfo?.matchHeader?.matchDescription}</p>
                <p>{matchInfo?.matchHeader?.tossResults?.tossWinnerName}
                    won the toss and decided to {matchInfo?.matchHeader?.tossResults?.decision}</p>
                <p>{matchInfo?.matchHeader?.playersOfTheMatch[0]?.name}</p>
                <p>{matchInfo?.matchHeader?.playersOfTheSeries[0]?.name}</p>
            </div>

        </div>
    )
}

export default MatchInfo