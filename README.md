# Deise Martins — Sales Landing Page

Landing page de vendas desenvolvida para apresentar os serviços de Deise Martins, facilitar a escolha do atendimento e direcionar o usuário para o agendamento.

O projeto utiliza React e Vite, com páginas individuais para cada serviço e integração com Calendly para agendamento.

## Sobre o projeto

A aplicação foi desenvolvida para apresentar os serviços de forma clara e conduzir o usuário desde o primeiro contato com a proposta até o agendamento.

A estrutura combina:

* apresentação da profissional;
* conteúdos em vídeo;
* identificação das necessidades do público;
* apresentação dos serviços;
* páginas individuais para cada atendimento;
* perguntas frequentes;
* chamadas para ação;
* agendamento integrado ao Calendly.

## Fluxo principal

```text
Landing Page
     ↓
Escolha do atendimento
     ↓
Página do serviço
     ↓
Detalhes do atendimento
     ↓
Calendly
     ↓
Agendamento
```

Atualmente, os serviços disponíveis nesse fluxo são:

* Recalibração Energética
* Terapia Dente de Leão

## Funcionalidades

* Landing page responsiva
* Navegação entre seções
* Páginas individuais para os serviços
* Cards de serviços com direcionamento para suas respectivas páginas
* FAQ com conteúdo expansível
* Integração com YouTube
* Links para redes e canais externos
* Integração com Calendly
* Identificação do serviço selecionado no agendamento através de pergunta personalizada do Calendly
* Navegação com React Router

## Tecnologias

* React 19
* Vite
* React Router
* JavaScript
* CSS
* Calendly

## Arquitetura

A aplicação utiliza componentes reutilizáveis e separa a apresentação dos dados e das páginas.

```text
src/
├── components/
│   ├── content/
│   │   ├── BookingSection.jsx
│   │   ├── FAQItem.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ServiceDetail.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   └── ui/
│       ├── Button.jsx
│       └── SectionHeading.jsx
│
├── config/
│   └── links.js
│
├── data/
│   ├── faqs.js
│   └── services.js
│
├── pages/
│   ├── Home.jsx
│   ├── RecalibrationPage.jsx
│   └── DandelionPage.jsx
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

### Componentização

Os componentes principais possuem responsabilidades separadas:

* `ServiceCard` — apresenta um serviço na landing page.
* `ServiceDetail` — apresenta os detalhes de um serviço.
* `BookingSection` — responsável pelo agendamento via Calendly.
* `FAQItem` — controla cada pergunta da seção de FAQ.
* `Button` — componente reutilizável para ações e links.
* `SectionHeading` — padroniza títulos de seção.

As páginas de serviço apenas compõem os componentes necessários:

```jsx
<ServiceDetail service={recalibrationDetails} />
<BookingSection service={recalibrationDetails} />
```

Isso permite reutilizar os componentes sem duplicar a implementação.

## Rotas

| Rota                      | Página                  |
| ------------------------- | ----------------------- |
| `/`                       | Landing page            |
| `/servicos/recalibracao`  | Recalibração Energética |
| `/servicos/dente-de-leao` | Terapia Dente de Leão   |

## Integração com Calendly

O projeto utiliza o Calendly Inline Widget para realizar os agendamentos diretamente na página do serviço.

O evento utilizado é único, mas o serviço escolhido é enviado através de uma resposta personalizada do formulário do Calendly.

```text
Recalibração Energética → customAnswers.a1
Dente de Leão          → customAnswers.a1
```

Dessa forma, o contexto do serviço é mantido mesmo utilizando um único evento do Calendly.

A integração também utiliza configurações para ocultar detalhes do tipo de evento e o banner de GDPR.

## Como executar

### Pré-requisitos

* Node.js
* npm

### Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

### Desenvolvimento

Execute:

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite.

### Build

Para gerar a versão de produção:

```bash
npm run build
```

### Preview

Para visualizar localmente a versão gerada pelo build:

```bash
npm run preview
```

## Estrutura do projeto

```text
deise-martins-landing-page/
├── public/
├── src/
├── prompts/
├── context/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

A pasta `context/` contém materiais utilizados durante o desenvolvimento e não faz parte da aplicação executada pelo usuário.

## Escopo atual

O projeto atualmente contempla a apresentação dos serviços e o agendamento.

Pagamento online não faz parte desta versão.

A estrutura foi organizada para permitir a inclusão futura de funcionalidades independentes, como uma etapa de pagamento, sem acoplar essa funcionalidade ao componente de agendamento.

## Status

**V1 — Em desenvolvimento**
