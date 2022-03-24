import { RestaurantInspection } from "../../interfaces/restaurant";
import styles from '../../styles/Home.module.css'
import { groupRestaurantByAddress } from "../../utilities/collections";

interface Props {
    data?: RestaurantInspection[];
}

// Placeholder name, will rename
const Main = ({ data }: Props) => {
    // We can use array index as a key since currently we are not altering the list aka filtering, removing, etc..
    // When I add in altering functionality I will not be able to use index as a key
    return (
        <div className={styles.main}>
            <h1>Restaurants</h1>
            <ul className={styles.dataList}>
                {
                    Array.from(groupRestaurantByAddress(data).values()).map((data, index) => (
                        <div
                            key={index}
                        >
                            {data[0].inspection_business_name} - {data[0].address}
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default Main;