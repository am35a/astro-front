<script lang="ts">
    export let value = ''
    const UID = self.crypto.randomUUID()
</script>

<div>
    {#if $$slots.label}
        <label
            for={UID}
            class="frm-label">
            <slot name="label"/>
        </label>
    {/if}
    <input
        id={UID}
        class:frm = {true}
        {...$$restProps}
        bind:value
    />
</div>

<style>
    div {
        display: grid;
        gap: .5rem;
    }
    div input {
        width: 100%;
        padding: .5rem 1.25rem;
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: .125rem solid hsla(0, 0%, 100%, 0.75);
        background-color: hsla(0, 0%, 100%, 0);
        /* font-size: 75%; */
        color: hsla(0, 0%, 100%, 0.75);
        text-align: center;
    }
</style>