<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Footer from '$lib/components/Footer.svelte'
  import { dyslexicMode, prefersReducedMotion } from '$lib/stores'
</script>

<main id="mainContent" class="container mb-5">
  <h1 class="mt-5">{$_('credits')}</h1>

  <ul class="mt-5 ps-5">
    <li class="fs-5">
      <a href="https://tesla.com/">I guess thank you Tesla?</a>
    </li>
  </ul>
</main>

<Footer />
