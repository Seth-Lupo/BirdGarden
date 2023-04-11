<script>
  import { tabStore } from "../state/tabStore";
  import Infobar from "./Infobar.svelte";
import Map from "./Map.svelte";
</script>

<main style:display={($tabStore == 0) ? "flex" : "none"}>
  
  <Infobar></Infobar>
  <Map></Map>
  

</main>

<style>

 
    
</style>