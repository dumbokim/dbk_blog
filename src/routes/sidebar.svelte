<script>
    export let open = false
</script>

<aside class="absolute h-full bg-emerald-200 shadow-lg shadow-emerald-800" class:open>
    <nav class="p-12 text-xl">
        <a class="block text-white hover:text-emerald-600" href="/">Home</a>
        <a class="block text-white hover:text-emerald-600" href="/post">Post</a>
        <a class="block text-white hover:text-emerald-600" href="/post/flutter">- Flutter</a>
        <a class="block text-white hover:text-emerald-600" href="/post/flutter/effective_dart">- - Effective Dart</a>
        <a class="block text-white hover:text-emerald-600" href="/post/etc">- ETC</a>
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