import axios from "axios";
import useSWR from "swr";

const uri = 'https://data.kingcounty.gov/resource/f29f-zza5.json'; 

const fetcher = async (uri: string) => await axios.get(uri, { data: { 
    "$limit": 100,
    "$$app_token": process.env.API_TOKEN
    }
});

export function getRestaurants(mounted: boolean) {
    const { data, error } = useSWR(mounted ? uri : null, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}