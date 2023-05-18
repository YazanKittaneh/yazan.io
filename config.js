"use strict";

const MAX = {
  deleteCookiesForDomains: [".yazan.io"], // necessary to be able to keep GDPR requirements to a minimum
  productionHostname: "www.yazan.io",

  header: {
    logo: {
      img: "./yk.png",
      href: "index.html",
    },
    title: {
      content: "{Y}azan. {K}ittaneh", // pick TWO letters that should be rotated on hover via {x}
      href: "index.html",
    },
    menu: [
      {
        text: "Currently Building",
        href: "consulting.html",
      },
      {
        text: "AI Tools",
        href: "",
      },
      {
        text: "Interesting Stuff",
        href: "",
      },
    ],
  },
  content: {
    work: [
      {
        when: ["01/21", "present"],
        where: "Loggia Inc.",
        what: ["Founder / Software Engineer"],
        link: "http://www.loggiainc.com/",
      },
      {
        when: ["01/2019", "12/21"],
        where: "Subletinn",
        what: ["Software Engineer (Frontend)"],
        link: "http://www.subletinn.com/",
      },
      {
        when: ["10/17", "12/18"],
        where: "Outcome Health",
        what: ["Software(Android) Engineer"],
        link: "https://www.justice.gov/opa/pr/former-executives-outcome-health-convicted-1b-corporate-fraud-scheme/",
      },
    ],
    research: {
      highlightAuthor: "M. Speicher",
      publications: [
        {
          title:
            "Designers, the Stage Is Yours! Medium-Fidelity Prototyping of Augmented & Virtual Reality Interfaces with 360theater",
          authors: ["M. Speicher", "K. Lewis", "M. Nebeling"],
          link: "https://dl.acm.org/doi/10.1145/3461727",
        },
        {
          title: "MRAT: The Mixed Reality Analytics Toolkit",
          authors: [
            "M. Nebeling",
            "M. Speicher",
            "X. Wang",
            "S. Rajaram",
            "B.D. Hall",
            "Z. Xie",
            "A.R.E. Raistrick",
            "M. Aebersold",
            "E.G. Happ",
            "J. Wang",
            "Y. Sun",
            "L. Zhang",
            "L. Ramsier",
            "R. Kulkarni",
          ],
          link: "https://www.mi2lab.com/research/mrat/",
          award: "🏆 Best Paper Award",
        },
        {
          title: "What is Mixed Reality?",
          authors: ["M. Speicher", "B.D. Hall", "M. Nebeling"],
          link: "https://2008.maxspeicher.com/2019/12/27/chi-2019-what-is-mixed-reality/",
          award: "🏅 Best Paper Honorable Mention",
        },
        {
          title:
            "XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development",
          authors: [
            "M. Speicher",
            "B.D. Hall",
            "A. Yu",
            "B. Zhang",
            "H. Zhang",
            "J. Nebeling",
            "M. Nebeling",
          ],
          link: "https://dl.acm.org/doi/abs/10.1145/3229089",
          award: "🏆 Best Paper Award",
        },
        {
          title:
            "GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes",
          authors: ["M. Speicher", "M. Nebeling"],
          link: "https://dl.acm.org/doi/abs/10.1145/3173574.3173681",
        },
        {
          title:
            "Search Interaction Optimization: A Human-Centered Design Approach",
          authors: ["M. Speicher"],
          link: "https://2008.maxspeicher.com/2015/10/29/the-search-interaction-optimization-toolkit-the-essence-of-my-phd-thesis/",
        },
        {
          title: "§Inuit§: The Interface Usability Instrument",
          authors: ["M. Speicher", "A. Both", "M. Gaedke"],
          link: "https://2008.maxspeicher.com/2015/10/10/inuit-the-interface-usability-instrument/",
        },
        {
          title:
            "Ensuring Web Interface Quality through Usability-Based Split Testing",
          authors: ["M. Speicher", "A. Both", "M. Gaedke"],
          link: "https://2008.maxspeicher.com/2014/06/17/usability-based-split-testing-or-how-to-infer-web-interface-usability-from-user-interactions/",
        },
      ],
    },
    ai: [
      {
        title:
          "AI Social Bio | Create an Instagram Bio That Attracts Followers",
        publication: "AI Social Bio",
        link: "https://aisocialbio.com/",
      },
      {
        title: "AI-powered templates to generate content faster | Conto.ai",
        publication: "Conto.ai",
        link: "https://www.conto.ai/templates",
      },
      {
        title: "Longshot AI: Best AI Writing Assistant for Content Marketers",
        publication: "Longshot AI",
        link: "https://www.longshot.ai/",
      },
      {
        title: "Synthesia | AI Video Generation Platform",
        publication: "Synthesia",
        link: "https://www.synthesia.io/",
      },
      {
        title: "AI Generated Stock Photos, Videos and Vectors | Stockimg.ai",
        publication: "Stockimg.ai",
        link: "https://stockimg.ai/",
      },
      {
        title: "Mokker | AI Generated Music",
        publication: "Mokker",
        link: "https://mokker.ai/",
      },
      {
        title:
          "MakeLogo.ai - Free Online Logo Maker | Create Your Own Logo Design",
        publication: "MakeLogo.ai",
        link: "https://makelogo.ai/",
      },
      {
        title: "LogoAI | Free Logo Maker | AI Logo Design Tool",
        publication: "LogoAI",
        link: "https://www.logoai.com/",
      },
      {
        title:
          "Naming Magic | Creative Business Names with AI | Naming Your Startup",
        publication: "Naming Magic",
        link: "https://www.namingmagic.com/",
      },
      {
        title: "Validatorai | AI-powered SEO & CRO Optimization Platform",
        publication: "Validatorai",
        link: "https://www.validatorai.com/",
      },
      {
        title: "Runway ML | Democratizing AI",
        publication: "Runway ML",
        link: "https://runwayml.com/",
      },
      {
        title: "Looria | The AI Language Model Platform",
        publication: "Looria",
        link: "https://www.looria.com/bot",
        new: true,
      },
      {
        title:
          "Language Model Query Language (LMQL) | Query OpenAI's GPT Models",
        publication: "Language Model Query Language (LMQL)",
        link: "https://lmql.ai/",
      },
      {
        title: "CSS GUI - AI generated CSS code based on your design",
        publication: "Components AI",
        link: "https://components.ai/css-gui",
      },
      {
        title: "Open Assistant - Open Source Conversational AI",
        publication: "Open Assistant",
        link: "https://open-assistant.io/",
      },
      {
        title: "The Neural Network Zoo - The Asimov Institute",
        publication: "The Asimov Institute",
        link: "https://greshake.github.io/",
      },
      {
        title: "Twitter - Thread by @random_walker",
        publication: "Twitter",
        link: "https://twitter.com/random_walker/status/1636924977214529536",
      },
      {
        title:
          "GitHub - openai/openai-cookbook: A cookbook full of examples to get started with deep learning and OpenAI's GPT-3 in particular",
        publication: "GitHub",
        link: "https://github.com/openai/openai-cookbook",
      },
      {
        title: "Flair – State-of-the-art Natural Language Processing",
        publication: "Flair",
        link: "https://flair.ai/",
      },
    ],
    openSource: [
      {
        title: "This Website Template",
        link: "https://github.com/maxspeicher/maxspeicher.github.io",
      },
      {
        title: "MaxSpeicher.com",
        multipleLinks: {
          v1: "https://github.com/maxspeicher/v1",
          v2: "https://github.com/maxspeicher/v2",
          v3: "https://github.com/maxspeicher/v3",
        },
      },
    ],
  },
  footer: {},
  privacyPolicy: {
    name: "Yazan Kittaneh",
    zipAndCity: "Chicago",
    email:
      "__yazan@loggiainc.com (underscores have been added for spam protection)",
  },
};
