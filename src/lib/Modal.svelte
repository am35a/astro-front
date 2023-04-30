<script>
    import { route } from '../store/route'

</script>

<article
    style:--translate-y={$route.modal === 'open' ? '10vh' : '90vh'}
    style:--opacity={$route.modal === 'open' ? '100' : '0'}

>
    <slot></slot>
</article>

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 90vh;
        padding: 0 .75rem .75rem .75rem;
        /* border-top: .125rem solid hsla(0, 100%, 100%, .125); */
        /* border-top-left-radius: 2rem;
        border-top-right-radius: 2rem; */
        background: linear-gradient(0deg, hsla(0, 0%, 0%, .75), transparent);
        color: hsla(0, 0%, 100%, .5);
        font-size: 1.25rem;
        transform: translateY(var(--translate-y));
        hyphens: auto;
        /* overflow: hidden; */
        opacity: var(--opacity);

        transition: all .75s;
    }
</style>