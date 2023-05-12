import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const status = await fetch('/api/check');
	const { isUp } = await status.json();

	return {
		isUp
	};
}) satisfies PageLoad;
