<script>
    import "../app.css";
    import Navbar from './navbar.svelte'
    import Sidebar from './sidebar.svelte'
    let open = true
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open}/>

<main id={open? "main" : "main2"}>
    <slot />
</main>

<style>
    #main {
        padding-top: 3rem;
        padding-left: 13rem;
    }

    #main2 {
        padding-top: 3rem;
        padding-left: 3rem;
    }
</style>
