<script>
    // @ts-nocheck
    import { userObj } from '../../store/app'
    import { route } from '../../store/route'

    import Button from '../components/Button.svelte'
    import ModalBody from "../ModalBody.svelte"

    let periodsArr = ['Daily', 'Weekly', 'Monthly', 'Yearly']
    let period = 0

    let bodyThis = undefined

    export let horoscopeArr = []

    function modalLock(event) {
        // if (event.target.scrollTop) {
        //     route.modal('lock')
        //     console.log($route.modal)
        // } else if ($route.modal !== 'open') {
        //     route.modal('open')
        //     console.log($route.modal)
        // }
    }

    function periodToogle(i) {
        period = i
        bodyThis.scrollTop = 0
    }

    function periodSwipe(direction) {
        if (direction ==='right' && period)
            periodToogle(period - 1)
        else
            if (direction ==='left' && period < periodsArr.length - 1)
                periodToogle(period + 1)
    }

    $: periodSwipe($route.rotate)

    // $: console.log('horoscope: ', periodsArr[period])

    function personalize() {
        // route.modal('close')
        // setTimeout(function() {
            route.goto('authorization')
            // route.modal('open')
        // }, 350);

        // bodyThis.scrollTop = 0
        // console.log('personalize', bodyThis.scrollTop)
    }

    function getTextAndFormat(text) {
        return `<p>${text.replaceAll(/\n\n/g, '</p><p>')}</p>`
    }


    // $: console.info(period)

</script>

<section>
    <div class="title">Horoscope</div>
    <div class="button-group">
        {#each periodsArr as item, i}
            <Button
                on:click={() => periodToogle(i)}
                disabled={period === i}
                class="{i}"
            >{item}</Button>
        {/each}
    </div>

    <ModalBody
        class="body"
        on:scroll={modalLock}
        bind:this={bodyThis}
    >
        {#each Array(periodsArr.length) as _, i}
            <div
                class="text {i}"
                style:--translate-x={`calc(${-100 * period}% - ${.5 * period}rem)`}
            >
                {@html getTextAndFormat(horoscopeArr.find(obj => obj.period === periodsArr[i]).text)}
            </div>
        {/each}
        <!-- {#each Array(periodsArr.length) as _, i}
            {#if period === i}
                <div
                    transition:fly={{ x: `${100 * periodDirection}vw`, duration: 375, easing: linear }}
                    class="text"
                >
                    {@html getTextAndFormat(horoscopeArr.find(obj => obj.period === periodsArr[i]).text)}
                </div>
            {/if}
        {/each} -->

        <!-- <div class="text">
            {@html getTextAndFormat(horoscopeArr.find(obj => obj.period === periodsArr[period]).text)}
        </div> -->
        
        <!-- {#if !$userObj.isAuthorized}
            <div class="personalize">
                <Button
                    on:click={personalize}
                    class="personalize"
                    m=".5rem 0 .25rem 0"
                    disabled={route.modalMotion}
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
                </Button>
            </div>
        {/if} -->
    </ModalBody>
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
        text-indent: .5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
    section .button-group {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        gap: .5rem;
        overflow: auto;
        scrollbar-width: none
    }
    section .button-group::-webkit-scrollbar {
        display: none
    }
    section :global(.body) {
        display: grid;
        gap: .5rem; /* added to --translate-x for .text in .body*/
        align-content: space-between;
        overflow-x: hidden;
        overflow-y: auto;
        grid-template-columns: repeat(4, 100%);
    }
    section :global(.body .text) {
        /* grid-row: 1/-1;
        grid-column: 1/-1; */
        display: grid;
        gap: .5rem;
        align-content: start;
        transform: translateX(var(--translate-x));
        transition: transform .375s linear;
        will-change: transform;
    }
    section :global(.body .text p) {
        text-indent: 1rem;
    }
    section .personalize {
        display: grid;
        align-self: end;
    }
</style>