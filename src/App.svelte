<script>
    // import { onMount } from 'svelte'

    import Constellation from './lib/Constellation.svelte'
    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'

    let rotateDes
    let currentTimeObj = {
        day: undefined,
        month: undefined,
        year: undefined
    }

    // onMount(async () => {
        const theDate = new Date()
        currentTimeObj.day = theDate.getDate()
        currentTimeObj.month = theDate.getMonth() + 1 // Jan is 0
        currentTimeObj.year = theDate.getFullYear();
    // })

    // console.log(currentTimeObj)
</script>

<Stars {rotateDes} />
<Main>
    <Constellation bind:rotateDes day={currentTimeObj.day} month={currentTimeObj.month} />
</Main>

