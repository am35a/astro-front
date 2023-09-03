<script>
    // @ts-nocheck
    import Input from './Input.svelte'

    export let birthdayOBJ = {
            day: undefined,
            month: undefined,
            year: undefined
        }

    // function getDaysInMonth(year, month) {
    //     return new Date(year, month, 0).getDate();
    // }
</script>

<div>
    <div class="label">Birthday</div>
    <div class="input">
        <Input
            bind:value={birthdayOBJ.year}
            type="number"
            placeholder="YYYY"
            max={new Date().getFullYear()}
            required
        />
        <Input
            bind:value={birthdayOBJ.month}
            type="number"
            placeholder="MM"
            min={1}
            max={12}
            required
        />
        <Input
            bind:value={birthdayOBJ.day}
            type="text"
            placeholder="DD"
            pattern={'[0-9]{2}'}
            min={1}
            max={31}
            required
        />
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