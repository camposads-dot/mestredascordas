/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { 
  CheckCircle, 
  Play, 
  ShieldCheck, 
  Music, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Gift, 
  Clock, 
  ArrowRight,
  HelpCircle,
  User,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("section-padding", className)}>
    {children}
  </section>
);

const Headline = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-4xl md:text-6xl font-bold mb-6 text-center leading-tight", className)}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-lg hover:text-violin-red transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Page ---

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* 1ª Dobra: Hero */}
<header className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">

  {/* Background */}
  <div className="absolute inset-0 z-0">
    
    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black"></div>

    {/* red glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent_70%)]"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

    {/* Texto */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >

      <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
        Método Mestre das Cordas
      </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05]">

        PARE DE TENTAR <br/>

        APRENDER <span className="text-red-500">SOZINHO</span> <br/>

        E TOQUE SUA PRIMEIRA <br/>

        MÚSICA EM <span className="text-red-500">30 DIAS</span>

      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
        O método passo a passo que elimina a frustração, corrige sua postura
        e leva você do zero absoluto até tocar sua primeira música,
        mesmo que nunca tenha pegado em um violino antes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

        <a 
          href="#oferta"
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-red-600/40 transition-all flex items-center gap-2 justify-center"
        >
          QUERO COMEÇAR AGORA
          <ArrowRight size={20}/>
        </a>

        <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 text-sm">
          <ShieldCheck className="text-green-500" />
          Compra 100% Segura
        </div>

      </div>

    </motion.div>

    {/* Vídeo */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-red-600/40 w-full max-w-2xl mx-auto lg:mx-0"
      style={{ boxShadow: "0 0 40px rgba(255,0,0,0.25)" }}
    >

      <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">

        <img 
          src="https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=1200&auto=format&fit=crop"
          alt="Video Thumbnail"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
        />

        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play fill="white" size={32} className="ml-1"/>
        </div>

      </div>

    </motion.div>

  </div>
</header>

      {/* Problema */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-violin-red text-center font-bold uppercase tracking-widest mb-4">A Dura Realidade</h2>
          <Headline>Você sente que o violino é um "instrumento impossível"?</Headline>
          <p className="text-center text-xl text-stone-600 mb-12">
            A maioria dos iniciantes desiste nos primeiros 3 meses. Sabe por quê?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "O som de 'gato morrendo'", desc: "Você tenta tirar uma nota limpa, mas o som sai estridente e irritante, fazendo você querer guardar o violino na caixa para sempre." },
              { title: "Dores e má postura", desc: "Seu pescoço dói, seu braço cansa e você não sabe se está segurando o arco do jeito certo. Sem orientação, você está criando vícios perigosos." },
              { title: "Aulas caríssimas", desc: "Pagar R$ 300, R$ 500 por mês em aulas particulares que não avançam no seu ritmo é frustrante e pesa no bolso." },
              { title: "Falta de clareza", desc: "Você assiste vídeos aleatórios no YouTube, mas não tem um caminho. Fica pulando de galho em galho e nunca termina uma música." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-stone-900">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solução */}
      <Section className="bg-stone-900 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
           <img 
  src="/images/apresentacao.jpg"
  alt="Violin Detail"
  className="rounded-3xl shadow-2xl"
/>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-violin-light font-bold uppercase tracking-widest mb-4">A Solução Definitiva</h2>
            <Headline className="lg:text-left text-white">Domine o Violino com o Método Mestre das Cordas</Headline>
            <p className="text-xl text-stone-400 mb-8 leading-relaxed">
              Esqueça a teoria maçante e os exercícios que não levam a lugar nenhum. Nosso e-book foi desenhado para quem quer resultados práticos e rápidos.
            </p>
            <ul className="space-y-6 text-left inline-block lg:block">
              {[
                "Postura Perfeita: O guia visual para segurar o violino e o arco sem dor.",
                "Técnica de Arco: Como tirar um som doce e aveludado desde o primeiro dia.",
                "Leitura Simplificada: Aprenda a ler partituras sem precisar de anos de teoria.",
                "Cronograma de 30 Dias: O que praticar a cada dia para tocar sua primeira música."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-violin-light/20 p-1 rounded-full">
                    <CheckCircle className="text-violin-light" size={24} />
                  </div>
                  <span className="text-lg text-stone-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Depoimento em vídeo */}
<section className="bg-stone-100 py-24">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
      Resultado Real de uma Aluna
    </h2>

    <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto">
      Veja o progresso de uma aluna após apenas 3 semanas aplicando o método Mestre das Cordas.
    </p>

    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">

      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/kRMNuLtW8jU"
        title="Resultado Violino"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>

  </div>

</section>

      {/* Bônus */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-violin-red font-bold uppercase tracking-widest mb-4">Presentes Exclusivos</h2>
          <Headline>Se você agir agora, leva esses 3 Bônus Gratuitos</Headline>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Guia de Afinação", price: "R$ 47,00", desc: "Aprenda a afinar seu violino sozinho usando apenas o celular, sem risco de estourar as cordas.", icon: <Music /> },
            { title: "Apostila de Exercícios", price: "R$ 67,00", desc: "Acesso a exercícios exclusivos do famoso método A Tune a Day for Violin, de C. Paul Herfurthde focado em lições progressivas, postura, digitação e técnicas de arco", icon: <Play /> },
            { title: "Pack de Músicas", price: "R$ 97,00", desc: "Conjunto de músicas do nível iniciante ao avançado para você se desafiar e aprender músicas conhecidas com maior facilidade.", icon: <Gift /> }
          ].map((bonus, i) => (
            <div key={i} className="relative p-8 rounded-2xl bg-stone-50 border-2 border-dashed border-stone-200 text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-violin-red text-white rounded-full flex items-center justify-center shadow-lg">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{bonus.title}</h3>
              <p className="text-stone-400 line-through text-sm mb-2">Valor original: {bonus.price}</p>
              <p className="text-stone-600">Hoje: <span className="text-green-600 font-bold">GRÁTIS</span></p>
              <p className="mt-4 text-sm text-stone-500 leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Oferta */}
      <Section id="oferta" className="bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-violin-red" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-violin-light font-bold uppercase tracking-widest mb-6">Oferta Especial de Lançamento</h2>
          <div className="bg-white/5 p-6 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-serif mb-4 italic">E-book Mestre das Cordas</h3>
            <p className="text-stone-400 mb-8">O guia completo do zero à primeira música + Todos os Bônus</p>
            
            <div className="mb-8">
              <p className="text-stone-500 line-through text-xl">De R$ 137,90</p>
              <p className="text-5xl md:text-6xl font-extrabold text-white mt-2">
                <span className="text-2xl font-normal align-top mr-1">R$</span>
                37,90
              </p>
              <p className="text-stone-400 mt-2">ou 5x de R$ 10,15*</p>
            </div>

            <a href="#" className="btn-primary w-full py-4 md:py-6 text-lg md:text-2xl mb-6">
              SIM! QUERO SER UM MESTRE
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-500" size={16} />
                Acesso Imediato
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-violin-light" size={16} />
                Oferta por Tempo Limitado
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Garantia */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 p-12 rounded-3xl border-2 border-stone-100">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" 
            alt="7 Days Guarantee" 
            className="w-48 h-48"
            referrerPolicy="no-referrer"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Risco Zero: 7 Dias de Garantia Incondicional</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Eu confio tanto no meu método que te dou uma garantia total. Se em até 7 dias você achar que o e-book não é para você, ou se não gostar da cor da capa, basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto text-violin-red mb-4" size={48} />
            <Headline>Perguntas Frequentes</Headline>
          </div>
          <div className="space-y-2">
            {[
              { q: "Preciso ter um violino para começar?", a: "Não exatamente, você pode aprender a teoria musical enquanto se prepara para comprar o seu violino, mas para praticar as atividades do e-book você precisará do instrumento. No e-book, inclusive, damos dicas de como escolher seu primeiro violino com bom custo-benefício." },
              { q: "O acesso é vitalício?", a: "Sim! Uma vez que você adquire o e-book, ele é seu para sempre. Você pode baixar em quantos dispositivos quiser e consultar quando precisar." },
              { q: "Serve para qualquer idade?", a: "Com certeza. O método é focado em uma linguagem simples e direta, ideal para jovens e adultos que querem aprender de forma prática." },
              { q: "Como recebo o material?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do e-book e acesso aos bônus." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </Section>

  {/* Biografia */}
<Section className="bg-white">
  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* Texto */}
    <div className="text-center lg:text-left">
      <h2 className="text-violin-red font-bold uppercase tracking-widest mb-4">
        Quem será seu guia
      </h2>

      <Headline className="lg:text-left">
        Conheça o Mestre
      </Headline>

      <p className="text-lg text-stone-600 mb-6 leading-relaxed">
        Com mais de 10 anos de experiência no instrumento de cordas e ensino,
        já ajudei alunos a realizarem o sonho de tocar violino mesmo com
        dificuldade extrema de aprendizado.
      </p>

      <p className="text-lg text-stone-600 mb-8 leading-relaxed">
        Minha missão é democratizar o ensino do violino, provando que qualquer
        pessoa, independente da idade ou talento nato, pode aprender se tiver
        o método certo em mãos.
      </p>
    </div>

    {/* Imagem */}
    <div className="relative">
      <div className="absolute -inset-4 bg-violin-red/10 rounded-3xl -rotate-3"></div>

      <img
        src="/images/equipe.jpg"
        alt="Professor de Violino"
        className="relative rounded-3xl shadow-xl z-10"
      />
    </div>

  </div>
</Section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-white font-serif text-2xl mb-8">
            <Music className="text-violin-red" />
            Mestre das Cordas
          </div>
          <p className="mb-8 max-w-2xl mx-auto text-sm">
            Este produto não garante resultados. Todo aprendizado depende da dedicação e prática constante do aluno. Os depoimentos são de alunos reais que seguiram o método.
          </p>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Mestre das Cordas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
