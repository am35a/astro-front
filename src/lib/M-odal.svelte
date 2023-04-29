<script>
    import { route } from '../store/route'

</script>

<article
    style:--translate-y={$route.modal === 'open' ? '10vh' : '90vh'}
>
    <slot></slot>
</article>

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        padding: .75rem;
        height: 90vh;
        border-top: .125rem solid hsla(0, 100%, 100%, .125);
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        background-color: hsla(0, 0%, 0%, .75);
        color: hsla(0, 0%, 100%, .5);
        font-size: 1.25rem;
        transform: translateY(var(--translate-y));
        overflow-y: auto;

        transition: all .75s;
    }
</style>