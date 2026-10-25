import { createFileRoute, redirect } from "@tanstack/react-router";

// Honours now sit on the page they belong to; the old Awards page goes to Education.
export const Route = createFileRoute("/awards")({
  beforeLoad: () => {
    throw redirect({ to: "/education", hash: "education-honours-heading", statusCode: 301 });
  },
});
