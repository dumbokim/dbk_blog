<script>
    import Hamburger from './hamburger.svelte'

    export let sidebar = true
</script>

<header class="bg-emerald-200 flex justify-between p-2 items-center text-gray-600 border-b-2">
    <nav class="flex">
        <Hamburger bind:open={sidebar}/>
    </nav>
</header>