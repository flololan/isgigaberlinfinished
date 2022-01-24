<script lang="ts">
  import { onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'

  import AOS from 'aos'
  import '../../../node_modules/aos/dist/aos.css'

  import { TITLE } from '$lib/const'
  import Footer from '$lib/components/Footer.svelte'
  import { prefersReducedMotion } from '$lib/stores'

  import Header from './_components/Header.svelte'
  import Stats from './_components/Stats.svelte'

  onMount(() => {
    AOS.init()
  })
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<Header />
<main role="main">
  <Stats />

  <div class="d-flex justify-content-center mb-5">
    <a
      href="https://www.tesla.com/de_de/giga-berlin"
      class="btn btn-outline-primary btn-lg rounded-pill align-self-center"
      data-aos={!$prefersReducedMotion && 'flip-left'}
    >
      {$_('homepage.goto_criteria')}
    </a>
  </div>

  <a
    class="twitter-timeline"
    href="https://twitter.com/Giga_Berlin?ref_src=twsrc%5Etfw"
    >Tweets by Giga_Berlin</a
  >
  <script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"></script>
</main>

<Footer />
