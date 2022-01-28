<script lang="ts">
  import { onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'

  import AOS from 'aos'
  import '../../../node_modules/aos/dist/aos.css'

  import { TITLE } from '$lib/const'
  import Footer from '$lib/components/Footer.svelte'
  import { prefersReducedMotion } from '$lib/stores'

  import Header from './_components/Header.svelte'
  import InfoText from './_components/InfoText.svelte'

  let showTwitter = false

  onMount(() => {
    AOS.init()
  })
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<Header />
<main role="main">
  <InfoText />

  <div
    class="container twitter-feed d-flex flex-column align-items-center justify-content-center"
  >
    <button
      on:click={() => (showTwitter = true)}
      class="btn btn-outline-primary btn-lg rounded-pill align-self-center"
      data-aos={!$prefersReducedMotion && 'flip-left'}
    >
      {$_('homepage.showTwitter')}
    </button>

    {#if showTwitter}
      <div class="col-12 col-md-8 twitter-timeline">
        <a
          class="twitter-timeline"
          href="https://twitter.com/Giga_Berlin?ref_src=twsrc%5Etfw"
          >Tweets by Giga_Berlin</a
        >
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"></script>
      </div>
    {/if}
  </div>
</main>

<Footer />
