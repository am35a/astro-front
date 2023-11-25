<script>
    // @ts-nocheck
    
    import Button from './components/Button.svelte'
    import { fade } from 'svelte/transition'
    import { linear } from 'svelte/easing'
    import { route } from '../store/route'
    import { userObj } from '../store/app'

    function appAbout() {
        route.goto('about')
        route.modal('open')
        // console.log('nav: appAbout')
    }
    
    function userAccount() {
        route.goto('account')
        route.modal('open')
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
        transition:fade = {{ duration: 375, easing: linear }}
    >
        <Button
            on:click={appAbout}
            class="circle"
            disabled={$route.modalMotion}
        >
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
            </svg> -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem" height="2rem"
                viewBox="-4 -4 56 56"
            >
                <path d="M43 26C46.6873 32.8916 32.9733 52.6875 13 42.0001C30.6835 38.4956 39.4998 24.6832 43 26Z" fill="currentColor" />
                <path d="M 3 24 C 3 13.152 12.402 3 24 3 C 34.473 3 41.882 10.54 37.007 20.658 C 42.396 15.189 45.074 10.173 43.385 7.761 C 42.852 7 41.927 6.559 40.692 6.412 C 43.741 6.138 46.026 6.73 47.129 8.305 C 50.297 12.829 42.51 23.747 29.736 32.691 C 16.962 41.636 4.039 45.219 0.871 40.695 C -0.216 39.142 -0.013 36.836 1.24 34.115 C 0.982 35.285 1.089 36.272 1.608 37.013 C 2.685 38.551 5.364 38.783 8.975 37.921 C 5.096 35.647 3.113 30.202 3 24 Z" fill="currentColor" />
            </svg>
        </Button>
        <!--
        {#if $userObj.isAuthorized}
            <Button
                on:click={userAccount}
                class="circle"
                disabled={$route.modalMotion}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
            </Button>
        {:else}
            <Button
                on:click={userLogin}
                class="circle"
                disabled={$route.modalMotion}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                    <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                    <path d="M8 15a18 18 0 0 0 1.8 6" />
                    <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
            </Button>
        {/if}
        -->
    </nav>
{/if}

<style>
    nav {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        gap: .75rem;
        justify-self: end;
        align-self: end;
        padding: 1rem;
        z-index: 1;
    }
</style>