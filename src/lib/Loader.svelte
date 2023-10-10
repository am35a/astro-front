<article
    {...$$restProps}
>
    <section>
        <slot></slot>
    </section>
</article>

<style>
    article {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        width: 100vw;
        height: 100vh;
    }
    article:not(.error) section {
        color: hsla(0, 0%, 100%, .5);
    }
    article.error section {
        color: hsla(0, 90%, 60%, 0.75);
    }
    section {
        display: grid;
        gap: 1rem;
        justify-self: center;
        align-self: center;
        padding: .75rem;
        font-size: 1.25rem;
        hyphens: auto;
    }
</style>