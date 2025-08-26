export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://kacosmetology.pl";
		const statusCode = 302;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
