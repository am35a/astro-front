// @ts-nocheck

import { writable } from "svelte/store"

function f() {
    let data = {
        history: ['horoscope'],
        segment: 'horoscope',
        modal: 'close', // states: close, open or lock
        modalMotion: false,
        rotate: undefined
    }

    const { subscribe, set } = writable(data)

    return {
        subscribe,
        modal: (state) => {
            if (data.modal !== state) {
                route.modalMotion(true)
                data.modal = state
                setTimeout(function() {
                    route.modalMotion(false)
                }, 375)                
            }
            if (data.modal === 'close')
                setTimeout(function() {
                    route.back()
                }, 375)
        },
        modalMotion: (state) => {
            data.modalMotion = state
            set(data)
            // console.log(`modalMotion: ${data.modalMotion}`)
        },
        rotate: (state) => {
            data.rotate = state
            set(data)
        },
        gesture: ({name = undefined, direction = undefined}) => {
            data.rotate = undefined // reset rotation for each gesture call
            if (name === 'swipe') {
                switch (direction) {
                    case 'left':

                        switch (data.segment) {
                            case 'horoscope':
                                // if (data.modal === 'close') {
                                    route.rotate('left')
                                // }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'up':
                        switch (data.segment) {
                            case 'horoscope':
                                if (data.modal === 'close' && !data.modalMotion) {
                                    route.modal('open')
                                    // set(data)
                                }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                // setTimeout(function(){
                                    route.back()
                                // }, 350)
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }
                        break
                    case 'right':
                        switch (data.segment) {
                            case 'horoscope':
                                // if (data.modal === 'close') {
                                    route.rotate('right')
                                // }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }
                        break
                    case 'down':
                        switch (data.segment) {
                            case 'horoscope':
                                if (data.modal === 'open' && !data.modalMotion) {
                                    route.modal('close')
                                    // console.log(`${direction} > ${data.segment}`)
                                }
                                break
                            case 'authorization':
                                // if (data.modal === 'open') {
                                //     data.modal = 'close'
                                //     setTimeout(function(){
                                //         route.back()
                                //     }, 350);
                                // }
                                break
                            case 'account':
                                break
                            case 'about':
                                if (data.modal === 'open' && !data.modalMotion)
                                    route.modal('close')
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }
                        break
                    default:
                        console.error(`Sorry, we are route error in name: ${name} > direction: ${direction}!`)
                }
            }
        },
        goto: (route) => {
            if (data.history.at(-1) !== route) {
                data.history.push(route)
                data.segment = route
                set(data)
            }
        },
        back: () => {
            if (data.history.length > 1) {
                data.history.pop()
                data.segment = data.history.at(-1)
                set(data)
            }
        }
    }
}

export const route = f()