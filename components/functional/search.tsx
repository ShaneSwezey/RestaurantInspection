import { useEffect, useState } from "react";
import { getRestaurants } from '../../utilities/swr/fetch';
import SideBar from "./side";
import Main from "../presentational/main";


const Search = () => {
    const [mounted, setMounted] = useState(false)
    const [rName, setRName] = useState('');
    const { data, isLoading, isError } = getRestaurants(mounted);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <SideBar 
                rName={rName}
                isLoading={isLoading}
                setRName={setRName}
            />
            <Main 
                data={data?.data}
            />
        </>
    );
}

export default Search;