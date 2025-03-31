// Dados dos Projetos

const dataProjects = [
  {
    title: "OpiniON",
    date: "24 de Fevereiro de 2025",
    description: `O OpiniON é um projeto desenvolvido para coletar, analisar e visualizar comentários de produtos disponíveis online :D <br><br>

        O OpiniON realiza as seguintes etapas: <br><br>
        
        • Coleta de Comentários: Automatiza a extração de avaliações de produtos em plataformas online, no caso foi usado o site da Amazon.; <br>
        • Análise de Sentimentos: Utiliza uma API do Gemini para classificar os comentários em três categorias: Positivo, Neutro ou Negativo; <br>
        • Armazenamento de Dados: Salva os comentários e seus respectivos sentimentos em um banco de dados SQLite; <br>
        • Visualização Gráfica: Gera um gráfico de barras para representar a distribuiçãodos sentimentos dos comentários coletados; <br>`,
    videoSrc: "https://streamable.com/4gqkqs",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7299974437158744064/",
    repository: "https://github.com/GabrielSantos777/OpiniON",
  },
  {
    title: "OpiniON",
    date: "24 de Fevereiro de 2025",
    description: `O OpiniON é um projeto desenvolvido para coletar, analisar e visualizar comentários de produtos disponíveis online :D <br><br>

        O OpiniON realiza as seguintes etapas: <br><br>
        
        • Coleta de Comentários: Automatiza a extração de avaliações de produtos em plataformas online, no caso foi usado o site da Amazon.; <br>
        • Análise de Sentimentos: Utiliza uma API do Gemini para classificar os comentários em três categorias: Positivo, Neutro ou Negativo; <br>
        • Armazenamento de Dados: Salva os comentários e seus respectivos sentimentos em um banco de dados SQLite; <br>
        • Visualização Gráfica: Gera um gráfico de barras para representar a distribuiçãodos sentimentos dos comentários coletados; <br>`,
    videoSrc: "https://streamable.com/4gqkqs",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7299974437158744064/",
    repository: "https://github.com/GabrielSantos777/OpiniON",
  },
  {
    title: "SkySync",
    date: "04 de Junho de 2024",
    description: `SkySync é uma aplicação web que exibe a condição climática de todas as cidades, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, velocidade do vento e o nível de umidade. :D <br><br>

        O SkySync realiza as seguintes funções: <br><br>
        
        • Coleta da Temperatura atual; <br>
        • Coleta da Velocidade do vento; <br>
        • Nível de umidade; <br>`,
    videoSrc: "https://streamable.com/5wcq63",
    linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:7299974437158744064/",
    repository: "https://github.com/GabrielSantos777/SkySync",
  },
];

// Open Modal

const openModal = () => {
  const closeModal = document.querySelector(".modal .ri-close-line");
  const modal = document.querySelector(".modal");
  const box = document.querySelectorAll(".cards-projects .box");
  const modalTitle = modal.querySelector(".title h2");
  const modalDescription = modal.querySelector(".info p");
  const modalDate = modal.querySelector("span");
  const modalLinkRepository = modal.querySelector(".links a.link-repository");
  const modalLinkLinkedin = modal.querySelector(".links a.link-linkedin");
  const iframe = modal.querySelector(".video iframe");

  box.forEach((item, index) => {
    const addData = () => {
      if (index != 5) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        document.body.classList.add("transparent");
      }

      modalTitle.innerHTML = dataProjects[index].title;
      modalDescription.innerHTML = dataProjects[index].description;
      modalDate.innerHTML = dataProjects[index].date;
      modalLinkRepository.setAttribute("href", dataProjects[index].repository);
      modalLinkLinkedin.setAttribute("href", dataProjects[index].linkedin);
      iframe.setAttribute(
        "src",
        dataProjects[index].videoSrc + "?autoplay=1&amp;loop=0"
      );
    };

    item.addEventListener("click", addData);
  });

  const closingModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
    document.body.classList.remove("transparent");
    iframe.setAttribute("src", "");
  };

  closeModal.addEventListener("click", closingModal);

  document.addEventListener("keydown", (event) =>
    event.key === "Escape" ? closingModal() : ""
  );
};

openModal();
