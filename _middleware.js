import { NextResponse } from 'next/server';

export function middleware(req) {
    const referer = req.headers.get('referer');
    const allowedDomain = 'http://localhost:8003/supportsite';

    if (referer && referer.includes(allowedDomain)) {
        return NextResponse.next(); // Allow access
    } else {
        return new Response('Forbidden', { status: 403 }); // Block access
    }
}
