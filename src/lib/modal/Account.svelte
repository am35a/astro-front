<script>

</script>

<section>
    <div class="title">Account</div>
    <div class="body">
        <div>
            For a more accurate horoscope, give as much information about yourself as possible.
        </div>
        <div>
            <div>Name</div>
            <div>Year</div>
            <div>Month</div>
            <div>Day</div>
            <div>Sex</div>
            <div>Time</div>
            <div>Counry</div>
            <div>Place</div>
        </div>
    </div>
</section>

<style>
    section {
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: .75rem;
    }
    section .title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
    section .body {
        display: grid;
        justify-content: center;
        align-content: start;
    }
</style>
