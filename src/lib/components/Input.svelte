<script>
    // @ts-nocheck

    export let value = ''
    // export let datalist = undefined
    const UID = self.crypto.randomUUID()

    // $: console.log($$restProps.datalist)
</script>

<div>
    {#if $$slots.label}
        <label
            for={UID}
            class="frm-label"
        >
            <slot name="label"/>
        </label>
    {/if}
    <input
        id={UID}
        class:frm = {true}
        {...$$restProps}
        bind:value
        list="{UID}_list"
    />
    {#if $$restProps.datalist}
        <datalist id="{UID}_list">
            {#each $$restProps.datalist as item}
                <option value={item}>
            {/each}
        </datalist>
    {/if}    
</div>

<style>
    div {
        display: grid;
        gap: .25rem;
    }
    div input {
        width: 100%;
        padding: .5rem 1.25rem;
        border-left: none;
        border-top: none;
        border-right: none;
        background-color: hsla(0, 0%, 100%, 0);
        /* font-size: 75%; */

        text-align: center;
    }
    div input:not(:invalid) {
        color: hsla(0, 0%, 100%, 0.75);
        border-bottom: .125rem solid hsla(0, 0%, 100%, 0.75);
    }
    div input:invalid {
        color: hsla(0, 75%, 50%, 0.75);
        border-bottom: .125rem solid hsla(0, 75%, 50%, 0.75);
    }
</style>