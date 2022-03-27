import { RestaurantInspection } from "../interfaces/restaurant";

export const groupRestaurantByAddress = (data?: RestaurantInspection[]) => {
    console.log('data:', data);
    const map = new Map<string, RestaurantInspection[]>();
    (data || []).forEach(data => {
        const key = `${data.name}-${data.address}`;
        if (map.has(key)) {
            map.get(key)?.push(data);
        } else {
            map.set(key, [data]);
        }
    });
    console.log('map:', map);
    return map;
}