<script>
    import Constellation from './lib/Constellation.svelte'
    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'

    let rotateDes
</script>

<Stars {rotateDes} />
<Main>
    <Constellation bind:rotateDes />
</Main>

