import { Section } from "@/components/section/section";
import { Metadata } from "next";

//import { Card } from "@/components/card/card";

export const metadata: Metadata = {
  title: "Codarse - Página Inicial",
};

export default function PageHome() {
  return (
    <main>
      <Section />
    </main>
  );
};
