import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {

    console.log(request.nextUrl.pathname, request.headers.get('accept-language').startsWith('es'))
    if (request.headers.get('accept-language').startsWith('es') && !request.nextUrl.pathname.includes('es'))
        return NextResponse.redirect(`/es${request.nextUrl.pathname}`)
    else if (request.headers.get('accept-language').startsWith('en') && !request.nextUrl.pathname.includes('en'))
        return undefined;
}