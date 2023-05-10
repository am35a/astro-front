<script>
    import { onMount } from 'svelte'
    // import { route } from './store/route'
    import { constellation, constellationArr } from './store/app'

    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'
    import Horoscope from './lib/modal/Horoscope.svelte'

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


    // $: console.log(rotateDes, horoscopeArr, $constellation)

    // $userObj.constellation = 7

</script>

<Stars {rotateDes} />
<Constellation bind:rotateDes/>
<Main>
    <Modal>
        {#if horoscopeArr}
            <Horoscope horoscopeArr={horoscopeArr[$constellation]}/>
        {/if}
    </Modal>
</Main>