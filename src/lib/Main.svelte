<script>

    export let gestureObj = {
        name: undefined,
        axis: undefined,
        direction: undefined
    }

    let touchstartX = 0
    let touchstartY = 0
    let touchendX = 0
    let touchendY = 0

    function handleTouchStart (event) {
        touchstartX = ~~event.changedTouches[0].clientX
        touchstartY = ~~event.changedTouches[0].clientY
    }
    // function handleTouchMove (event) {
    //     console.log('move')
    // }
    function handleTouchEnd (event) {
        touchendX = ~~event.changedTouches[0].clientX
        touchendY = ~~event.changedTouches[0].clientY
        handleGesture ()
    }

    let diffX = 0
    let diffY = 0
    let delta = 50

    function handleGesture () {
        diffX = Math.abs(touchstartX - touchendX)
        diffY = Math.abs(touchstartY - touchendY)

        if (diffX > delta) {
            gestureObj.axis = 'x'
            if (diffX > diffY) {
                gestureObj.name = 'swipe'
                if (touchendX < touchstartX) {
                    gestureObj.direction = 'left'
                }
                if (touchendX > touchstartX) {
                    gestureObj.direction = 'right'
                }

                console.log(gestureObj)
                return
            }
        }

        if (diffY > delta) {
            gestureObj.axis = 'y'
            if (diffX < diffY) {
                gestureObj.name = 'swipe'
                if (touchendY < touchstartY) {
                    gestureObj.direction = 'up'
                }
                if (touchendY > touchstartY) {
                    gestureObj.direction = 'down'
                }

                console.log(gestureObj)
                return
            }
        }
        
        if (touchendY === touchstartY) {
            console.log('Tap')
        }    
    }

</script>

<!-- on:touchmove={handleTouchMove} -->
<main
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
>
    <slot />
</main>

<style>
    main {
        grid-column: 1/-1;
        grid-row: 1/-1;

        position: relative;
        display: grid;
        grid-template: 1fr/1fr;
        /* overflow: hidden;
        height: 100vh;
        width: 100vw; */
    }
</style>
