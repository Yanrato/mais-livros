
import { Section } from "@/components/Section/section";
import { title } from "process";

export default function Home() {
  return (
    <>
      <Section
        title="Destaques da Semana"
        items={}
        variant="h-list"
      />

      <Section
        title="Catálogo"
        items={}
        variant="grid"
      />
    </>
  );
}
