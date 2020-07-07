<script>
  import { locales } from "./constants";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let currentLocale;
  $: {
    // every time the select dropdown changes ("currentLocale"), this gets
    // called. So dispatch an event:
    dispatch("change", {
      localeString: currentLocale,
    });
  }
</script>

<style>
  div {
    float: right;
  }
</style>

<div>
  Locale:
  <select bind:value={currentLocale}>
    {#each locales as locale}
      <option value={locale.value}>{locale.label}</option>
    {/each}
  </select>

</div>
