export default function middleware(req) {
    // Allowed referer domain
    const allowedReferer = 'https://app.vue.ai';
    
    // Get the referer header
    const referer = req.headers.get('referer');
    
    // Check if the referer is present and starts with the allowed domain
    if (!referer || !referer.startsWith(allowedReferer)) {
        return new Response('Access Forbidden', { status: 403 });
    }

    // If the referer is valid, let the request proceed
    return new Response(null, { status: 200 });
}

// Specify paths to apply the middleware
export const config = {
    matcher: '/:path*',
};
