import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EuroTalento · Estudio de Consultoría" },
      {
        name: "description",
        content:
          "Consultoría de RRHH: selección de talento, dirección interina (tuHR®) y formación in company.",
      },
      { property: "og:title", content: "EuroTalento · Estudio de Consultoría" },
      {
        property: "og:description",
        content:
          "Selección de talento, Interim Management de RRHH y formación in company.",
      },
    ],
  }),
  component: Landing,
});
