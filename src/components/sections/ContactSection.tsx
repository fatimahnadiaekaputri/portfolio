import { Form } from "../ui/Form";

export default function ContactSection() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* left */}
        <div>
          <h2 className="text-5xl font-semibold leading-tight">
            Hire or <br /> Contact Me
          </h2>

          <div className="mt-10 flex gap-4">
            <Social icon="gmail" />
            <Social icon="linkedin" />
            <Social icon="github" />
            <Social icon="medium" />
          </div>
        </div>

        {/* right */}
        <Form />
      </div>
    </section>
  );
}

function Social({ icon }: { icon: string }) {
  return (
    <div className="h-10 w-10 rounded-xl bg-white/10" />
  );
}
