document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    item.querySelector(".faq__pergunta").addEventListener("click", function () {
      faqItems.forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("seletor-linguagem");

  const translations = {
    en: {
      logo: "PulsePlay",
      login: "Log In",
      "select-language": "Select Language",
      title:
        "Subscribe to PulsePlay to enjoy the full service and keep up with your favorite series",
      description:
        "Watch PulsePlay and enjoy the best of streaming with dozens of movies, series, and direct cinema releases. With the annual plan, you can pay in up to 12 installments of R$ 12.50/month interest-free (R$ 150 per year).",
      "annual-plan": "Subscribe to the annual plan for 12x R$ 12.50*",
      "monthly-plan": "Subscribe to the monthly plan",
      "price-notice":
        "*The price may vary if the subscription is made in other plans.",
      "watch-your-way": "Watch your way, whenever and wherever you want.",
      "watch-your-way-description":
        "Enjoy the big screen of the TV or watch on your tablet, laptop, cell phone, and other devices. Plus, our platform lets you watch on different devices and locations simultaneously. Our selection of series and movies keeps growing.",
      "search-find": "Search and find!",
      "search-find-description":
        "Only PulsePlay offers the best content all in one place. Watch your favorite series, anime, and movies in one place. With PulsePlay, you'll have access to all your content in one place.",
      subscribe: "Subscribe to PulsePlay",
      download: "Download your favorite series",
      "download-description":
        "Download our mobile app and watch whenever and wherever you want. So, your favorite movies and series will always be with you, even without the internet, you'll never stop enjoying all our benefits.",
      "download-app": "Download the App",
      "high-movies": "Trending Movies",
      "faq-title": "Frequently Asked Questions",
      "faq1-q": "How can I subscribe to PulsePlay?",
      "faq1-a":
        'To subscribe to PulsePlay, click on the "Subscribe to the annual plan" or "Subscribe to the monthly plan" button on our main page and follow the instructions.',
      "faq2-q": "What is the cancellation policy?",
      "faq2-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq3-q": "What is the cancellation policy?",
      "faq3-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq4-q": "What is the cancellation policy?",
      "faq4-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq5-q": "What is the cancellation policy?",
      "faq5-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq6-q": "What is the cancellation policy?",
      "faq6-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq7-q": "What is the cancellation policy?",
      "faq7-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq8-q": "What is the cancellation policy?",
      "faq8-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq9-q": "What is the cancellation policy?",
      "faq9-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      "faq10-q": "What is the cancellation policy?",
      "faq10-a":
        "You can cancel your subscription at any time through your account settings. For more details, see our cancellation policy.",
      support: "Support",
      contact: "Contact us",
      "cancellation-policy": "Cancellation Policy",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    es: {
      logo: "PulsePlay",
      login: "Iniciar Sesión",
      "select-language": "Seleccionar idioma",
      title:
        "Suscríbete a PulsePlay para disfrutar del servicio completo y seguir tus series favoritas",
      description:
        "Mira PulsePlay y disfruta de lo mejor del streaming con docenas de películas, series y estrenos directos del cine. Con el plan anual, puedes pagar en hasta 12 cuotas de R$ 12,50/mes sin intereses (R$ 150 al año).",
      "annual-plan": "Suscríbete al plan anual por 12x de R$ 12,50*",
      "monthly-plan": "Suscribirse al plan mensual",
      "price-notice":
        "*El precio puede variar si la suscripción se realiza en otros planes.",
      "watch-your-way": "Mira a tu manera, cuando y donde quieras.",
      "watch-your-way-description":
        "Disfruta de la pantalla grande del televisor o mira en tu tableta, laptop, celular y otros dispositivos. Además, nuestra plataforma te permite ver en diferentes dispositivos y ubicaciones simultáneamente. Nuestra selección de series y películas sigue creciendo.",
      "search-find": "¡Buscar y encontrar!",
      "search-find-description":
        "Solo PulsePlay ofrece el mejor contenido en un solo lugar. Mira tus series, animes y películas favoritas en un solo lugar. Con PulsePlay, tendrás acceso a todos tus contenidos en un solo lugar.",
      subscribe: "Suscríbete a PulsePlay",
      download: "Descarga tus series favoritas",
      "download-description":
        "Descarga nuestra aplicación móvil y mira cuando y donde quieras. Así, tus películas y series favoritas siempre estarán contigo, incluso sin internet, nunca dejarás de disfrutar de todos nuestros beneficios.",
      "download-app": "Descargar la App",
      "high-movies": "Películas en Tendencia",
      "faq-title": "Preguntas Frecuentes",
      "faq1-q": "¿Cómo puedo suscribirme a PulsePlay?",
      "faq1-a":
        'Para suscribirte a PulsePlay, haz clic en el botón "Suscribirse al plan anual" o "Suscribirse al plan mensual" en nuestra página principal y sigue las instrucciones.',
      "faq2-q": "¿Cuál es la política de cancelación?",
      "faq2-a":
        "Puedes cancelar tu suscripción en cualquier momento a través de la configuración de tu cuenta. Para más detalles, consulta nuestra política de cancelación.",
      support: "Soporte",
      contact: "Contáctanos",
      "cancellation-policy": "Política de Cancelación",
      terms: "Términos de Uso",
      privacy: "Política de Privacidad",
    },
    pt: {
      logo: "PulsePlay",
      login: "Fazer Login",
      "select-language": "Selecione o idioma",
      title:
        "Assine o PulsePlay para aproveitar o serviço completo e acompanhar suas séries favoritas",
      description:
        "Assista a PulsePlay e aproveite o melhor do streaming com dezenas de filmes, séries e lançamentos direto do cinema. Com o plano anual você parcela em até 12x de R$ 12,50/mês sem juros (R$ 150 por ano).",
      "annual-plan": "Assine o plano anual por 12x de R$ 12,50*",
      "monthly-plan": "Assinar o plano mensal",
      "price-notice":
        "*O preço pode variar caso a assinatura seja feita em outros planos.",
      "watch-your-way": "Assista do seu jeito, quando e onde quiser.",
      "watch-your-way-description":
        "Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Além disso, nossa plataforma permite que você assista em diferentes aparelhos e locais ao mesmo tempo. Nossa seleção de séries e filmes não para de crescer.",
      "search-find": "Procurou, achou!",
      "search-find-description":
        "Só o PulsePlay oferece o melhor conteúdo em um só lugar. Assista suas séries, animes e filmes preferidos em um só lugar. Com a PulsePlay, você terá acesso a todos os seus conteúdos em um só lugar.",
      subscribe: "Assine a PulsePlay",
      download: "Baixe suas séries favoritas",
      "download-description":
        "Faça o download do nosso app mobile e assista quando e onde quiser. Assim, seus filmes e séries favoritos vão estar sempre com você, até mesmo sem internet você nunca vai deixar de aproveitar todos nossos benefícios.",
      "download-app": "Baixe o App",
      "high-movies": "Filmes em alta",
      "faq-title": "Perguntas Frequentes",
      "faq1-q": "Como posso assinar o PulsePlay?",
      "faq1-a":
        'Para assinar o PulsePlay, clique no botão "Assine o plano anual" ou "Assinar o plano mensal" em nossa página principal e siga as instruções.',
      "faq2-q": "Qual é a política de cancelamento?",
      "faq2-a":
        "Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. Para mais detalhes, consulte nossa política de cancelamento.",
      support: "Suporte",
      contact: "Entre em contato",
      "cancellation-policy": "Política de Cancelamento",
      terms: "Termos de Uso",
      privacy: "Política de Privacidade",
    },
  };

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    applyTranslations(selectedLanguage);
  });

  const applyTranslations = (language) => {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const translationKey = element.getAttribute("data-lang");
      element.textContent = translations[language][translationKey];
    });
  };
});
