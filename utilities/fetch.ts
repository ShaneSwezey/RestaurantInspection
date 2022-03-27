import axios from "axios";

const data = { 
    "$$app_token": process.env.API_TOKEN
}

export const initialFetch = async () => {
    try {
        return await axios.get('https://data.kingcounty.gov/resource/f29f-zza5.json?$limit=20', { data });
    } catch(error) {
        throw error;
    }
}

export const searchByName = async (name: string) => {
    try {
        return await axios.get(`https://data.kingcounty.gov/resource/f29f-zza5.json?name=${name}&$limit=20`, { data });
    } catch(error) {
        throw error;
    }
}