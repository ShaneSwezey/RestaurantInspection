import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import { getRestaurants } from '../../utilities/swr/fetch';

const SideBar = () => {
    const [mounted, setMounted] = useState(false)
    const [rName, setRName] = useState('');
    const { data, isLoading, isError } = getRestaurants(mounted);

    useEffect(() => {
        setMounted(true);
    }, [])

    const submitName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // placeholder
        console.log('name:', rName);
    }

    return (
        <div className={styles.sideBar}>
            <h3>Search</h3>
            <form onSubmit={submitName}>
                <label
                    htmlFor='restaurant-name'
                >
                    Restaurant name
                </label>
                <input
                    name='restaurant-name'
                    type='text'
                    value={rName}
                    onChange={e => setRName(e.target.value)}
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