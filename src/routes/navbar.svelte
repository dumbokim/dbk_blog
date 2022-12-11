<script>
    import Hamburger from './hamburger.svelte'

    export let sidebar = false
</script>

<header class="bg-emerald-200 flex justify-between pl-4 pt-2 pb-2 items-center shadow-lg shadow-emerald-800">
    <nav class="flex">
        <Hamburger bind:open={sidebar}/>
        <a href="/">
            <h1 class="text-emerald-900 text-2xl ml-2">DBK blog</h1>
        </a>
    </nav>
</header>