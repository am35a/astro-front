<script>
    import Accordion from "../components/Accordion.svelte"
    import Details from "../components/Details.svelte"
    import Input from "../components/Input.svelte"
    import Button from "../components/Button.svelte"

    // import InputBirthday from "../components/InputBirthday.svelte"

    import { personalData } from '../../store/account'

    // let userDateOBJ = {}
</script>

<section>
    <div class="title">Account</div>
    <div class="body">
        <Accordion>
            <Details open>
                <svelte:fragment slot="summary">Personal data</svelte:fragment>
                <svelte:fragment slot="body">
                    <p>For a more accurate horoscope, give as much information about yourself as possible.</p>
                    <p><b>Fields marked as * are required!</b></p>
                    <Input
                        bind:value={$personalData.name}
                        type="text"
                        pattern={'[A-Za-z]{1,32}'}
                        placeholder="only a given name"
                        required
                    >
                        <slot slot="label"><b>*</b> Name</slot>
                    </Input>
                    <Input
                        bind:value={$personalData.sex}
                        type="text"
                        datalist={['Man', 'Woman', 'Third']}
                        placeholder="man, woman or third"
                        required
                    >
                        <slot slot="label"><b>*</b> Sex</slot>
                    </Input>
                    <!-- <InputBirthday bind:birthdayOBJ={userDateOBJ.birthdayOBJ} /> -->
                    <Input
                        bind:value={$personalData.date}
                        type="date"
                        pattern={'\\d{4}-\\d{2}-\\d{2}'}
                        required
                    >
                        <slot slot="label"><b>*</b> Birthday</slot>
                    </Input>
                    <Input bind:value={$personalData.time} type="time" placeholder="Time">
                        <slot slot="label">Time of birth</slot>
                    </Input>                    
                    <Input bind:value={$personalData.birthplace} type="text" placeholder="place you are was born">
                        <slot slot="label">Place of Birth</slot>
                    </Input>
                    <Button m="1rem 0">
                        Save
                    </Button>
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
        text-indent: .5rem;
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
