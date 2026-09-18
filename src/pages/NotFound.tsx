import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" description="The page you're looking for doesn't exist." />
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange">404</p>
        <h1 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-navy/70">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className={buttonVariants({ variant: "solid" }) + " mt-8 inline-flex"}>
          Back to home
        </Link>
      </section>
    </Layout>
  );
}
