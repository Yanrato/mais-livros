import { Card } from '@/components/card/card';

export default function PageHome() {
  return (
    
    <main className="bg-background p-6">
      
      <h1 className="text-5xl font-extrabold underline">
        Bem-vindo ao Mais Livros!
      </h1>

      <p className="mt-2 font-bold text-base text-text">
        Aqui você encontrará diversos livros com preços acessíveis e entregas rápidas.
      </p>

    <br></br>

    <p className="mt-2 font-bold text-2xl text-text">Destaques da Semana</p>
       
    
    <br></br>

    <Card />

    </main>
  );
}



