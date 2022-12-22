<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import * as L from "leaflet"
	import { latitudeStore, longitudeStore } from "../../stores/mapStore";

    

    

    
    /**
	 * @type {HTMLDivElement}
	 */
    let mapElement;
    /**
     * @type {{ remove: () => void; }}
	 */
    let map;
    onMount(async () => {
        if(browser) {
            // @ts-ignore
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // @ts-ignore
            }).addTo(map);

            // @ts-ignore

            let arr = [[51.5, -0.09],[53.5, -0.09]];

            arr.forEach((el)=>{
                return(
                    // @ts-ignore
                    leaflet.marker(el).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup()
                )
            })
           
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>










<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>