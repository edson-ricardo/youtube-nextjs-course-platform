import { Metadata } from "next";
import { Section } from "@/components/section/section";

//import { Card } from "@/components/card/card";

export const metadata: Metadata = {
  title: "Codarse - Página Inicial",
};

export default function PageHome() {
  return (
    <main>
      <Section 
        title="Todos os cursos"
        variant="h-list"
      />
    </main>
  );
};
