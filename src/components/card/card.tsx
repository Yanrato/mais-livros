import Image from "next/image"
import Link from "next/link";

export const Card = () => {
  return (
   
    <article className="flex flex-col gap-6 p-2 hover:shadow-lg hover:scale-[1.02] transition-transform border border-gray-300 rounded-xl max-w-sm">
         <Link href="HP">
        <h4 className="font-extrabold text-lg">Harry Potter e a Pedra Filosofal</h4>
        
        <Image 
        src={"https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1"}
         alt="Harry Potter e a Pedra Filosofal" 
        width={200}
        height={300}
        className="rounded-xl aspect-auto object-cover" 
        />
        

        <p className="line-clamp-4 placeholder:">Narra a jornada de Harry, <br></br>um órfão que vive infeliz <br></br>com tios mal-humorados, <br></br>até descobrir que é um bruxo<br></br> no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort. </p>
        </Link>

        <p className="font-bold text-lg">R$ 19,90</p>
        <button className="bg-primary text-white px-4 py-2 rounded-md w-32 hover:bg-primary/80 transition">Adcionar ao carrinho</button>


    </article>
    
    
  );
};