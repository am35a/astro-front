<script>
    import { route } from '../store/route'

    var articleTranslateY = undefined,
        articleOpacity = undefined,
        SVGOpacity = undefined

    $: switch ($route.modal) {
        case 'open':
            articleTranslateY = '10vh'
            articleOpacity = '100%'
            SVGOpacity = '0%'
        break
        case 'close':
            articleTranslateY = '90vh'
            articleOpacity = '0%'
            SVGOpacity = '100%'
        break
        default:
            console.log(`The state of modal = ${$route.modal}`)
    }

</script>

<!-- style:--translate-y={$route.modal === 'open' ? '10vh' : '90vh'} -->
<!-- style:--opacity={$route.modal === 'open' ? '100%' : '0%'} -->

<article
    style:--translate-y={articleTranslateY}
    style:--opacity={articleOpacity}
>
    <slot></slot>
</article>
<svg
    style:--opacity={SVGOpacity}
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

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 90vh;
        padding: 0 .75rem .75rem .75rem;
        /* border-top: .125rem solid hsla(0, 100%, 100%, .125); */
        /* border-top-left-radius: 2rem;
        border-top-right-radius: 2rem; */
        background-image: linear-gradient(0deg, hsla(0, 0%, 0%, .75), transparent);
        color: hsla(0, 0%, 100%, .5);
        font-size: 1.25rem;
        transform: translateY(var(--translate-y));
        hyphens: auto;
        /* overflow: hidden; */
        opacity: var(--opacity);

        transition: all .75s;
    }
    svg {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        width: 100%;
        justify-self: center;
        align-self: end;
        /* background-image: linear-gradient(0deg, hsla(0, 0%, 0%, .75), transparent); */
        color: hsla(0, 0%, 100%, 0.5);
        padding: .5rem;
        /* z-index: 1; */
        opacity: var(--opacity);
        transition: all .75s;
    }
    /* .shevron >  svg {
        margin: auto;
        transform: rotate(180deg);
    } */

</style>