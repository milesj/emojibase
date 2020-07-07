<script>
  import { onMount } from "svelte";
  import Grid from "./Grid.svelte";
  import { defaultLocale } from "./constants";
  import LocalesSelect from "./Locales.svelte";

  let emojis = [];
  let inputValue = "";
  let currentLocale = defaultLocale;

  // Every time currentLocale changes, call the updateLocale function.
  $: updateLocale(currentLocale);

  const updateLocale = async (evt) => {
    emojis = [];
    inputValue = "";

    // Purposefully do not import this as part of the bundle. Instead dynamically fetch
    // it on page load so that when updates to emojibase-data happen we do not have to
    // re-build the viewer app.
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/emojibase-data/${evt}/compact.json`
    );
    emojis = await res.json();
  };

  const LocalesSelectChangeHandler = (evt) => {
    currentLocale = evt.detail.localeString;
  };

  // every time emojis or inputValue changes, update what is showing in
  // the table (currentlyDisplayingEmojis)
  $: currentlyDisplayingEmojis = emojis.filter((e) => {
    const matchesAnnotation =
      e.annotation.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    const matchesAnyShortcode =
      e.shortcodes
        .map((shortcodeString) => {
          return (
            shortcodeString.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          );
        })
        .indexOf(true) > -1;
    const matchesAnyTags =
      e.tags
        .map((shortcodeString) => {
          return (
            shortcodeString.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          );
        })
        .indexOf(true) > -1;

    return matchesAnnotation || matchesAnyShortcode || matchesAnyTags;
  });
</script>

<style>
  main {
    font-family: sans-serif;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
    padding: 3px;
    font-weight: bold;
    font-size: 14px;
  }
  .footer {
    text-align: center;
  }
</style>

<main>
  <LocalesSelect {currentLocale} on:change={LocalesSelectChangeHandler} />

  <h1>Emojibase Browser</h1>

  <input type="text" placeholder="Filter" bind:value={inputValue} />
  <Grid data={currentlyDisplayingEmojis} />
  <div class="footer">
    <a href="https://github.com/milesj/emojibase">Emojibase</a>
  </div>
</main>
