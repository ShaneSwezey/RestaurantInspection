import { useEffect, useState } from "react";
import { getRestaurants } from '../../utilities/swr/axios';
import SideBar from "./sidebar";
import Main from "../presentational/main";


const Search = () => {
    const [mounted, setMounted] = useState(false)
    const [restaurantName, setRestaurantName] = useState('');
    const { data, isLoading, isError } = getRestaurants(mounted);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <SideBar 
                restaurantName={restaurantName}
                isLoading={isLoading}
                setRestaurantName={setRestaurantName}
            />
            <Main 
                restaurantList={data?.data}
            />
        </>
    );
}

export default Search;