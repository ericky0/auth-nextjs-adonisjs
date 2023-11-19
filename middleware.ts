import { NextRequest, NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'
import { ResponseCookies, RequestCookies } from 'next/dist/server/web/spec-extension/cookies';


// /**
//  * Copy cookies from the Set-Cookie header of the response to the Cookie header of the request,
//  * so that it will appear to SSR/RSC as if the user already has the new cookies.
//  */
// function applySetCookie(req: NextRequest, res: NextResponse): void {
//   // parse the outgoing Set-Cookie header
//   const setCookies = new ResponseCookies(res.headers);
//   // Build a new Cookie header for the request by adding the setCookies
//   const newReqHeaders = new Headers(req.headers);
//   const newReqCookies = new RequestCookies(newReqHeaders);
//   setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));
//   // set “request header overrides” on the outgoing response
//   NextResponse.next({
//     request: { headers: newReqHeaders },
//   }).headers.forEach((value, key) => {
//     if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
//       res.headers.set(key, value);
//     }
//   });
// }

export function middleware(req: NextRequest) {

    // const headersList = headers()
    // console.log(headersList)
  
    // const allCookies = cookies().getAll()
    // console.log(allCookies)

    // Set cookies on your response
    // const res = NextResponse.next();
    // res.cookies.set('adonis-session');

    // Apply those cookies to the request
    // applySetCookie(req, res);

    // return res;
    return NextResponse.next()

}

export const config = {
  matcher: ['/settings']
}