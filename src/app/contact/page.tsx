import { submitContact } from "./actions";

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Contact</p>
        <h1 className="mt-4 font-serif text-4xl">Let us curate your next move.</h1>
        <form action={submitContact} className="mt-10 grid gap-4 rounded-3xl border border-ink/10 bg-white p-6">
          <input
            className="rounded-2xl border border-ink/10 px-4 py-3 text-sm"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="rounded-2xl border border-ink/10 px-4 py-3 text-sm"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="rounded-2xl border border-ink/10 px-4 py-3 text-sm"
            name="message"
            rows={5}
            placeholder="Tell us what you're looking for"
            required
          />
          <input className="hidden" tabIndex={-1} autoComplete="off" name="company" aria-hidden="true" />
          <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
