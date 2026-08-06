import { createFileRoute } from "@tanstack/react-router";
import { Privacidad } from "@/components/Privacidad";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · Eurotalento" },
      {
        name: "description",
        content:
          "Información sobre el tratamiento de datos personales en Eurotalento: finalidad, base jurídica, conservación y derechos RGPD.",
      },
      { property: "og:title", content: "Política de privacidad · Eurotalento" },
      {
        property: "og:description",
        content:
          "Cómo tratamos los datos personales recogidos en el formulario de contacto de Eurotalento.",
      },
    ],
  }),
  component: Privacidad,
});
