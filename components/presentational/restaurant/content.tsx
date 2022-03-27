import { useState } from "react";
import { RestaurantInspection } from "../../../interfaces/restaurant";
import styles from '../../../styles/Home.module.css';

interface Props {
    restaurant: RestaurantInspection[];
}

const RestaurantContent = ({ restaurant }: Props) => {
    const [isActive, setIsActive] = useState(false);

    // We can use array index as a key since currently we are not altering the list aka filtering, removing, etc..
    // When I add in altering functionality I will not be able to use index as a key
    return (
        <div>
            <div
                className={styles.restaurantTitle}
                onClick={() => setIsActive(!isActive)}
            >
                <p>{isActive ? '-' : '+'}</p>
                <p className={styles.restaurantTitleText}>{restaurant[0].name} - Address: {restaurant[0].address}</p>
            </div>
            {
                isActive &&
                    <div className={styles.restaurantData}>
                        <table
                            className={styles.restaurantTable}
                        >
                            <thead>
                                <tr>
                                    <th>Inspection Date</th>
                                    <th>Result</th>
                                    <th>Violation Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    restaurant.map((element, index) => (
                                        <tr 
                                            key={index}
                                            className={styles.restaurantRow}
                                        >
                                            <td>{new Date(element.inspection_date).toLocaleDateString()}</td>
                                            <td>{element.inspection_result}</td>
                                            <td>{element.violation_description ? element.violation_description : 'n/a'}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default RestaurantContent;