<main>
    <slot />
</main>

<style>
    main {
        grid-column: 1/-1;
        grid-row: 1/-1;

        position: relative;
        display: grid;
        grid-template: 1fr/1fr;
        /* overflow: hidden;
        height: 100vh;
        width: 100vw; */
    }
</style>
