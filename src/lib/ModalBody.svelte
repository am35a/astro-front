<script>
    import { route } from '../store/route'

    function handleTouchEnd(event) {
        if ($route.modal !== 'lock')
            route.modal('lock')
        else
            if (~~event.target.scrollTop) {
                if ($route.modal !== 'lock')
                    route.modal('lock')
            }
            else {
                if ($route.modal === 'lock')
                    route.modal('open')
            }
    }
</script>

<div
    {...$$restProps}
    on:scroll={handleTouchEnd}
>
    <slot></slot>
</div>

<style>
    .body {
        display: grid;
        gap: 1.25rem;
        align-content: start;
        overflow-y: auto;
    }
    .body :global(.copy) {
        text-align: center;
    }
    .body :global(p) {
        text-indent: 1rem;
    }
</style>