<script>
    // @ts-nocheck

    // import { onMount } from 'svelte'
    import { route } from './store/route'
    import { constellationObj } from './store/app'

    import Stars from './lib/Stars.svelte'
    import Loader from './lib/Loader.svelte'
    import Main from './lib/Main.svelte'
    import Nav from './lib/Nav.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'
    import Horoscope from './lib/modal/Horoscope.svelte'

    import Authorization from './lib/modal/Authorization.svelte'
    import Account from './lib/modal/Account.svelte'

    async function getHoroscopes() {
		const res = await fetch('/_api/horoscopes_new.json')
        // const res = await fetch('https://astro.selimovdev.net/api/v1/horoscopes')
		const entObj = await res.json()

		if (res.ok)
			return entObj
		else
			throw new Error(entObj)
	}

	let promise = getHoroscopes()
    let rotateDes

    function findHoroscopes(horoscopesArr, name) {
        return horoscopesArr.filter(h => h.sign == name)
    }
</script>

<Stars {rotateDes} />
{#await promise}
    <Loader>
        ... waiting for data
    </Loader>
{:then entObj}
    <Constellation bind:rotateDes />
    <Main>
        <Nav />
        <Modal>
            {#if $route.segment === "horoscope"}
                <Horoscope horoscopeArr={findHoroscopes(entObj.horoscopes, $constellationObj.name)} />
            {:else if $route.segment === "authorization"}
                <Authorization />
            {:else if $route.segment === "account"}
                <Account />
            {/if}
        </Modal>
    </Main>
    <!-- <p>The number is {horoscopesObj.date}</p> -->
{:catch error}
    <Loader class="error">
        {error.message}
    </Loader>
{/await}

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
        button.circle {
            padding: .5rem;
        }
    </style>
</svelte:head>