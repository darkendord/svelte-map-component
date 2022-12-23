import { writable } from "svelte/store";

type arr = {
    x:number,
    y:number
}
export const locationArr = writable<arr[]>([]);