import { Button } from "@/components/button";

export default function PropertyManagementPage() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/60">Property Management</p>
        <h1 className="mt-4 font-serif text-4xl">White-glove care for your portfolio.</h1>
        <p className="mt-6 text-sm text-ink/70">
          External property management resources can be linked here until a dedicated management portal is
          integrated.
        </p>
        <div className="mt-8">
          <Button href="https://example.com" variant="outline">
            Visit Property Management
          </Button>
        </div>
      </div>
    </div>
  );
}
