<script>
    import { currentSensorStore } from "../state/currentSensorStore";
    import { detectionStore } from "../state/detectionsStore";
    import { sensorsStore } from "../state/sensorsStore";
    import Detection from "./Detection.svelte";
    

    let active = false
    currentSensorStore.subscribe((currentSensor) => {
        active = currentSensor != null
    });

    $: currentSensorDetections = []
    function updateCurrentSensorDetections () {
        if ($currentSensorStore != null && $detectionStore != null) {
            currentSensorDetections = $detectionStore[$currentSensorStore["name"]]
        }
        if (currentSensorDetections == null) currentSensorDetections = []
    }
    detectionStore.subscribe(updateCurrentSensorDetections)
    currentSensorStore.subscribe(updateCurrentSensorDetections)

    $: loadedDetectionsQuantity = 10
    $: loadedDetections = currentSensorDetections.slice(0, loadedDetectionsQuantity)

    function loadMore(e) {
        if (e.target.scrollHeight - e.target.scrollTop < 1000) {
            loadedDetectionsQuantity += 10
        }
    }


    

    

</script>



<main on:scroll={loadMore} class:inactive={!active} bind:this={$currentSensorStore}>

    <h1>Latest Detections</h1>
    {#each loadedDetections as detection (JSON.stringify(detection))}
        <Detection sensor={$currentSensorStore} detection={detection}></Detection>
    {/each}


</main>

<style>
    h1 {
        font-family: "Prompt";
        font-weight: 500;
        color: #F1FFE7;
        text-align: center;
        font-size: 2.5rem;
        line-height: 2rem;
        margin-top: 1rem;
        white-space: nowrap;
    }
    main {
        width: 40rem;
        height: calc(100vh - 5rem);
        background-color: #63585E;
        transition: 0.5s opacity, 0.5s width;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .inactive { 
        width: 0;
    }
        
    
</style>