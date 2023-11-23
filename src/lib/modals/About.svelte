<script>
    import Details from "../components/Details.svelte"
    import ModalBody from "../ModalBody.svelte"
    // https://app.termly.io/builder/documents/new?template_id=9
</script>

<section>
    <div class="title">About</div>
    <ModalBody
        class="body"
    >
        <div class="copy">
            <svg width="100%" height="10rem" version="1.1" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path transform="translate(18,18)" d="m13 6s0.2322 3.3033 2 5.0711c1.7678 1.7678 5.0711 2 5.0711 2s-3.3033 0.2322-5.0711 2-2 5.0711-2 5.0711-0.2323-3.3033-2-5.0711c-1.7678-1.7678-5.0711-2-5.0711-2s3.3033-0.2322 5.0711-2c1.7678-1.7678 2-5.0711 2-5.0711z" fill="#6262e5" fill-rule="evenodd"/>
                <g fill="#3e3edf" fill-rule="evenodd">
                    <path transform="translate(18,18)" d="m15 59s0.1161 1.6516 1 2.5355 2.5355 1 2.5355 1-1.6516 0.1162-2.5355 1c-0.8839 0.8839-1 2.5356-1 2.5356s-0.1161-1.6517-1-2.5356c-0.8839-0.8838-2.5355-1-2.5355-1s1.6516-0.1161 2.5355-1 1-2.5355 1-2.5355z"/>
                    <path transform="translate(18,18)" d="m65 26s0.1858 2.6426 1.6 4.0568c1.4142 1.4143 4.0569 1.6001 4.0569 1.6001s-2.6427 0.1857-4.0569 1.6c-1.4142 1.4142-1.6 4.0568-1.6 4.0568s-0.1858-2.6426-1.6-4.0568c-1.4142-1.4143-4.0569-1.6-4.0569-1.6s2.6427-0.1858 4.0569-1.6c1.4142-1.4143 1.6-4.0569 1.6-4.0569z"/>
                    <path transform="translate(18,18)" d="m55 50s0.1393 1.982 1.2 3.0426c1.0607 1.0607 3.0426 1.2 3.0426 1.2s-1.9819 0.1394-3.0426 1.2c-1.0607 1.0607-1.2 3.0427-1.2 3.0427s-0.1394-1.982-1.2-3.0427c-1.0607-1.0606-3.0426-1.2-3.0426-1.2s1.9819-0.1393 3.0426-1.2c1.0607-1.0606 1.2-3.0426 1.2-3.0426z"/>
                </g>
                <path transform="translate(30,30)" d="m43 26c3.6873 6.8916-10.027 26.688-30 16 24.623-7.6522 28.122-19.135 30-16z" fill="#888" fill-rule="evenodd"/>
                <path transform="translate(30,30)" d="m24 3c-11.598 0-21 10.152-21 21 0.11238 6.2025 2.1028 11.636 5.9824 13.91-3.6094 0.8614-6.2983 0.64126-7.375-0.89648-0.5189-0.741-0.62469-1.7281-0.36719-2.8984-1.2526 2.721-1.4564 5.0273-0.36914 6.5801 3.1678 4.524 16.091 0.94038 28.865-8.0039s20.56-19.863 17.393-24.387c-1.1028-1.5749-3.3883-2.1668-6.4375-1.8926 1.2352 0.14733 2.1608 0.58895 2.6934 1.3496 1.6867 2.4088-0.9982 7.4164-6.373 12.877 4.8562-10.108-2.545-17.639-13.012-17.639z" fill="#999"/>
            </svg>
            <div>
                Selimov Development
            </div>
            <div>
                Astro AI - &copy; 2022 - {(new Date()).getFullYear()}
            </div>
        </div>
        <Details open>
            <svelte:fragment slot="summary">Aplication information</svelte:fragment>
            <svelte:fragment slot="body">
                <p>Astro AI is an advanced application for astrological forecasts using advanced technologies in the field of artificial intelligence to identify inaccuracies and errors that a person may make in making forecasts for our users.</p>
            </svelte:fragment>
        </Details>
        <Details>
            <svelte:fragment slot="summary">Terms and Conditions</svelte:fragment>
            <svelte:fragment slot="body">
                <small>
                    <p><b>Acceptance of Terms</b></p>
                    <p>By using the Astro AI application provided by Selimov Development company, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the application.</p>
                    <p><b>Application Usage</b></p>
                    <p>Astro AI is provided for informational and entertainment purposes only.</p>
                    <p>You must be at least 18 years old or have parental consent to use the application.</p>
                    <p><b>User Information and Cookies</b></p>
                    <p>Selimov Development company does not collect or store any user information on its servers.</p>
                    <p>Astro AI does not use or save cookies.</p>
                    <p><b>AI Usage</b></p>
                    <p>All content provided to the user, in order to avoid astrological inaccuracies, is checked by artificial intelligence to identify errors and to obtain more accurate forecasts.</p>
                    <p><b>Third-Party Links</b></p>
                    <p>The application may contain links to third-party websites. Selimov Development company is not responsible for the content or actions of these third-party sites.</p>
                    <p><b>Changes to Terms</b></p>
                    <p>Selimov Development company reserves the right to modify or update these Terms and Conditions at any time. It is your responsibility to review these terms periodically.</p>
                    <p><b>Limitation of Liability</b></p>
                    <p>Selimov Development company is not liable for any damages or losses resulting from the use of the Astro AI application.</p>
                    <p>We do not guarantee the accuracy or availability of the content provided.</p>
                    <p><b>Termination</b></p>
                    <p>Selimov Development company may terminate or suspend your access to the application at any time for any reason.</p>
                    <p><b>Contact Information</b></p>
                    <p>If you have any questions or concerns regarding these Terms and Conditions, you may contact Selimov Development company at am35a.piston@gmail.com.</p>
                    <p>By using Astro AI, you acknowledge and agree to these Terms and Conditions. Please discontinue use of the application if you do not agree with any part of these terms.</p>
                </small>
            </svelte:fragment>
        </Details>
    </ModalBody>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: .75rem;
    }
    section .title {
        width: 100%;
        text-indent: .5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
    }
</style>
