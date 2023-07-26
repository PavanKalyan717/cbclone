import axios from "axios";

const BASE_URL= 'https://cricbuzz-cricket.p.rapidapi.com'

const options={
    url:BASE_URL,
    headers:{
        'X-RapidAPI-Key': '6ef6c4b183mshfd73a91eef2fb18p1c4640jsn6d7a9a67fe31',
        // 'X-RapidAPI-Key': '5bfa977bd8mshfb706f0ccc12820p1e70c9jsn1d42fa9f516a',
        
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
}

export const fetchFromAPI= async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    console.log('url is',url)
    return data
}

export const fetchImagefromAPI= async(url)=>{
    const response = await fetch(`${BASE_URL}/${url}?p=det&d=high`,options)
    const imageBlob = await response.blob()
    const imageBlobUrl= URL.createObjectURL(imageBlob)
    return imageBlobUrl
}

export const fetchRankFromAPI= async(url)=>{
    const response = await fetch(`${BASE_URL}/${url}`,options)
    const result = await response.json()
    return result
}