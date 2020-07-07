<script>
  export let data;
</script>

<style>
  table {
    width: 100%;
  }
</style>

<table>
  <tr>
    <th />
    <th>Annotation</th>
    <th>Shortcodes</th>
    <th>Tags</th>
  </tr>
  {#each data as emoji}
    <tr>
      <td>{emoji.unicode}</td>
      <td>{emoji.annotation}</td>
      <td>{emoji.shortcodes.join(', ')}</td>
      <td>{emoji.tags.join(', ')}</td>
    </tr>
  {/each}
</table>
