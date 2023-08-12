<script>
    import Accordion from "../components/Accordion.svelte"
    import Details from "../components/Details.svelte"
    import Input from "../components/Input.svelte"
    import InputBirthday from "../components/InputBirthday.svelte"

    let userDateOBJ = {
        name: '',
        birthdayOBJ: {
            day: undefined,
            month: undefined,
            year: undefined
        },
        sex: '',
        time: '',
        country: ''
    }

    $: console.log('account ', userDateOBJ)
</script>

<section>
    <div class="title">Account</div>
    <div class="body">
        <Accordion>
            <Details open>
                <svelte:fragment slot="summary">Personal data</svelte:fragment>
                <svelte:fragment slot="body">
                    <div>
                        For a more accurate horoscope, give as much information about yourself as possible.
                    </div>
                    <Input bind:value={userDateOBJ.name} type="text" placeholder="Name">
                        <slot slot="label">Name</slot>
                    </Input>
                    <Input bind:value={userDateOBJ.sex} type="text" placeholder="Sex">
                        <slot slot="label">Sex</slot>
                    </Input>
                    <InputBirthday bind:birthdayOBJ={userDateOBJ.birthdayOBJ} />
                    <Input bind:value={userDateOBJ.time} type="time" placeholder="Time">
                        <slot slot="label">Time of birth</slot>
                    </Input>                    
                    <Input bind:value={userDateOBJ.country} type="text" placeholder="Country">
                        <slot slot="label">Place of Birth</slot>
                    </Input>
                </svelte:fragment>
            </Details>
        </Accordion>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: .75rem;
    }
    section .title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
    section .body {
        display: grid;
        gap: 1.25rem;
        /* justify-content: center; */
        align-content: start;
    }
</style>
