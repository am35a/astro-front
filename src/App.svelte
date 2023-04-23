<script>
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

    let gestureObj = {
        name: undefined,
        axis: undefined,
        direction: undefined
    }

</script>

<Stars {rotateDes} />
<Main bind:gestureObj>
    <Constellation bind:rotateDes {...currentTimeObj} {gestureObj} />
</Main>