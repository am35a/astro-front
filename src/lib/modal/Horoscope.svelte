<script>
    import { route } from '../../store/route'

    let periodsArr = ['Today', 'Tomorrow', 'This week', 'Year']
    let period = 0

    let horoscopeObj = [
        [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nam obcaecati temporibus consectetur pariatur reiciendis velit cum amet possimus soluta? Consequatur deserunt quaerat et tenetur velit ducimus eius consequuntur cumque!',
            'Eos, pariatur! Ratione magnam et eius vero obcaecati doloremque delectus sapiente fuga! Pariatur hic provident sit vero dolorem, magnam obcaecati eaque. Debitis culpa quas amet fugiat natus. Architecto, sequi hic.',
            'Sed veritatis voluptatum quae officia beatae perspiciatis non blanditiis minus maiores, quis alias, saepe explicabo nostrum optio earum necessitatibus consequatur omnis fugiat hic? A officiis laudantium pariatur iste consequatur corrupti!',
            'Ipsam nihil fugit aliquid distinctio, esse quisquam explicabo ut. Officiis, nulla quis unde mollitia reiciendis expedita neque nobis sint non error. Aliquid doloribus ex ab quasi ea? Velit, neque laborum.'
        ],
        [
            'Ratione tempore commodi voluptatem laudantium vitae quaerat ut quam, dolor, amet fuga iure. Magnam repellat ipsam molestiae dolorum maiores consequatur ipsa eaque incidunt! Sit exercitationem dolor, enim sequi et ipsa!',
            'Iusto eligendi assumenda, officiis ex aperiam repellendus dolores nam facere ea sed, cumque culpa praesentium est ratione inventore! Laboriosam recusandae aliquid unde debitis dolorem deserunt quidem velit beatae magnam eaque!',
            'Id vel quia dolores corporis veritatis repellendus accusamus ducimus! Blanditiis necessitatibus illo dignissimos alias odit voluptates laboriosam sint voluptas reprehenderit est consectetur, aperiam voluptatum, tempora a nesciunt vero et? Repellendus.',
            'Asperiores minus ab beatae voluptatum. Sed perferendis similique dignissimos praesentium, itaque rerum. Praesentium modi eligendi quas eaque est commodi perferendis distinctio eius? Laboriosam vero dolore a consequatur unde accusantium odio?'
        ],
        [
            'Natus ea, numquam expedita perspiciatis amet repellat maiores, blanditiis animi quibusdam in asperiores sit adipisci? Exercitationem ab ullam sit veritatis, aspernatur repellat nulla facere ipsa, quisquam, laudantium dolorem facilis quos.',
            'Unde, beatae saepe ipsam incidunt voluptate exercitationem numquam! Est officia, ipsum beatae ab minima, dignissimos architecto esse in dolores tempore libero molestiae quis. Modi, excepturi dolorum. Incidunt amet perferendis voluptates.',
            'Eos deserunt, obcaecati a vero quisquam esse libero corporis possimus impedit adipisci blanditiis alias magnam ipsam odit. Ipsa quas, facere esse voluptate repellendus ea? Iure laborum eos accusamus et mollitia.',
            'Voluptate, ea minus provident deleniti sequi rerum eaque facere veritatis aspernatur pariatur amet alias placeat commodi vel omnis dolorum beatae iste. Repellendus, molestiae. Id doloremque quis nemo nisi quod repellendus.'
        ],
        [
            'Eos, pariatur! Ratione magnam et eius vero obcaecati doloremque delectus sapiente fuga! Pariatur hic provident sit vero dolorem, magnam obcaecati eaque. Debitis culpa quas amet fugiat natus. Architecto, sequi hic.',
            'Id vel quia dolores corporis veritatis repellendus accusamus ducimus! Blanditiis necessitatibus illo dignissimos alias odit voluptates laboriosam sint voluptas reprehenderit est consectetur, aperiam voluptatum, tempora a nesciunt vero et? Repellendus.',
            'Iusto eligendi assumenda, officiis ex aperiam repellendus dolores nam facere ea sed, cumque culpa praesentium est ratione inventore! Laboriosam recusandae aliquid unde debitis dolorem deserunt quidem velit beatae magnam eaque!',
            'Natus ea, numquam expedita perspiciatis amet repellat maiores, blanditiis animi quibusdam in asperiores sit adipisci? Exercitationem ab ullam sit veritatis, aspernatur repellat nulla facere ipsa, quisquam, laudantium dolorem facilis quos.'
        ]
    ]

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

    $: switch ($route.rotate) {
        case 'right':
            if (period)
                period--
        break
        case 'left':
            if (period < periodsArr.length - 1)
                period++
        break
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
        on:scroll={() => modalLock(event)}
    >
        {#each horoscopeObj[period] as text}
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
        gap: .25rem;
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