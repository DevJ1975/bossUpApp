import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Lead-capture endpoint. Currently logs the lead server-side so the form works
 * end-to-end. Wire this to Supabase, a CRM, or an email (e.g. the Gmail tool)
 * by replacing the console.log below.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const organization = String(body?.organization ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  // TODO: persist the lead (Supabase / CRM) or notify the team (email).
  console.log("[lead]", {
    name,
    email,
    organization,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
