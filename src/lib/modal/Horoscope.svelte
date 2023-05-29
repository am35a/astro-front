<script>
    // import { tweened } from 'svelte/motion'
	// import { cubicOut } from 'svelte/easing'

    import { userObj } from '../../store/app'
    import { route } from '../../store/route'

    let periodsArr = ['Today', 'Tomorrow', 'This week', 'Year']
    let period = 0

    let bodyThis = undefined
    // const progress = tweened(0, {
	// 	duration: 250,
	// 	easing: cubicOut
	// })

    export let horoscopeArr = []

    function modalLock(event) {
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

    function personalize() {
        // progress.set(bodyThis.scrollTop)
        // bodyThis.scrollTop = 0
        route.modal('close')
        // console.log('personalize', bodyThis.scrollTop)
    }
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
        on:scroll={modalLock}
        bind:this={bodyThis}
    >
        {#each horoscopeArr[period] as text}
            <p>{text}</p>
        {/each}

        {#if !$userObj.isAuthorized}
            <button
                on:click={personalize}
                class="personalize"
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                    <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                    <path d="M8 15a18 18 0 0 0 1.8 6" />
                    <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
                Get personal horoscope!
            </button>
        {/if}
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
    section .body {
        display: grid;
        gap: .25rem;
        align-content: baseline;
        overflow-y: auto;
    }
    section .body p {
        text-indent: 1rem;
    }
    section .personalize {
        margin-top: .5rem;
        margin-bottom: .25rem;
        display: flex;
        gap: 1rem;
        align-items: center;
    }
</style>