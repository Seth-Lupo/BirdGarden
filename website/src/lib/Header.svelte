<script>
    import { detectionStore } from "../state/detectionsStore";
  import { sensorsStore } from "../state/sensorsStore";
    import Navbar from "./Navbar.svelte";


    function countSensors(detections) {
        let count = 0
        for (let sensor in detections) count += 1
        return count
    } 

    function countDetections(detections) {
        let count = 0
        for (let sensor in detections) count += detections[sensor].length
        return count
    } 

    var liveSensors, dailyDetections
    detectionStore.subscribe((detections) => {
        liveSensors = countSensors(detections)
        dailyDetections = countDetections(detections)
    })    

</script>

<main>

    <div id="titleDiv">
        <h1>Bird Garden</h1>
        <img src="/logo.png" alt="">
    </div>

    <h2>Currently <b>{liveSensors}</b> live station with a total of <b>{dailyDetections}</b> daily detections</h2>
    <h3><b>{dailyDetections}</b> daily detections</h3>

    <Navbar></Navbar>

</main>

<style>
    main {
        width: 100vw;
        height: 5rem;
        background-color: #44CF6C;
        z-index: 1000;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1em;
    }

    main  > * {
        margin: 0rem;
    }

    #titleDiv {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #titleDiv * {
        margin: 0.5rem;
    }
        
    h1 {
        color: #F1FFE7;
        font-family: "Prompt";
        white-space: nowrap;
    }

    h2, h3 {
        
        color: #F1FFE7;
        font-family: "Prompt";
        font-weight: 100;
        font-style: italic;
        padding: 1rem;
        font-size: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
    }

    

    @media (max-width: 1000px) {
        h2 {
            display: none;
        }
    } 

    @media (min-width: 1000px) {
        h3 {
            display: none;
        }
    }

    @media (max-width: 700px) {
        h3, h2 {
            display: none;
        }    
    } 

    @media (max-width: 500px) {
        h3, h2, #titleDiv {
            display: none;
        }    
    } 
  

    img {
        height: 80%;
    }

</style>




