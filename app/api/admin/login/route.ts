import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  adminCookieOptions,
  createAdminSession,
  isDevEnvironment,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isDevEnvironment()) {
    return NextResponse.json(
      { error: "Admin login is only available in local development." },
      { status: 403 }
    );
  }

  const body = await request.json();
  const password = typeof body.password === "string" ? body.password : "";

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const token = await createAdminSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, adminCookieOptions());
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", { ...adminCookieOptions(0), maxAge: 0 });
  return response;
}
