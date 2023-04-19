<script>
    import skyPattern from '/img/sky-pattern.svg'

    export let rotateDes = 0
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-1"
    src={skyPattern}
    style:transform={`translateX(calc(-50% + 50vw)) rotate(${-90 + rotateDes * 3}deg) scale(1.5)`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-2"
    src={skyPattern}
    style:transform={`translateX(calc(-50% + 50vw)) rotate(${-45 + rotateDes * 1.5}deg) scale(1.25)`}
>
<!-- svelte-ignore a11y-missing-attribute -->
<img
    class="layer-3"
    src={skyPattern}
    style:transform={`translateX(calc(-50% + 50vw)) rotate(${rotateDes}deg)`}
>

<style>
    img {
        grid-column: 1/-1;
        grid-row: 1/-1;

        height: 200vh;
        transition: all .75s;

        /* animation-name: changewidth;
        animation-iteration-count: infinite;
        animation-direction: alternate; */
    }
    img.layer-1 {
        opacity: .75;
        /* animation-duration: 20s; */
    }
    img.layer-2 {
        opacity: .5;
        /* animation-duration: 17s; */
    }
    img.layer-3 {
        opacity: .25;
        /* animation-duration: 14s; */
    }
    /* @keyframes changewidth {
        from {
            width: 100px;
        }
        to {
            width: 300px;
        }
    } */

    /* меняем скорость вращение через переменные https://svelte.dev/tutorial/style-directive */
</style>