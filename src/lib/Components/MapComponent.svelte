<script>
// @ts-nocheck

    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import L from "leaflet";
    import { browser } from '$app/environment';
    import { Carousel } from "flowbite-svelte";
    

    ///////////////////////////////////////////////////////
    //Here I import the components data from the store ////
    ///////////////////////////////////////////////////////
    import {locationArr} from "../../store";
    /**
     * @type {{ x: number; y: number; }[]}
     */
    let locArr = [];
    
    locationArr.subscribe((val)=> locArr = val);
    






    //////////////////////////////////////////////////////////////////////////////////////////
    //Here the full rendering of the map component and I make a usage of the map library ////
    /////////////////////////////////////////////////////////////////////////////////////////
    /**
	 * @type {string | HTMLElement}
	 */
    let mapElement;
    /**
	 * @type {import("leaflet").Map | import("leaflet").LayerGroup<any>}
	 */
    let map;

    onMount(async () => {
        if(browser) {
            let leaflet = await import('leaflet');
            map = leaflet.map(mapElement).setView([55.704869, 12.532081], 13);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);



               // This is the dynamic component which popup on a location click. Styled with TailWind
                locArr.forEach((item)=>{
                    var customPopup =`
                    <div>
                        <div>
                            <img class='max-h-[100%] xm:max-h-[50]' src=${item.image_url} alt=${item.title}/>
                        </div>

                        <div class="mt-2">
                            <h5 class="font-light"> ${item.title}</h5>
                        </div>

                            <div class="flex">
                                <img src='https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/address_location_pin-512.png' class="h-6 mt-3" width='20'>
                                <p class='pl-1 font-bold'>${item.public_address}</p>
                            </div>
                            <div class="flex mt-[-20px]">
                                <img src='https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-dollar-circle-256.png' class="h-6 mt-3" width='20'>
                                <p class='pl-1 font-bold'>$${item.monthly_rent} <span class="font-light">kr./måned</span></p>
                            </div>

                   </div>
                        `;

                    var customOptions =
                    {
                    'maxWidth': '300',
                    "maxHeight": "400",
                    'className' : 'custom',
                    "margin":"0"
                    
                    }

              
             // @ts-ignore

            leaflet.marker([item.latitude, item.longitude])
            .addTo(map)
            .bindPopup( customPopup,customOptions)
            .openPopup();
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
    <!-- <div class="max-w-4xl"><h1><Carousel {locArr} {showThumbs}/></h1></div> -->
</main>






<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 100vh;
    }

</style>