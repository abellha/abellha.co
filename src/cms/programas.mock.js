const cmsData = {
  meta: {
    title: "Conheça nossa metodologia e nossos programas",
    description:
      "Podemos ajudar o seu negócio de forma prática através dos nossos programas: Startups, inCompany, Impacto Social e Investimento. Saiba mais!",
    permalink: "programas",
  },
  hero: {
    title: "Conheça nossos programas e saiba como fazemos na prática!",
  },
  content: {
    sections: [
      {
        type: "sideBySide",
        infoOrder: "last",
        infoOrderDesktop: "last",
        model: "model-4",
        featureImage: {
          src: "sidebyside_startups.jpg",
          alt: "imagem referente ao programa de aceleração de Startups.",
        },
        title: "Startups",
        description:
          "A abeLLha acelera um grupo de startups selecionadas via nosso processo seletivo anual e via contratações de consultoria pontuais. Nosso trabalho é focado em acompanhar e direcionar a estratégia, indicadores e execução visando o ganho de escala ou captação de investimento.",
        blockquote:
          "O nosso programa de aceleração é aberto via edital anual. Porém se você é uma empresa que busca desenvolvimento agora, é só entrar em contato.",
        button: { text: "Conheça nossas startups", url: "/portfolio" },
        id: "startups",
      },
      {
        type: "sideBySide",
        infoOrder: "last",
        infoOrderDesktop: "first",
        model: "model-2",
        featureImage: {
          src: "sidebyside_incompany.jpg",
          alt: "imagem referente ao programa inCompany.",
        },
        title: "inCompany",
        description:
          "O programa inCompany da abeLLha foi criado para corporações que desejam se relacionar com startups para inovarem, investirem ou explorarem produtos ou mercados complementares a sua área de atuação. A abeLLha seleciona, acompanha e gera relatórios periódicos facilitando a interação entre corporação e startup.",
        button: { text: "Entre em contato com a gente", url: "#contato" },
        id: "incomponany",
      },
      {
        type: "sideBySide",
        infoOrder: "last",
        infoOrderDesktop: "last",
        model: "model-7",
        featureImage: {
          src: "sidebyside_impacto-social.jpg",
          alt:
            "imagem referente ao programa de gerenciamento de fomento ao empreendedorismo em favelas.",
        },
        title: "Impacto Social",
        description:
          "Criamos e gerenciamos programas de fomento ao empreendedorismo em favelas. Nosso método foi ajustado e validado para a realidade empreendedora das comunidades, onde o foco é no desenvolvimento de negócios locais e no desenvolvimento pessoal do empreendedor. Entendendo as peculiaridades do território, customizamos o projeto e definimos objetivos claros para direcionar o trabalho, gerando impacto relevante na vida dos empreendedores com grande foco na geração de renda.",
        button: { text: "Entre em contato com a gente", url: "#contato" },
        id: "impacto-social",
      },
    ],
  },
}

export default cmsData
