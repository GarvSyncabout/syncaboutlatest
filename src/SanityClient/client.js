import client from "@sanity/client";

export default client({
  projectId: "5ri1ym64",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-30",
});
