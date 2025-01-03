import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5ri1ym64",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-30",
});
