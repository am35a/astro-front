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