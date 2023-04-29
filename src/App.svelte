<script>
    import Stars from './lib/Stars.svelte'
    import Main from './lib/Main.svelte'
    import Constellation from './lib/Constellation.svelte'
    import Modal from './lib/Modal.svelte'


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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae iste distinctio molestiae. Voluptates suscipit numquam doloribus veniam, magni modi nisi recusandae, corporis et laborum reprehenderit exercitationem iure corrupti labore.
        Sapiente aperiam facilis hic placeat porro dolorum in nulla dicta beatae corporis repellat deserunt asperiores, sint fugiat repudiandae facere ex nesciunt sunt. Totam earum pariatur, ipsa tempore temporibus aperiam necessitatibus.
        Incidunt natus ex, ad dolore facilis quia voluptatem hic asperiores necessitatibus maiores distinctio deserunt sequi ut autem. Neque animi in error itaque, nisi voluptatum ab ut, cumque, eligendi deserunt tempora!
        Est deleniti commodi deserunt nisi repellendus quidem iusto veritatis, minus quis libero possimus eius dolore eligendi, cumque quae repudiandae ad dolor autem quasi eaque accusantium labore? Atque maxime quo modi?
        Sunt non distinctio vel beatae illum voluptatibus architecto excepturi, nobis magnam obcaecati quos eum, at exercitationem quasi velit neque impedit enim perspiciatis! Eos harum provident a omnis optio rem? Id.
        Doloremque quam esse repudiandae delectus quia ipsa dolore mollitia rerum, voluptatum sequi odit quos nihil sint facilis eligendi earum voluptatem numquam aliquid quod minus ex commodi ea nam libero? Tenetur?
    </Modal>
</Main>