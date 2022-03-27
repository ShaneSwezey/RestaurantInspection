import { RestaurantInspection } from "../../interfaces/restaurant";
import { groupRestaurantByAddress } from "../../utilities/collections";
import RestaurantContent from "./restaurant/content";
import styles from '../../styles/Home.module.css';

interface Props {
    restaurantList?: RestaurantInspection[];
}

// Placeholder name, will rename
const Main = ({ restaurantList }: Props) => {
    return (
        <div className={styles.main}>
            <h1>Restaurants</h1>
            {
                Array.from(groupRestaurantByAddress(restaurantList).values()).map((restaurant, index) => (
                    <RestaurantContent 
                        key={index}
                        restaurant={restaurant} 
                    />
                ))
            }
        </div>
    );
}

export default Main;