<script>
    import { onMount, onDestroy } from 'svelte'
    import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
    import { sensorsStore } from '../state/sensorsStore';
    import {currentSensorStore} from '../state/currentSensorStore'
    import PopupContent from './PopupContent.svelte';
    
    let map;
    let mapContainer;
    
    onMount(() => {
        
        const apiKey = 'y5CZl1ZvHFSAUvHqlaKF';
        
        const initialState = { lng: -72, lat: 42.25, zoom: 7.5 };
        
        map = new Map({
            container: mapContainer,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom
        });
        
        
        
        sensorsStore.subscribe((sensors) => {
            
            for (let sensor of sensors) {
                
                var markerHeight = 50, markerRadius = 10, linearOffset = 25;
                
                var popup = new Popup({className: 'my-class'})
                popup.setLngLat([sensor.location[0], sensor.location[1]])
                popup.setHTML(`<div class="popup"id="popup${sensor.ID}"></div>`)
                popup.setMaxWidth("500px")
                popup["init"] = false
                popup.on("open", (e) => {
                    currentSensorStore.update(() => {
                        if (!popup["init"]) {
                            popup["init"] = true
                            return null
                        } else return sensor;
                    })
                })
                popup.on("close", (e) => {
                    console.log("ASDASD")
                    setTimeout(() => {
                        console.log(document.getElementsByClassName("popup"))
                        if (document.getElementsByClassName("popup").length > 0) return
                        currentSensorStore.update(() => {
                            console.log("ASDASD")
                            return null
                        })
                    }, 50)
                })
                popup.addTo(map);

                
                const container = document.getElementById(`popup${sensor.ID}`);
                const component = new PopupContent({ 
                    target: container, 
                    props: {
                        sensor: sensor
                    } 
                });
                

                
                
                let marker = new Marker({color: "#FF0000"})
                marker.setLngLat([sensor.location[0], sensor.location[1]])
                marker.setPopup(popup)
                marker.addTo(map);
                
            }
            
        })
        
    });
    
    onDestroy(() => {
        map.remove();
    });
    
</script>

<div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
        <div class="map" id="map" bind:this={mapContainer}></div>
    </div>
    
    <style>
        
        .map-wrap {
            position: relative;
            width: 100%;
            height: calc(100vh - 5rem); /* calculate height of the screen minus the heading */
        }
        
        .map {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .watermark {
            position: absolute;
            left: 10px;
            bottom: 10px;
            z-index: 999;
        }
        
    </style>