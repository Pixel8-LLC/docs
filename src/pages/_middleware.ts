import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    request.headers.get('accept-language').startsWith('es') &&
    !request.nextUrl.pathname.includes('es')
  )
    return NextResponse.redirect(`/es${request.nextUrl.pathname}`);
  else if (
    request.headers.get('accept-language').startsWith('en') &&
    !request.nextUrl.pathname.includes('en')
  )
    return undefined;
}
