<script>
    import Details from "../components/Details.svelte"
    
    // https://app.termly.io/builder/documents/new?template_id=9
</script>

<section>
    <div class="title">About</div>
    <div class="body">
        <Details>
            <svelte:fragment slot="summary">Terms and Conditions</svelte:fragment>
            <svelte:fragment slot="body">
                <p><b>1. Acceptance of Terms</b></p>
                <p>By using the AstroApp application provided by Selimov Development company, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the application.</p>
                <p><b>2. Application Usage</b></p>
                <p>AstroApp is provided for informational and entertainment purposes only.</p>
                <p>You must be at least 18 years old or have parental consent to use the application.</p>
                <p><b>3. User Information and Cookies</b></p>
                <p>Selimov Development company does not collect or store any user information.</p>
                <p>AstroApp does not use or save cookies.</p>
                <p><b>4. Intellectual Property</b></p>
                <p>All content and materials within the application, including but not limited to text, images, and software, are the property of Selimov Development company and are protected by copyright and other intellectual property laws.</p>
                <p><b>5. Third-Party Links</b></p>
                <p>The application may contain links to third-party websites. Selimov Development company is not responsible for the content or actions of these third-party sites.</p>
                <p><b>6. Changes to Terms</b></p>
                <p>Selimov Development company reserves the right to modify or update these Terms and Conditions at any time. It is your responsibility to review these terms periodically.</p>
                <p><b>7. Limitation of Liability</b></p>
                <p>Selimov Development company is not liable for any damages or losses resulting from the use of the AstroApp application.</p>
                <p>We do not guarantee the accuracy or availability of the content provided.</p>
                <p><b>8. Termination</b></p>
                <p>Selimov Development company may terminate or suspend your access to the application at any time for any reason.</p>
                <p><b>9. Contact Information</b></p>
                <p>If you have any questions or concerns regarding these Terms and Conditions, you may contact Selimov Development company at am35a.piston@gmail.com.</p>
                <p>By using AstroApp, you acknowledge and agree to these Terms and Conditions. Please discontinue use of the application if you do not agree with any part of these terms.</p>
            </svelte:fragment>
        </Details>
        <div class="copy">
            <div>
                Selimov Development
            </div>
            <div>
                &copy; 2022 - {(new Date()).getFullYear()}
            </div>
        </div>
    </div>
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
    section .body {
        display: grid;
        gap: 1.25rem;
        align-content: start;
        overflow-y: auto;
    }
    section .body .copy {
        text-align: center;
    }
    section .body :global(p) {
        text-indent: 1rem;
    }
</style>
