<script>
    import { page } from '$app/stores';
</script>

<main id="main">
    <p class="mb-2">{$page.url.pathname}</p>
    <slot />
</main>

<style>
    #main {
        padding-top: 1rem;
    }
</style>
