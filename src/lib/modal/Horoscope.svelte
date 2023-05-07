<script>
    import { route } from '../../store/route'

    let periodsArr = ['Today', 'Tomorrow', 'This week', 'Year']
    let period = 0

    export let horoscopeArr = []

    function modalLock(event) {
        // console.log(event.target.scrollTop)

        if (event.target.scrollTop) {
            route.modal('lock')
            console.log($route.modal)
        } else if ($route.modal !== 'open') {
            route.modal('open')
            console.log($route.modal)
        }

    }

    // $: switch ($route.rotate) {
    //     case 'right':
    //         if (period)
    //             period--
    //     break
    //     case 'left':
    //         if (period < periodsArr.length - 1)
    //             period++
    //     break
    // }
</script>

<section>
    <div class="title">Horoscope</div>
    <div class="button-group">
        {#each periodsArr as item, i}
            <button
                on:click={() => period = i}
                disabled={period === i}
                type="button"
            >{item}</button>
        {/each}
    </div>

    <div
        class="body"
        on:scroll={() => modalLock(event)}
    >
        {#each horoscopeArr[period] as text}
            <p>{text}</p>
        {/each}
    </div>
</section>

<style>
    section {
        height: 100%;
        display: grid;
        grid-template-rows: max-content max-content 1fr;
        gap: .75rem;
    }
    section .title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
    section .button-group {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        gap: .5rem;
        overflow: scroll;
    }
    section .button-group button {
        border: none;
        background-color: transparent;
        padding: .5rem 1.25rem;
        border-radius: 4rem;
        font-size: 75%;
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: .125em;
        backdrop-filter: saturate(2) blur(.125rem);
    }
    section .button-group button:not([disabled]) {
        color: hsla(0, 0%, 100%, 0.5);
        background-color: hsla(0, 0%, 100%, 0.125);
    }
    section .button-group button[disabled] {
        color: hsla(0, 0%, 100%, 0.75);
        background-color: hsla(0, 0%, 100%, 0.25);
    }
    section .body {
        display: grid;
        gap: .25rem;
        overflow-y: auto;
    }
    section .body p {
        text-indent: 1rem;
    }
</style>