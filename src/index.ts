// src/index.ts
export default {
  async fetch(request: Request): Promise<Response> {
    const destinationURL = "https://kacosmetology.pl";
    const statusCode = 302;

    // Fire event to Plausible
    try {
      await fetch("https://analytics.mflisik.ovh/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Cloudflare-Worker",
        },
        body: JSON.stringify({
          name: "QR Scan",
          url: "https://qr.kacosmetology.pl",
          domain: "kacosmetology.pl",
          props: {
            source: "Witryna QR"
          }
        }),
      });
    } catch (err) {
      // don’t block the redirect if Plausible call fails
      console.error("Plausible error:", err);
    }

    // Redirect the user
    return Response.redirect(destinationURL, statusCode);
  },
};
