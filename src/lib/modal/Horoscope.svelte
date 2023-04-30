<script>

</script>

<section>
    <header>
        <button type="button" disabled>Today</button>
        <button type="button">Tomorrow</button>
        <button type="button">This week</button>
        <button type="button">Year</button>
    </header>
    <div class="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae iste distinctio molestiae. Voluptates suscipit numquam doloribus veniam, magni modi nisi recusandae, corporis et laborum reprehenderit exercitationem iure corrupti labore.</p>
        <p>Sapiente aperiam facilis hic placeat porro dolorum in nulla dicta beatae corporis repellat deserunt asperiores, sint fugiat repudiandae facere ex nesciunt sunt. Totam earum pariatur, ipsa tempore temporibus aperiam necessitatibus.</p>
        <p>Incidunt natus ex, ad dolore facilis quia voluptatem hic asperiores necessitatibus maiores distinctio deserunt sequi ut autem. Neque animi in error itaque, nisi voluptatum ab ut, cumque, eligendi deserunt tempora!</p>
        <p>Est deleniti commodi deserunt nisi repellendus quidem iusto veritatis, minus quis libero possimus eius dolore eligendi, cumque quae repudiandae ad dolor autem quasi eaque accusantium labore? Atque maxime quo modi?</p>
        <p>Sunt non distinctio vel beatae illum voluptatibus architecto excepturi, nobis magnam obcaecati quos eum, at exercitationem quasi velit neque impedit enim perspiciatis! Eos harum provident a omnis optio rem? Id.</p>
        <p>Doloremque quam esse repudiandae delectus quia ipsa dolore mollitia rerum, voluptatum sequi odit quos nihil sint facilis eligendi earum voluptatem numquam aliquid quod minus ex commodi ea nam libero? Tenetur?</p>
    </div>
</section>

<style>
    section {
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: .75rem;
    }
    header {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        gap: .25rem;
        overflow: scroll;
    }
    button {
        border: none;
        background-color: transparent;
        padding: .5rem 1.25rem;
        border-radius: 4rem;
        font-size: 75%;
        white-space: nowrap;
    }
    button:not([disabled]) {
        color: hsla(0, 0%, 100%, 0.75);
    }
    button[disabled] {
        color: hsla(0, 0%, 100%, 0.5);
        background-color: hsla(0, 0%, 100%, 0.125);
        backdrop-filter: saturate(2) blur(.125rem);
    }
    .body {
        display: grid;
        gap: .25rem;
        overflow-y: auto;
    }
    .body p {
        text-indent: 1rem;
    }
</style>