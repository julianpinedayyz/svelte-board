<script>
   import { fly, scale } from 'svelte/transition';
  const remove = (e) => e.target.parentElement.remove();
  export let content;
  let claps = 0;
  const clap = (e) => claps++;
</script>

<div class="item"  in:fly="{{ y: 200, duration: 300 }}">
  <span class="content" contenteditable="">{content}</span>

  <button class="remove" on:click={remove}>x</button>
  <span class="claps" on:click="{clap}">👏x{claps}</span>
</div>