import { Dispatch, SetStateAction } from 'react';
import styles from '../../styles/Home.module.css'

interface Props {
    restaurantName: string;
    isLoading: boolean;
    setRestaurantName: Dispatch<SetStateAction<string>>
}

const SideBar = ({ restaurantName, isLoading, setRestaurantName }: Props) => {

    const submitName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // placeholder
    }

    return (
        <div className={styles.sideBar}>
            <h3>Search</h3>
            <form onSubmit={submitName}>
                <label
                    htmlFor='restaurantName'
                >
                    Restaurant name
                </label>
                <input
                    name='restaurantName'
                    id='restaurantName'
                    type='text'
                    value={restaurantName}
                    onChange={e => setRestaurantName(e.target.value)}
                />
                <input
                    type='submit'
                    value='Submit'
                    disabled={isLoading}
                />
            </form>
        </div>
    );
}

export default SideBar;