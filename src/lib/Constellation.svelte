<script>
    import { route } from '../store/route'

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

    let constellationArr = [
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

    export let day = 1 // start from 1
    export let month = 1 // start from 1
    let constellation = day < constellationArr[month].day ? month - 1 : month
    export let rotateDes = constellation

    var translateY = undefined

    $: switch ($route.modal) {
        case 'open':
            translateY = '-100%'
        break
        case 'close':
            translateY = '0%'
            // unlock rotation for constellation if modal not open
            if ($route.rotate) {
                $route.rotate === 'left' ? ( constellation++, rotateDes++ ) : ( constellation--, rotateDes-- )
                    
                if(constellation > 11)
                    constellation = 0
                else if(constellation < 0)
                        constellation = 11
            }
        break
    }

</script>
<div class="constellation">

    {#each constellationArr as item, i}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
            class="zodiac"
            src={item.path}
            style:--rotate-deg={`${(i - rotateDes) * 30}deg`}
            style:--translate-y={translateY}
            style:opacity={i !== constellation ? 0 : 1}
        >
        <div
            class="description"
            style:--rotate-deg={`${(i - rotateDes) * 30}deg`}
            style:--translate-y={translateY}
            style:opacity={i !== constellation ? 0 : 1}
        >
            <div class="name">
                {item.name}
            </div>
            <div class="period">
                {item.day} {item.month} - {constellationArr[i < 11 ? i + 1 : 0 ].day - 1} {constellationArr[i < 11 ? i + 1 : 0 ].month}
            </div>
        </div>
    {/each}
</div>

<style>
    .constellation {
        grid-column: 1/-1;
        grid-row: 1/-1;

        position: inherit;
        width: inherit;
        height: inherit;
        display: inherit;
        grid-template: inherit;
        overflow: inherit;
    }
    .constellation .zodiac,
    .constellation .description {
        grid-column: 1/-1;
        grid-row: 1/-1;
        transform: translateX(calc(-50% + 50vw)) translateY(var(--translate-y)) rotate(var(--rotate-deg));
        transition: all .75s;
        will-change: transform;
    }
    .constellation .zodiac {
        margin-top: 5vh;
        height: 95vh;
        transform-origin: bottom center;
    }
    .constellation .description {
        height: 65vh;
        margin-top: 65vh;
        text-align: center;
        transform-origin: bottom center;
    }
    .constellation .description .name {
        text-transform: uppercase;
        line-height: 175%;
        font-size: 125%;
        font-weight: 600;
        letter-spacing: .5em;
        padding-left: .5em;
        padding-top: .25rem;
    }
    .constellation .description .period {
        color: hsla(0, 0%, 100%, 0.5);
    }
</style>