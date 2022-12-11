import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const post = await import(`../${params.slug}.md`)
    const content = post.default

    return {
        content,
    }
}) satisfies PageLoad;