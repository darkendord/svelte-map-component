import { writable } from "svelte/store";

export const latitudeStore = writable(51.505); 
export const longitudeStore = writable(-0.09); 
export const locationArray = [];