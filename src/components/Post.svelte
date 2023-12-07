<script lang="ts">
  export let title: string
  export let details: string
</script>

<div class="card">
  <div class="font-bold text-xl mb-2 card-header">{title}</div>
  <p class="text-gray-700 text-base card-footer">
    {details}
  </p>
</div>

<style>
  /* your styles go here */
</style>
