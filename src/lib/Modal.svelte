<script>
    // @ts-nocheck
    import { fly } from 'svelte/transition'
    import { linear } from 'svelte/easing'
    import { route } from '../store/route'
</script>

<!-- <script>    
    import { route } from '../store/route'

    var articleTranslateY = undefined,
        articleOpacity = undefined,
        SVGOpacity = undefined,
        SVGTranslateY = undefined

    $: switch ($route.modal) {
        case 'open':
            articleTranslateY = '10vh'
            articleOpacity = '100%'
            SVGOpacity = '0%'
            SVGTranslateY = '100%'
        break
        case 'close':
            articleTranslateY = '90vh'
            articleOpacity = '0%'
            SVGOpacity = '100%'
            SVGTranslateY = '0%'
        break
        default:
            console.log(`The state of modal = ${$route.modal}`)
    }
</script -->

{#if $route.modal === 'open' && $route.modal !== 'lock'}
    <article
        transition:fly={{ y: '90vh', duration: 750, easing: linear }}
        on:introstart={() => route.modalMotion(false)}
        on:introend={() => route.modalMotion(true)}
        on:outrostart={() => route.modalMotion(false)}
        on:outroend={() => route.modalMotion(true)}
    >
        <slot/>
    </article>
{/if}
{#if $route.modal === 'close' && $route.modal !== 'lock'}
    <svg
        transition:fly={{ y: '10vh', duration: 750, easing: linear }}
        width="48" height="48"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <polyline points="6 15 12 9 18 15" />
    </svg>
{/if}

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 90vh;
        padding: 0 .75rem .75rem .75rem;
        background-image: linear-gradient(0deg, hsla(0, 0%, 0%, .75), transparent);
        color: hsla(0, 0%, 100%, .5);
        font-size: 1.25rem;
        transform: translateY(10vh);
        hyphens: auto;
    }
    svg {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        padding: .5rem;
        width: 100%;
        justify-self: center;
        align-self: end;
        color: hsla(0, 0%, 100%, 0.5);
    }
</style>