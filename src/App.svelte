<script>
    // import { gestureObj } from './store/gesture'

    import Constellation from './lib/Constellation.svelte'
    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'

    const theDate = new Date()
    let rotateDes
    let currentTimeObj = {
        day: theDate.getDate(),
        month: theDate.getMonth() + 1, // Jan is 0
        year: theDate.getFullYear()
    }

</script>

<Stars {rotateDes} />

<Main>
    <Constellation bind:rotateDes {...currentTimeObj}/>
</Main>