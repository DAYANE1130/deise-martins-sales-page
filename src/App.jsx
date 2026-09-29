import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Button } from './components/ui/Button.jsx'
import { SectionHeading } from './components/ui/SectionHeading.jsx'
import { ServiceCard } from './components/content/ServiceCard.jsx'
import { ServiceDetail } from './components/content/ServiceDetail.jsx'
import { FAQItem } from './components/content/FAQItem.jsx'
import { links, whatsappLink } from './config/links.js'
import { services, recalibrationDetails, dandelionDetails, tarotDetails } from './data/services.js'
import { faqs } from './data/faqs.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Missão, propósito e prosperidade</p>
          <h1>Transforme seus bloqueios em clareza para viver o seu caminho.</h1>
          <p className="hero__lead">Com acolhimento e profundidade, Deise Martins auxilia você a compreender os sinais da espiritualidade, alinhar-se ao seu propósito e transformar a dor em força.</p>
          <p className="hero__highlight">Aqui você encontra caminhos diferentes — porque nem toda dor vem do mesmo lugar.</p>
          <p className="hero__identity">Mentora espiritual · Terapeuta multidimensional · Taróloga</p>
          <div className="button-group button-group--hero">
            <Button href={links.atendimentos}>Quero transformar minha energia</Button>
            <a className="text-link" href={links.youtube} target="_blank" rel="noreferrer">Conheça o canal no YouTube <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-services-art">
          <img src="/images/hero-02.png" alt="Representação dos caminhos de atendimento: Recalibração Energética, Terapia Dente de Leão e Leitura de Tarot." />
          <a className="hero-services-art__link hero-services-art__link--recalibration" href="#service-recalibracao">Recalibração Energética</a>
          <a className="hero-services-art__link hero-services-art__link--dandelion" href="#service-dente-de-leao">Terapia Dente de Leão</a>
          <a className="hero-services-art__link hero-services-art__link--tarot" href="#service-tarot">Leitura de Tarot</a>
        </div>
      </div>
    </section>
  )
}

function YouTubePreview() {
  return (
    <section className="video-section" id="youtube">
      <div className="container">
        <div className="video-section__content">
          <p className="eyebrow">Conteúdos para o seu despertar</p>
          <h2>Conheça Deise também pelo YouTube.</h2>
          <p>Assista a esta prévia e encontre reflexões para acompanhar sua jornada com mais clareza, presença e propósito.</p>
          <a className="text-link" href={links.youtube} target="_blank" rel="noreferrer">Visitar o canal e inscrever-se <span aria-hidden="true">↗</span></a>
        </div>
        <div className="video-section__grid">
          <div className="video-section__embed">
            <iframe
              src="https://www.youtube.com/embed/p9nMHYdfpoA?si=S5UOmO123PF_gDqX"
              title="Prévia de vídeo do canal de Deise Martins no YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video-section__embed">
            <iframe
              src="https://www.youtube.com/embed/3ue61N8o0-w?si=0-Sckx4E13jg-9sb"
              title="Segundo vídeo do canal de Deise Martins no YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Identification() {
  const moments = ['Você sente um chamado maior, mas não sabe como sair do ponto em que está.', 'Relacionamentos parecem não avançar e padrões continuam se repetindo.', 'Você busca prosperidade e propósito, mas percebe bloqueios emocionais, ancestrais ou espirituais.']
  return <section className="section section--soft"><div className="container"><SectionHeading eyebrow="Reconheça o seu momento" title="Talvez você esteja vivendo um destes momentos." align="center" /><div className="moment-grid">{moments.map((moment, index) => <article className="moment-card" key={moment}><span>0{index + 1}</span><p>{moment}</p></article>)}</div></div></section>
}

function Products() {
  return <section className="section" id="atendimentos"><div className="container"><SectionHeading eyebrow="Atendimentos" title="Cada jornada pede um caminho diferente." description="Escolha o atendimento que faz sentido para o seu momento — ou fale com Deise para receber orientação." align="center" /><div className="service-grid">{services.map((service) => <ServiceCard service={service} key={service.id} />)}</div></div></section>
}

function ChoiceGuide() {
  const choices = [['Quero trabalhar um vínculo específico', 'Recalibração Energética', '#recalibracao'], ['Quero olhar para bloqueios e padrões pessoais', 'Terapia Dente de Leão', '#dente-de-leao'], ['Preciso de clareza para uma situação agora', 'Leitura de Tarot', '#tarot']]
  return <section className="section choice-section"><div className="container"><SectionHeading eyebrow="Uma escolha mais simples" title="Qual atendimento pode ajudar você agora?" align="center" /><div className="choice-list">{choices.map(([need, service, href]) => <a href={href} className="choice-item" key={service}><span>{need}</span><strong>{service} <b aria-hidden="true">→</b></strong></a>)}</div><div className="centered-action"><Button href={whatsappLink('Olá! Preciso de ajuda para escolher o atendimento mais adequado para mim.')} variant="secondary" target="_blank" rel="noreferrer">Quero ajuda para escolher</Button></div></div></section>
}

function About() {
  return <section className="section about-section" id="sobre"><div className="container about-section__grid"><div className="about-photo"><img src="/images/deise-martins.jpeg" alt="Deise Martins" /></div><div><SectionHeading eyebrow="Quem é Deise Martins" title="Um espaço para compreender o seu chamado com profundidade." /><p>Deise Martins é mentora espiritual, formada em Letras pela PUC, terapeuta multidimensional, taróloga e especializada no caminho das Chamas Gêmeas.</p><p>Seu trabalho acolhe mulheres que sentem um chamado maior — de missão, propósito e prosperidade — mas ainda carregam bloqueios que travam seus caminhos.</p><p>Por meio de conteúdos e atendimentos, ela auxilia você a compreender os sinais da alma, alinhar-se à sua missão de vida e transformar sua dor em força.</p><a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">Acompanhe Deise no Instagram <span aria-hidden="true">↗</span></a></div></div></section>
}

function VipGroup() {
  const benefits = ['Rituais gratuitos dos portais energéticos', 'Palestras e reflexões práticas sobre a dinâmica das Chamas Gêmeas', 'Direcionamento para sair do padrão de espera', 'Clareza sobre bloqueios emocionais, mentais e energéticos']
  return <section className="vip-section" id="grupo-vip"><div className="container vip-section__grid"><div><p className="eyebrow eyebrow--light">Grupo VIP · Despertar da Missão 2026</p><h2>Um espaço para se reposicionar e sair da repetição.</h2><p>Para mulheres em jornada de despertar que sentem que não dá mais para viver no “quase”. Aqui, o foco é assumir o próprio poder pessoal.</p><Button href={links.vipGroup} variant="light" target="_blank" rel="noreferrer">Entrar no Grupo</Button></div><ul className="vip-benefits">{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div></section>
}

function FAQ() {
  return <section className="section" id="duvidas"><div className="container faq-layout"><SectionHeading eyebrow="Perguntas frequentes" title="Tudo o que você precisa saber antes de agendar." /> <div className="faq-list">{faqs.map((faq) => <FAQItem {...faq} key={faq.question} />)}</div></div></section>
}

function FinalCTA() {
  return <section className="final-cta"><div className="container"><p className="eyebrow eyebrow--light">Seu próximo passo</p><h2>Se você sentiu o chamado, talvez seja hora de olhar mais fundo.</h2><p>Escolha um atendimento ou converse com Deise para encontrar o caminho mais adequado ao seu momento.</p><Button href={whatsappLink('Olá! Gostaria de agendar um atendimento e receber mais informações.')} variant="light" target="_blank" rel="noreferrer">Agendar atendimento</Button></div></section>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const toggle = () => setVisible(window.scrollY > 500); window.addEventListener('scroll', toggle, { passive: true }); toggle(); return () => window.removeEventListener('scroll', toggle) }, [])
  if (!visible) return null
  return <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">↑</button>
}

export default function App() {
  return <>
  <Header />
  <main>
    <Hero />
    <YouTubePreview />
    <Identification />
    <Products />
    <ServiceDetail service={recalibrationDetails} />
    <ServiceDetail service={dandelionDetails} alternate />
    <ServiceDetail service={tarotDetails} /><ChoiceGuide />
    <About />
    <VipGroup />
    <FAQ />
    <FinalCTA />
    </main>
    <Footer />
    <BackToTop />
    </>
}
