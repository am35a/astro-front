<script>
    // @ts-nocheck

    import { route } from '../store/route'

    let touchstartX = 0,
        touchstartY = 0,
        touchendX = 0,
        touchendY = 0,
        diffX = 0,
        diffY = 0,
        delta = 50

    let gestureObj = {
        name: undefined,
        axis: undefined,
        direction: undefined
    }

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
        handleGesture()
    }

    function handleGesture() {
        gestureObj={...undefined} // reset gestures for each handle call

        diffX = Math.abs(touchstartX - touchendX)
        diffY = Math.abs(touchstartY - touchendY)

        if (diffX > delta) {
            gestureObj.axis = 'x'
            if (diffX > diffY) {
                gestureObj.name = 'swipe'
                if (touchendX < touchstartX) {
                    gestureObj.direction = 'left'
                } else if (touchendX > touchstartX) {
                    gestureObj.direction = 'right'
                }

                route.gesture(gestureObj)
                return
            }
        }

        if (diffY > delta) {
            gestureObj.axis = 'y'
            if (diffX < diffY) {
                gestureObj.name = 'swipe'
                if (touchendY < touchstartY) {
                    gestureObj.direction = 'up'
                } else if (touchendY > touchstartY) {
                    gestureObj.direction = 'down'
                }

                route.gesture(gestureObj)
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
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template: 1fr/1fr;
        overflow: hidden;
    }
</style>
