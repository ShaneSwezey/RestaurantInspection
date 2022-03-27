import { useEffect, useState } from "react";
import SideBar from "./sidebar";
import RestaurantList from "../presentational/restaurantList";
import { initialFetch, searchByName } from "../../utilities/fetch";


const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [restaurantName, setRestaurantName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const res = await initialFetch();
                setData(res.data);
            } catch(error) {
                // add error typings
                //setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetch();
    }, []);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            const res = await searchByName(restaurantName.toUpperCase())
            setData(res.data);
        } catch(error) {
            // add error typing
            //setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <SideBar 
                restaurantName={restaurantName}
                isLoading={isLoading}
                setRestaurantName={setRestaurantName}
                onSubmit={onSubmit}
            />
            <RestaurantList 
                restaurantList={data}
            />
        </>
    );
}

export default Main;