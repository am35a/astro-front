<script>
    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'
    import Horoscope from './lib/modal/Horoscope.svelte'


    const theDate = new Date()
    let rotateDes
    let currentTimeObj = {
        day: theDate.getDate(),
        month: theDate.getMonth() + 1, // Jan is 0
        year: theDate.getFullYear()
    }

</script>

<Stars {rotateDes} />
<Constellation bind:rotateDes {...currentTimeObj}/>
<Main>
    <Modal>
        <Horoscope/>
    </Modal>
</Main>