<script>
    import { fade } from 'svelte/transition'
    import { route } from '../store/route'
    import { userObj } from '../store/app'

    function userAccount() {
        console.log('nav: userAccount')
    }

    function userLogin() {
        route.goto('authorization')
        route.modal('open')
        console.log('nav: userLogin')
    }
</script>

{#if $route.modal === 'close'}
    <nav
        transition:fade
    >
        {#if $userObj.isAuthorized}
            <button
                on:click={userAccount}
                class="large circle user"
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
            </button>
        {:else}
            <button
                on:click={userLogin}
                class="large circle user"
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                    <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                    <path d="M8 15a18 18 0 0 0 1.8 6" />
                    <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
            </button>
        {/if}
    </nav>
{/if}

<style>
    nav {
        grid-column: 1/-1;
        grid-row: 1/-1;

        justify-self: end;
        align-self: end;
        padding: 1rem;
        z-index: 1;
    }
</style>