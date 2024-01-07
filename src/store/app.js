import { writable, get, readable } from 'svelte/store'

import aquariusIMG from '/img/constellations/aquarius.svg'
import piscesIMG from '/img/constellations/pisces.svg'
import ariesIMG from '/img/constellations/aries.svg'
import taurusIMG from '/img/constellations/taurus.svg'
import geminiIMG from '/img/constellations/gemini.svg'
import cancerIMG from '/img/constellations/cancer.svg'
import leoIMG from '/img/constellations/leo.svg'
import virgoIMG from '/img/constellations/virgo.svg'
import libraIMG from '/img/constellations/libra.svg'
import scorpioIMG from '/img/constellations/scorpio.svg'
import sagittariusIMG from '/img/constellations/sagittarius.svg'
import capricornIMG from '/img/constellations/capricorn.svg'
export const constellationArr = readable(
    [
        {
            month: 'Jan',
            day: 20,
            name: 'Aquarius',
            path: aquariusIMG
        },
        {
            month: 'Feb',
            day: 19,
            name: 'Pisces',
            path: piscesIMG
        },
        {
            month: 'Mar',
            day: 21,
            name: 'Aries',
            path: ariesIMG
        },
        {
            month: 'Apr',
            day: 20,
            name: 'Taurus',
            path: taurusIMG
        },
        {
            month: 'May',
            day: 21,
            name: 'Gemini',
            path: geminiIMG
        },
        {
            month: 'Jun',
            day: 21,
            name: 'Cancer',
            path: cancerIMG
        },
        {
            month: 'Jul',
            day: 23,
            name: 'Leo',
            path: leoIMG
        },
        {
            month: 'Aug',
            day: 23,
            name: 'Virgo',
            path: virgoIMG
        },
        {
            month: 'Sep',
            day: 23,
            name: 'Libra',
            path: libraIMG
        },
        {
            month: 'Oct',
            day: 23,
            name: 'Scorpio',
            path: scorpioIMG
        },
        {
            month: 'Nov',
            day: 22,
            name: 'Sagittarius',
            path: sagittariusIMG
        },
        {
            month: 'Dec',
            day: 22,
            name: 'Capricorn',
            path: capricornIMG
        }
    ]
)

// function constellationNumber() {
//     const
//         theDate = new Date(),
//         day = theDate.getDate(),
//         month = theDate.getMonth()
	
// 	return day < get(constellationArr)[month].day ? month - 1 : month
// }
// export let constellation = writable(constellationNumber())

function constellation() {
    const
        theDate = new Date(),
        day = theDate.getDate(),
        month = theDate.getMonth(),
        number = day < get(constellationArr)[month].day ? (month < 1 ? 11 : month - 1) : month,
        name = get(constellationArr)[number].name	
    return {number, name}
}
export let constellationObj = writable(constellation())

export let userObj = writable(
    {
        isAuthorized: false, // false as default
    }
)
