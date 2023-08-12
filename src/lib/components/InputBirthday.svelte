<script>
    import Input from './Input.svelte'

    export let birthdayOBJ = {
            day: undefined,
            month: undefined,
            year: undefined
        }
</script>

<div>
    <div class="label">Birthday</div>
    <div class="input">
        <Input bind:value={birthdayOBJ.day} type="number" placeholder="DD" />
        <Input bind:value={birthdayOBJ.month} type="number" placeholder="MM" />
        <Input bind:value={birthdayOBJ.year} type="number" placeholder="YYYY" />
    </div>
</div>

<style>
    div {
        display: grid;
        gap: .5rem;
    }
    div .input {
        grid-template-columns: repeat(3, 1fr);
    }
</style>