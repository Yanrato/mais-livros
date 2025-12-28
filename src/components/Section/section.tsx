import { Card } from "../card/card";

interface ISectionProps {
    title: string;
    variant?: 'grid' | 'h-list';
}
export const Section =({ title, variant= 'grid' }: ISectionProps) => {
    return(
        <section className="mt-8 flex flex-col gap-6">
            <p className="font-bold text-2xl text-text">{title}</p>
            <ul 
            data-variant={variant}
            className="gap-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:sm:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">

                <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72"> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72"> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72"> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72"> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72"> <Card 
    title='Harry Potter e a Pedra Filosofal'
    description='Narra a jornada de Harry, um órfão que vive infeliz com tios mal-humorados, até descobrir que é um bruxo no seu 11º aniversário, sendo convidado para a Escola de Magia de Hogwarts, onde faz amigos (Rony e Hermione) e enfrenta desafios mágicos, enquanto desvenda o mistério por trás da lendária Pedra Filosofal e a ameaça do Lorde Voldemort.'
    imageUrl='https://imgv2-1-f.scribdassets.com/img/word_document/763645125/original/216x287/665b39df63/1763397627?v=1'
    price={19.90}
    /></li>

            </ul>
        </section>
    );
};