<script>
    export let open = true
</script>

<aside class="absolute w-40 h-full bg-emerald-200 border-r-2 shadow-lg" class:open>
    <nav class="p-12 text-xl">
        <a class="block text-white hover:text-emerald-600" href="#about">About</a>
        <a class="block text-white hover:text-emerald-600" href="#contact">Contact</a>
    </nav>
</aside>

<style>
    aside {
        left: -100%;
        transition: left 0.3s ease-in-out
    }

    .open {
        left: 0
    }
</style>