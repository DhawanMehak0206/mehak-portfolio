import { createFileRoute } from "@tanstack/react-router";
import { MediaGrid } from "@/components/media";
import { PageHeader } from "@/components/site-ui";
import { pageHead } from "@/lib/portfolio-data";

export const Route = createFileRoute("/media")({
  head: () =>
    pageHead(
      "Media",
      "Press and video coverage of Mehak Dhawan’s work, including ETEducation, Être Girls, The Tribune and The Wire.",
    ),
  component: Media,
});

function Media() {
  return (
    <main id="main">
      <PageHeader title="In the Media">
        <p>Articles and features about my work with Kindling and DigiSakhi.</p>
      </PageHeader>

      <section className="section section--tight" aria-label="Media coverage">
        <div className="container">
          <MediaGrid />
        </div>
      </section>
    </main>
  );
}
