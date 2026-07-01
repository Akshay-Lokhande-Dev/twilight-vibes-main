export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // www → non-www permanent redirect
    if (url.hostname === 'www.twilightvibes.com') {
      url.hostname = 'twilightvibes.com';
      return Response.redirect(url.toString(), 301);
    }

    // All other requests pass through to Pages assets
    return env.ASSETS.fetch(request);
  }
};
