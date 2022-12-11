<script>
    import "../app.css";
    import Navbar from './navbar.svelte'
    import Sidebar from './sidebar.svelte'
    import Footerbar from './footerbar.svelte'
    let open = false
</script>

<main id="main">
    <Sidebar bind:open />
    <Navbar bind:sidebar={open}/>
    <div id="content">
        <slot />
    </div>
    <Footerbar />
</main>


<style>
    #main {
        background: rgba(23, 31, 68, 0.8);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        color: #e5e7eb;
    }

    #content {
        padding: 3rem;
        flex: 1;
    }
</style>
