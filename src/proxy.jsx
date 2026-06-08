import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user,"userrr");
  if(user){

      return NextResponse.next();
  }
  else{

      return NextResponse.redirect(new URL('/signIn', request.url))
  }
}

export const config = {
  matcher: ["/profile"],
};
