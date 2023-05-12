import type { RequestHandler } from './$types';

export const GET = (async () => {
	const response = await fetch('https://scratchdb.lefty.one/v3/docs/');
	const status = response.status;

	return new Response(JSON.stringify({ isUp: status === 200 }), {
		headers: { 'content-type': 'application/json' }
	});
}) satisfies RequestHandler;
