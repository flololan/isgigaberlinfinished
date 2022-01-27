<script lang="ts">
  import { _ } from 'svelte-i18n'

  import PersonBadge from '$lib/svg/PersonBadge.svelte'
  import Peoples from '$lib/svg/Peoples.svelte'
  import { prefersReducedMotion } from '$lib/stores'
</script>

<section class="infoText position-relative">
  <div class="container p-5 d-flex align-items-center justify-content-center">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h2 class="">
        {$_('homepage.hello_world')}
      </h2>
      <p class="">
        {@html $_('homepage.tradition_text', {
          values: {
            isBERdone: `<a href="http://istderberschonfertig.de/">"Ist der BER schon fertig?"</a>`,
            isS21done: `<a href="http://iststuttgart21schonfertig.de/">"Ist Stuttgart 21 schon fertig?"</a>`,
          },
        })}
      </p>
      <a
        href="https://www.tesla.com/de_de/giga-berlin"
        class="btn btn-outline-primary btn-lg rounded-pill m-5"
        data-aos={!$prefersReducedMotion && 'flip-left'}
      >
        {$_('homepage.goto_tesla_website')}
      </a>
    </div>
  </div>
</section>

<style>
  .infoText :global(svg) {
    width: 100%;
    height: 50px;
  }
</style>
