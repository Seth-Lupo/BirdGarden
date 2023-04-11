<script>
  import { destroy_block, onMount } from "svelte/internal";
  import { currentSensorStore } from "../state/currentSensorStore";
  import { photoURLStore } from "../state/photoURLStore";
  import fetchPhoto from "./fetchPhoto";


    export let sensor
    export let detection
    $: imageURL = ""
    
    
    let searchTerms = detection["Sci_Name"].replace(/\s/g, "")
    if (!(searchTerms in $photoURLStore)) {
        photoURLStore.update((photoURLS) => {
            photoURLS[searchTerms] = fetchPhoto(searchTerms)   
            return photoURLS
        })  
    }
    $photoURLStore[searchTerms].then((val) => {
        imageURL = val
    })

    
    let timeNums = detection["Time"].split(":");
    console.log(timeNums)
    let hour = parseInt(timeNums[0])
    let min = parseInt(timeNums[1])
    let time = `${(hour+12)%12}:${min} ${hour >= 12 ? "PM" : "AM"}`
    
    let audioURL = sensor.URL + `/By_Date/${detection["Date"]}/${detection["Com_Name"].replace(/\s/g, "_")}/${detection["File_Name"]}`

   
    
    

    

</script>

<main >
    
    <div id="infoDiv">
        <h1 class:small={detection["Com_Name"].length>16}>{detection["Com_Name"]}</h1>
        <h2>{time}</h2>
        <audio controls>
            <source src={audioURL} type="audio/mpeg">
        </audio>
    </div>
    <div id="imageDiv" style={`background-image: url(${imageURL});`}></div>

</main>



<style>

    audio {
        width: 14rem;
        height: 2rem;
        margin: 1rem 0rem;
    }

    h1 {
        font-family: "Prompt";
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 1.75rem;
    
    }

    h2 {
        font-family: "Prompt";
        font-weight: 500;
        font-size: 1rem;
    }

    .small {
        font-size: 1.25rem;
    }

    #infoDiv {
        width: 17.5rem;
    }
    #imageDiv {
        background-position: center;
        background-size: cover;
        width: 7.5rem;
        height: 7.5rem;
    }

    main {
        display: flex;
        margin: 1rem;
        padding: 1rem;
        background-color: #D8FFC6;
        width: 25rem;
    }



</style>