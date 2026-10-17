import { createFileRoute, redirect } from "@tanstack/react-router";

// The old Projects page now lives under Experience; keep earlier links working.
export const Route = createFileRoute("/work")({
  beforeLoad: () => {
    throw redirect({ to: "/experience", statusCode: 301 });
  },
});
