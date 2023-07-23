<script>
    import { onMount } from 'svelte'
    import { route } from './store/route'
    import { constellationObj, constellationArr } from './store/app'

    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'
    import Nav from './lib/Nav.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'
    import Horoscope from './lib/modal/Horoscope.svelte'
    import Authorization from './lib/modal/Authorization.svelte'
    import Account from './lib/modal/Account.svelte'

    let horoscopeArr

	onMount(async () => {        
        let res = await fetch('/_api/horoscope.json')
        
        if (res.ok) {
            horoscopeArr = await res.json()
        } else {
            console.error(`Error: ${res.status}`)
        }
	})

    let rotateDes

    $: console.log('app: ', rotateDes)
    // $: console.log(rotateDes, horoscopeArr, $constellationObj.number)

</script>

<Stars {rotateDes} />
<Constellation bind:rotateDes />
<Main>
    <Nav />
    <Modal>
        {#if $route.segment === "horoscope"}
            {#if horoscopeArr}
                <Horoscope horoscopeArr={horoscopeArr[$constellationObj.number]} />
            {/if}
        {:else if $route.segment === "authorization"}
            <Authorization />
        {:else if $route.segment === "account"}
            <Account />
        {/if}
    </Modal>
</Main>

<svelte:head>
    <style>
        button:not(circle) {
            display: inline-flex;
            border: none;
            background-color: transparent;
            padding: .5rem 1.25rem;
            border-radius: 4rem;
            font-size: 75%;
            white-space: nowrap;
            text-transform: uppercase;
            letter-spacing: .125em;
            backdrop-filter: saturate(2) blur(.125rem);
        }
        button:not([disabled]) {
            color: hsla(0, 0%, 100%, 0.5);
            background-color: hsla(0, 0%, 100%, 0.125);
        }
        button[disabled] {
            color: hsla(0, 0%, 100%, 0.75);
            background-color: hsla(0, 0%, 100%, 0.25);
        }
        button.large {

        }
        button.circle {
            padding: .5rem;
        }
    </style>
</svelte:head>