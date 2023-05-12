<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<div class="container {data.isUp ? 'up' : 'down'}">
		<span class="status">
			{data.isUp ? 'yep' : 'nope'}
		</span>
	</div>

</main>
<footer>
    <span class="api">
        tip: fetch
        <a href="/api/check">/api/check</a>
        for a status check :3
    </span>
</footer>

<style scoped>
    :global(body) {
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
                    segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu,
                    roboto, noto, arial, sans-serif;
    }

	.container {
       		display: flex;
		justify-content: center;
		align-items: center;

        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
	}

	.container.up {
		background-color: #16a34a;
	}

	.container.down {
		background-color: #dc2626;
	}

	.status {
		font-size: 5rem;
		font-weight: bold;
        color: white;

        filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.2));
	}

    footer {
        opacity: 75%;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.5rem;

        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
    }

    a {
        color: white;
    }
</style>
