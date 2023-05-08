<script>
    import { onMount } from 'svelte'
    // import { route } from './store/route'
    // import { horoscope } from './store/app'

    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'
    import Horoscope from './lib/modal/Horoscope.svelte'

    // async function getData(path) {
    //     let res = await fetch(path)
    //     return res.ok ? {
    //         data: await res.json(),
    //         status: true
    //     } : {
    //         data : `Error: ${res.status}`,
    //         status: false
    //     }
    // }
    // let promise = getData('/_api/app.js-on')
    // console.log(promise)
    // promise.then((value) => {
    //     console.log(value.data)
    // })

    let horoscopeArr = [[[]]]

	onMount(async () => {
        // let res = await fetch('/_api/app.json')
        // if (res.ok) {
        //     $appData = await res.json()
        //     // console.log($appData)
        // } else {
        //     console.error(`Error: ${res.status}`)
        // }
        
        let res = await fetch('/_api/horoscope.json')
        
        if (res.ok) {
            horoscopeArr = await res.json()
            // console.log(horoscopeArr[0])
        } else {
            console.error(`Error: ${res.status}`)
        }
	})

    const theDate = new Date()
    let rotateDes
    let constellation
    let currentTimeObj = {
        day: theDate.getDate(),
        month: theDate.getMonth(), // Jan is 0
        year: theDate.getFullYear()
    }

    $: console.log(rotateDes)
</script>

<Stars {rotateDes} />
<Constellation bind:rotateDes bind:constellation {...currentTimeObj}/>
<Main>
    <Modal>
        <Horoscope horoscopeArr={horoscopeArr[constellation ? constellation : 0]}/>
    </Modal>
</Main>