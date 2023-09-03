<script>
    if ($$restProps.type != 'reset' && $$restProps.type != 'submit')
        $$restProps.type = 'button'
</script>
    
<button
    {...$$restProps}
    on:click
    style:--m={$$restProps.m}
    style:--p={$$restProps.p}
>
    <slot></slot>
</button>

<style>
    button {
        margin: var(--m);
        padding: var(--p);
    }
    button:not(circle) {
        --p: .5rem 1.25rem;

        display: inline-flex;
        gap: .75rem;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        border-radius: 4rem;
        font-size: 75%;
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: .125em;
        backdrop-filter: saturate(2) blur(.125rem);
    }
    button.circle {
        --p: .5rem;
    }

    button:not([disabled]) {
        color: hsla(0, 0%, 100%, 0.5);
        background-color: hsla(0, 0%, 100%, 0.125);
    }
    button[disabled] {
        color: hsla(0, 0%, 100%, 0.75);
        background-color: hsla(0, 0%, 100%, 0.25);
    }

    /* button.large {

    } */
</style>
