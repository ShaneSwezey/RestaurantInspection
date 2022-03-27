import { RestaurantInspection } from "../interfaces/restaurant";

export const groupRestaurantByAddress = (data?: RestaurantInspection[]) => {
    const map = new Map<string, RestaurantInspection[]>();
    (data || []).forEach(data => {
        const key = `${data.name}-${data.address}`;
        if (map.has(key)) {
            map.get(key)?.push(data);
        } else {
            map.set(key, [data]);
        }
    });
    return map;
}