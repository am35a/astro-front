<script>
    import { route } from '../store/route'
    import { constellationObj, constellationArr } from '../store/app'

    export let rotateDes = $constellationObj.number

    var translateY = undefined

    $: switch ($route.modal) {
        case 'open':
            translateY = '-100%'
        break
        case 'close':
            translateY = '0%'
            // unlock rotation for constellation if modal not open
            if ($route.rotate) {
                $route.rotate === 'left' ? ( $constellationObj.number++, rotateDes++ ) : ( $constellationObj.number--, rotateDes-- )
                    
                if ($constellationObj.number > 11)
                $constellationObj.number = 0
                else if ($constellationObj.number < 0)
                $constellationObj.number = 11

                $constellationObj.name = $constellationArr[$constellationObj.number].name
            }
        break
    }

    // $: rotateDes = $constellationObj.number

</script>
<div class="constellation">
    {#each $constellationArr as item, i}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
            class="zodiac"
            src={item.path}
            style:--rotate-deg={`${(i - rotateDes) * 30}deg`}
            style:--translate-y={translateY}
            style:opacity={i !== $constellationObj.number ? 0 : 1}
        >
        <div
            class="description"
            style:--rotate-deg={`${(i - rotateDes) * 30}deg`}
            style:--translate-y={translateY}
            style:opacity={i !== $constellationObj.number ? 0 : 1}
        >
            <div class="name">
                {item.name}
            </div>
            <div class="period">
                {item.day} {item.month} - {$constellationArr[i < 11 ? i + 1 : 0 ].day - 1} {$constellationArr[i < 11 ? i + 1 : 0 ].month}
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
        transition: all .325s linear;
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