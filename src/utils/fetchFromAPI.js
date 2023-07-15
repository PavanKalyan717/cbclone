import axios from "axios";

const BASE_URL= 'https://cricbuzz-cricket.p.rapidapi.com'

const options={
    url:BASE_URL,
    headers:{
        'X-RapidAPI-Key': '6ef6c4b183mshfd73a91eef2fb18p1c4640jsn6d7a9a67fe31',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
}

export const fetchFromAPI= async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    console.log(data)
    return data
}