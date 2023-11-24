<script>
    import { route } from '../store/route'
    import skyPattern from '/img/sky-pattern.svg'

    export let rotateDes = 0

    var translateY = 0
    $: switch ($route.modal) {
        case 'close':
            translateY = 1.5
        break
        default:
            translateY = 0
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-1"
    src={skyPattern}
    style:--rotate-deg={`${-90 - rotateDes * 3}deg`}
    style:--translate-y={`${translateY  * 3}vh`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-2"
    src={skyPattern}
    style:--rotate-deg={`${-45 - rotateDes * 1.5}deg`}
    style:--translate-y={`${translateY  * 1.5}vh`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-3"
    src={skyPattern}
    style:--rotate-deg={`${-rotateDes}deg`}
    style:--translate-y={`${translateY}vh`}
>

<style>
    img {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 200vh;
        transform: translateX(calc(-50% + 50vw)) translateY(var(--translate-y)) rotate(var(--rotate-deg));
        transition: transform .375s linear;
        will-change: transform;
    }
    img.layer-1 {
        opacity: .75;
    }
    img.layer-2 {
        opacity: .5;
    }
    img.layer-3 {
        opacity: .25;
    }
</style>