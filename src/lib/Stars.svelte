<script>
    import skyPattern from '/img/sky-pattern.svg'

    export let rotateDes = 0
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-1"
    src={skyPattern}
    style:--rotate-deg={`${-90 - rotateDes * 3}deg`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-2"
    src={skyPattern}
    style:--rotate-deg={`${-45 - rotateDes * 1.5}deg`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-3"
    src={skyPattern}
    style:--rotate-deg={`${-rotateDes}deg`}
>

<style>
    img {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 200vh;
        transform: translateX(calc(-50% + 50vw)) rotate(var(--rotate-deg));
        transition: all .75s;
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