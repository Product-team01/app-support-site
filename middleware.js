export default function middleware(req) {
    const allowedReferer = 'https://app.vue.ai/supportsite'; // Replace with your App B's domain
    const referer = req.headers.get('referer');

    if (!referer || !referer.startsWith(allowedReferer)) {
        return new Response('Access Forbidden', { status: 403 });
    }

    return new Response(null, { status: 200 });
}

export const config = {
    matcher: '/:path*',
};
