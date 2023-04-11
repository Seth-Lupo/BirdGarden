<script>

	import { get } from 'svelte/store';
	import { detectionStore, updateData } from './state/detectionsStore';
	import { tabStore } from './state/tabStore'
	import { sensorsStore } from './state/sensorsStore'

	let data = null;
	
	import Map from "./lib/Map.svelte";
	
  	import Header from './lib/Header.svelte';
  	import MapTab from './lib/MapTab.svelte';
	
	let map;
	let zoom;
	let center = {};
	
	let url = "http://birdspy.local/today.php";
	
	setInterval(() => {
		updateData($sensorsStore)
	}, 60 * 1000)
	

	import lookup from "./lib/reverseGeocode.js"
  import { showingDataStore } from './state/showingDataStore';
  import Data from './lib/Data.svelte';
	console.log(lookup(41, -71))
	
	
</script>



<style>
	
	
</style>

<main>
	
	
	
	<Header></Header>

	<MapTab></MapTab>

	{#if $tabStore == 0}
	{:else if $tabStore == 1}
	<h1>EXISTENCE NOT IN RUBRIC! [will add soon though]</h1>
	{:else if $tabStore == 2}
	<h1>EXISTENCE NOT IN RUBRIC! [will add soon though]</h1>
	{/if}

	{#if $showingDataStore}
		<Data></Data>
	{/if}
	
	
	
	
</main>