import { NextRequest, NextResponse } from "next/server";
import { createUserSessionToken, USER_COOKIE } from "@/lib/user-auth";
import { createUser, toPublic, verifyUserPassword } from "@/lib/users";
import { sessionCookieOptions } from "@/lib/cookie-options";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = String(body.action || "login");
    const staySignedIn = body.staySignedIn !== false;
    const cookieOpts = sessionCookieOptions(request, { staySignedIn });

    if (action === "register") {
      if (body.acceptedTerms !== true) {
        return NextResponse.json(
          { error: "Please agree to the Terms of Use to create an account." },
          { status: 400 }
        );
      }
      const user = await createUser({
        email: String(body.email || ""),
        password: String(body.password || ""),
        name: String(body.name || ""),
      });
      const token = await createUserSessionToken(user.id, { staySignedIn });
      const res = NextResponse.json({ user });
      res.cookies.set(USER_COOKIE, token, cookieOpts);
      return res;
    }

    const record = await verifyUserPassword(String(body.email || ""), String(body.password || ""));
    if (!record) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }
    const user = toPublic(record);
    const token = await createUserSessionToken(user.id, { staySignedIn });
    const res = NextResponse.json({ user });
    res.cookies.set(USER_COOKIE, token, cookieOpts);
    return res;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Authentication failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
