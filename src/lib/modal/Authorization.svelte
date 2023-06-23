<script>
    import { userObj } from '../../store/app'
    import { route } from '../../store/route'

    function signin () {
        $userObj.isAuthorized = true
        route.modal('close')
        // setTimeout(function(){
        //     route.back()
        // }, 350);
    }
</script>

<section>
    <div class="title">Authorization</div>
    <div class="body">
        <p>Use your Google Account</p>
        <button
            on:click={signin}
            class="signin"
            type="button"
        >Sign in</button>
    </div>
</section>

<style>
    section {
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: .75rem;
    }
    section .title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
    section .body {
        display: grid;
        justify-content: center;
        align-content: center;
    }
    section .signin {
        margin-top: .5rem;
        margin-bottom: .25rem;
        display: flex;
        gap: 1rem;
        justify-self: center;
    }
</style>