<script>
    import { detectionStore } from "../state/detectionsStore";
    import { currentSensorStore } from "../state/currentSensorStore";
    import fetchPhoto from "./fetchPhoto";
  import { onDestroy } from "svelte";
    import lookup from "./reverseGeocode.js"
  import Detection from "./Detection.svelte";
  import { showingDataStore } from "../state/showingDataStore";



    

    export let sensor

    let town, state
    
    let address = lookup(sensor.location[1], sensor.location[0])
    state = address.state
    town = address.city
        

    $: count = 0
    detectionStore.subscribe((detections) => {
        if (detections[sensor.name] != null)
            count = detections[sensor.name].length
    })

    

    function selectSensor() {
        window.open(sensor.URL)
    }

    

    let exitButtons = document.getElementsByClassName("maplibregl-popup-close-button")
   
        
            
        
    

    

</script>

<main>
    <h1>{sensor.name}</h1>
    <h2>{town}, {state}</h2>

    <div id="info">
       <h3><b>{count}</b> birds heard today!</h3>
       <button on:click={selectSensor}>View<br>Page</button>
    </div>

    

</main>

<style>
    #info {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    h1, h2, h3, button {
        font-family: "Prompt";
        text-align: center;
    }
    h1 {
        font-size: 2rem;
        /* line-height: 2rem; */
        
    }
    h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 400;
    }
    h3{
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 100;
        margin: 0.5rem;
        
    }
    b {
        
    }
    button {
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: #F1FFE7;
        border: outset 5px #D8FFC6;
        transition: 0.2s background-color, 0.2s border;
        font-size: 1.25rem;
        font-weight: 500;
        font-style: oblique;
        line-height: 1.25rem;
        cursor:grab;

    }

    button:hover {
        background-color: #44CF6C;
        border: outset 5px #3AB25C;

    }
   
    
   

</style>