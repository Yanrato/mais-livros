import { Footer } from "@/components/Footer/footer";
import { Section } from "@/components/Section/section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Livros - Mais Livros',
    description: 'Encontre uma variedade de livros incríveis na seção de Livros do Mais Livros. Descubra novos títulos, autores e gêneros para todos os gostos. Compre agora e mergulhe em histórias fascinantes!',
  }

export default function Livros(){
    return(
        <main>
           <div> 
      <Section 
      variant='grid'
    title='Todos os Livros'
    items={[
      {
        title: `Harry Potter e a Pedra Filosofal`,
        description: 'Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.',
        imageUrl: 'https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1',
        price: 19.90
      },
      {
        title: 'Arte da Guerra',
        description: 'é um tratado militar clássico que ensina a estratégia e táticas de conflito, focando em vencer sem lutar, explorando vulnerabilidades do inimigo e planejando meticulosamente, com princípios aplicáveis a negócios, esportes e vida, através de 13 capítulos que abordam desde o planejamento e avaliação do terreno até o uso de espionagem, destacando que a vitória é alcançada pela inteligência, disciplina e adaptabilidade.',
        imageUrl: 'https://m.media-amazon.com/images/I/813MH6QyXQL.jpg',
        price: 19.90
      },
      {
        title: 'O Apanhador no Campo de Centeio',
        description: 'é um clássico de J.D. Salinger sobre o adolescente idealista Holden Caulfield, que, expulso de mais uma escola, vagueia por Nova York, criticando a falsidade do mundo adulto e sonhando em ser um "apanhador" que salva crianças inocentes de caírem num precipício, simbolizando a perda da pureza para a vida adulta corrompida, uma fantasia que reflete seu desejo de proteger a inocência e sua própria angústia existencial. ',
        imageUrl: 'https://m.media-amazon.com/images/I/71b3GDZMzSL.jpg',
        price: 19.90
      },
      {
        title: 'A Metamorfose',
        description: 'narra a história de Gregor Samsa, um caixeiro-viajante que acorda um dia transformado num inseto monstruoso, explorando temas como alienação, isolamento, desumanização pelo trabalho e a dinâmica familiar diante do grotesco e do diferente, sendo uma obra-prima que mistura o surreal com a realidade cruel das obrigações e do preconceito.',
        imageUrl: 'https://m.media-amazon.com/images/I/71QLwli7GUL.jpg',
        price: 19.90
      },
      {
        title: 'Scott Pilgrim Contra o Mundo 1',
        description: 'é uma graphic novel que acompanha Scott Pilgrim, um jovem que enfrenta o desafio de derrotar as ex-namoradas de seu novo namorado, cada uma com habilidades mágicas e personalidades únicas, enquanto navega pelas complexidades da vida adulta e da amizade.',
        imageUrl: 'https://m.media-amazon.com/images/I/81kwlJ1pcpL.jpg',
        price: 19.90
      },
      {
        title: 'Vagabond vol 1',
        description: 'é uma série de mangá que reimagina a vida do lendário samurai Miyamoto Musashi, explorando sua jornada de autodescoberta, crescimento pessoal e busca pela verdadeira força através de batalhas épicas e filosofia samurai.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvScobpq3n5RtmOzUIJfWRX8YYPYJC7IkcA&s',
        price: 19.90
      }
    ]}
    />
    </div>

    <Footer />
        </main>
    );
}