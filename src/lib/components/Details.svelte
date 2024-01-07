<details {...$$restProps}>
    <summary>
        <div>
            <slot name="summary" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="260 -700 440 440" fill="currentColor">
            <path d="M480-360 280-559h400L480-360Z"/>
        </svg>
    </summary>
    <div>
        <slot name="body" />
    </div>
</details>

<style>
    details summary {
        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
        border: none;
        background-color: transparent;
        padding: .5rem 1.25rem;
        border-radius: 4rem;
        font-size: 75%;
        line-height: 2rem;
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: .125em;
        backdrop-filter: saturate(2) blur(.125rem);
    }
    details:not([open]) summary {
        color: hsla(0, 0%, 100%, 0.5);
        background-color: hsla(0, 0%, 100%, 0.125);
    }
    details[open] summary {
        color: hsla(0, 0%, 100%, 0.75);
        background-color: hsla(0, 0%, 100%, 0.25);
    }
    details summary svg {
        transition: all .25s;
    }
    details[open] summary svg {
        transform: rotate(-180deg);
    }
    details > div {
        display: grid;
        gap: .5rem;
        padding: .5rem 1.25rem;
    }
</style>