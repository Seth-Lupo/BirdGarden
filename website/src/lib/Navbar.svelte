<script>
// @ts-nocheck

    import { tabStore } from "../state/tabStore";

    let onChange = (event) => {
        tabStore.set(event.target.value)
    }
        
    // tabStore.subscribe((val) => alert(val)) 
     
</script>

<div class="radio-group">
    <label class="radio-button">
        Map
      <input on:change={onChange} checked="true" type="radio" name="radio-group" value="0">
    </label>
    <label class="radio-button">
        About
      <input on:change={onChange} type="radio" name="radio-group" value="1">
    </label>
    <label class="radio-button">
        Join
        <input on:change={onChange} type="radio" name="radio-group" value="2">
    </label>
  </div>

<style>

.radio-group {
  display: flex;
  padding: 1rem;
}

.radio-button {
  display: inline-block;

  background-color: #63585E;
  cursor: pointer;
  font-family: "Prompt";
  font-size: 1.25rem;
  font-weight: 400;
  color: #F1FFE7;
  transition: background-color 0.2s;
  height: 3.5rem;

  display: flex;
  align-items: center;
  padding: 1rem;
  
}

.radio-button:hover {
   background-color: black;
}

.radio-button input[type="radio"] {
  display: none;
}

.radio-button:has(input:checked){
  background-color: black;
}

</style>