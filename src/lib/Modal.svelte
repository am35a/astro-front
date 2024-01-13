<script>
    // @ts-nocheck
    // import { fly } from 'svelte/transition'
    // import { linear } from 'svelte/easing'
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
</script>

<!-- {#if $route.modal === 'open' && $route.modal !== 'lock'} -->
    <article
        style:--translate-y={articleTranslateY}
        style:--opacity={articleOpacity}
    >
        <slot/>
    </article>
<!-- {/if}
{#if $route.modal === 'close' && $route.modal !== 'lock'} -->
    <svg
        style:--opacity={SVGOpacity}
        style:--translate-y={SVGTranslateY}

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
<!-- {/if} -->

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 90vh;
        padding: 0 .75rem .75rem .75rem;
        background-image: linear-gradient(0deg, hsla(0, 0%, 0%, .75), transparent);
        color: hsla(0, 0%, 100%, .5);
        font-size: 1.25rem;
        hyphens: auto;

        transform: translateY(var(--translate-y));
        opacity: var(--opacity);
        transition: opacity .375s linear, transform .375s linear;
        will-change: opacity, transform;
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

        transform: translateY(var(--translate-y));
        opacity: var(--opacity);
        transition: opacity .375s linear, transform .375s linear;
        will-change: opacity, transform;
    }
</style>