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

    <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    />

    </main>
  );
}



