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
                    <div className='py-2 border-b-2 border-black '>
                        <div className='flex justify-between  bg-[#009270] m-2 p-2 text-white font-semibold'>
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
                        <div className='flex justify-evenly pb-5' >
                            <table className='w-[55%] text-center mx-2'>
                                <thead className='bg-[#009270]'>
                                    <tr className='border-2 border-black text-white' >
                                        <th>Batter</th>
                                        <th>Out Description</th>
                                        <th>Runs</th>
                                        <th>Balls</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>


                                {
                                    Object.entries(item?.batTeamDetails?.batsmenData).map(([batkey, batvalue]) => (
                                        <tbody  >
                                            <tr className=' border-y-2 border-black ' >
                                                <td className=' border-b-2 border-l-2 border-black '>{batvalue?.batName}</td>
                                                <td className=' border-b-2 border-black   '>{batvalue?.outDesc}</td>
                                                <td className=' border-b-2 border-black   '>{batvalue?.runs}</td>
                                                <td className=' border-b-2 border-black   '>{batvalue?.balls}</td>
                                                <td className=' border-b-2 border-black   '>{batvalue?.fours}</td>
                                                <td className=' border-b-2 border-black   '>{batvalue?.sixers}</td>
                                                <td className=' border-b-2 border-r-2 border-black   '>{batvalue?.strikeRate}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                            <table className='w-[40%] text-center  mx-2'>
                                <thead className='bg-[#009270]'>
                                    <tr className=' border-2 border-black text-white ' >
                                        <th>Bowler</th>
                                        <th>Overs</th>
                                        <th>Maidens</th>
                                        <th>Runs</th>
                                        <th>Wickets</th>
                                        <th>No Balls</th>
                                        <th>Wides</th>
                                        <th>Economy</th>
                                    </tr>
                                </thead>


                                {
                                    Object.entries(item?.bowlTeamDetails?.bowlersData).map(([bowkey, bowlvalue]) => (
                                        <tbody>
                                            <tr className='py-10' >
                                                <td  className=' border-b-2 border-l-2 border-black   '>{bowlvalue?.bowlName}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.overs}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.maidens}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.runs}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.wickets}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.no_balls}</td>
                                                <td  className=' border-b-2 border-black   '>{bowlvalue?.wides}</td>
                                                <td className=' border-b-2 border-r-2 border-black   ' >{bowlvalue?.economy}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>

                        </div>
                        <div className='flex justify-around'>
                            <p>Extras: </p>
                            <p>Total: {item?.extrasData?.total}</p>
                            <p>Byes: {item?.extrasData?.byes}</p>
                            <p>legByes: {item?.extrasData?.legByes}</p>
                            <p>No Balls: {item?.extrasData?.noBalls}</p>
                            <p>Wides: {item?.extrasData?.wides}</p>
                            <p>Penalty: {item?.extrasData?.penalty}</p>
                        </div>
                        <div className='flex justify-evenly py-4'>
                            <p>Fall of Wickets: </p>
                            <p>{Object.keys(item?.wicketsData).length}</p>
                            <p>{item?.wicketsData?.wkt_1?.batName}</p>
                            {

                                Object.entries(item?.wicketsData).map(([key, value]) => (

                                    <div>
                                        <p>{value?.batName}</p>
                                        <p>{value?.wktRuns}-{value?.wktNbr}</p>
                                        <p>{value?.wktOver}</p>
                                        <p>{key}</p>
                                    </div>
                                ))
                            }
                            {/* {
                            Array.from({length: Object.keys(item?.wicketsData).length},(v,i)=>i+1).map(
                                (value)=>(
                                    <div>
                                       { 
                                        `item?.wicketsData?.wkt_${value}?.batName`
                                       }
                                    </div>
                                )
                            )
                        }
                         */}
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