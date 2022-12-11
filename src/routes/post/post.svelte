<script>
    export let title
    export let date
</script>
<article>
    <div class="border-b-2 mr-14 pb-2">
    <h1 class="text-4xl">{title}</h1>

    <p class="pt-4">Published: {date}</p>
    </div>

    <div class="pt-16">
        <slot/>
    </div>

</article>
