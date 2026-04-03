import { Section } from "@/components/section/section";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Codarse - Todos os Cursos",
};

export default function PageCursos() {
    
    /*Para a página ser válida, deve retornar um 'html'*/
    return (
        <main>
            <Section 
                title="Veja mais cursos"
                variant="grid"
            />
        </main>
    );
};
