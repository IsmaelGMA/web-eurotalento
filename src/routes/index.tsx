import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eurotalento · Selección de talento, Interim HR y formación" },
      {
        name: "description",
        content:
          "Consultoría de RRHH en Madrid y Asturias: reclutamiento y selección de Middle Management y Dirección, dirección interina (tuHR®) y formación In Company.",
      },
      { property: "og:title", content: "Eurotalento · Selección de talento, Interim HR y formación" },
      {
        property: "og:description",
        content:
          "Acompañamos a empresas a incorporar y gestionar talento, con Interim Management de RRHH y formación In Company.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Landing,
});
