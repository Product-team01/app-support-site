import { NextResponse } from 'next/server';

export function middleware(req) {
    // Allowed referer domain
    const allowedReferer = 'https://app.vue.ai';
    
    // Get the referer header
    const referer = req.headers.get('referer');
    
    // Check if the referer is present and starts with the allowed domain
    if (!referer || !referer.startsWith(allowedReferer)) {
        return new NextResponse('Access Forbidden', { status: 403 });
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Specify paths to apply the middleware
export const config = {
    matcher: '/:path*',
};
