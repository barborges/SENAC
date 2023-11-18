const placesDatabase = [
    { name: "Recife Antigo", image: "recife_antigo.jpg", category: 'pontos_turisticos', summary: "Recife, mais conhecido como Recife Antigo, é um bairro da cidade do Recife, Pernambuco, Brasil que corresponde à parte leste do seu Centro Histórico. Em seu ponto mais oriental, no Porto do Recife, situa-se a Praça Rio Branco – o Marco Zero, margeada pelo encontro dos rios Capibaribe e Beberibe com o Oceano Atlântico." },
    { name: "Olinda", image: "olinda.jpg", category: 'pontos_turisticos', summary: "Olinda é uma cidade colonial na costa nordeste do Brasil, perto da cidade do Recife. Fundada em 1535 pelos portugueses, foi construída em encostas íngremes e distingue-se pela arquitetura do século XVIII, com igrejas barrocas, conventos, mosteiros e casas de cores vivas. Originalmente um centro da indústria da cana-de-açúcar, é agora conhecida como uma colónia de artistas, com diversas galerias, oficinas e museus" },
    { name: "Porto de Galinhas", image: "porto_de_galinhas.jpg", category: 'pontos_turisticos', summary: "Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil. A região possui piscinas de águas claras e mornas formadas entre corais, além de estuários, mangues, areia branca e coqueirais" },
    { name: "Fernando de Noronha", image: "fernando_de_noronha.jpg", category: 'pontos_turisticos', summary: " Arquipélago de Fernando de Noronha pertencente ao estado brasileiro de Pernambuco e é formado por vinte e uma ilhas, numa extensão de 26 km²" },
    { name: "Caruaru", image: "caruaru.jpg", category: 'pontos_turisticos', summary: "Estes são alguns dos pontos importantes de Caruaru: 1. Feira de Artesanato de Caruaru · 2. Museu do Barro e Luiz Gonzaga · 3. Pedra do Cachorro · 4. Museu do Cordel – Olegário Fernandes" },
    { name: "Azulejo", image: "restaurante1.jpg", category: 'restaurantes', summary: "A gastronomia de Pernambuco com opção de sequência, destaque ao camarão no coco, em ampla casa branca e azul."},
    { name: "Pernambuco Dream Bar ", image: "restaurante2.jpg", category: 'restaurantes', summary: "Somos o Dream Bar, um bar e restaurante localizado na Lapa, Desde 2017. Um Equipe formada por família, venha experimentar nossas deliciosas á parmegianas" },
    { name: "PE Bar e Restaurante", image: "restaurante3.jpg", category: 'restaurantes', summary: "O bar foi aberto em 1970 e desde então mantém as tradicionais receitas que vão desde saborosos petiscos até pratos mais elaborados" },
    { name: "Festa de São João ", image: "evento1.jpg", category: 'eventos', summary: "A famosa festa de Junina, incrivelmente procurada por turistas aqui em PE acontecerá agora no dia 24 de junho para celebrar o verão e a renovação da natureza."},
    { name: "Miss Pernambuco", image: "evento2.jpg", category: 'eventos', summary: "Miss Pernambuco (ou Miss Pernambuco Universo) é um concurso de beleza feminino de nível estadual que leva a melhor candidata pernambucana ao título de Miss Brasil, único caminho para a coroa de Miss Universo." },
    { name: "Virada Cultural", image: "evento3.jpg", category: 'eventos', summary: "Virada Cultural é um evento anual promovido desde 2005 , por meio da Secretaria Municipal de Cultura tendo o apoio de vários parceiros artísticos e institucionais.Com o intuito de promover na cidade 24 horas ininterruptas de eventos culturais, como espetáculos musicais, peças de teatro, exposições de arte e história, entre outros." }
    // Adicione mais locais com suas categorias aqui...
  ];
  
  function displayPlacesByCategory(category) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    const places = placesDatabase.filter(place => place.category === category);
  
    if (places.length === 0) {
      resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
    } else {
      const ul = document.createElement('ul');
      places.forEach(place => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `images/${place.image}`;
        img.alt = place.name;
        li.appendChild(img);
        li.textContent = place.name;
        ul.appendChild(li);
      });
      resultsDiv.appendChild(ul);
    }
  
    // Ocultar os locais em destaque ao exibir os resultados da categoria selecionada
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'none';
  }
  
  function displayFeaturedPlaces() {
    const featuredPlacesDiv = document.getElementById('featuredPlaces');
    const pointsOfInterest = placesDatabase.filter(place => {
      return place.category === 'pontos_turisticos';
    });
  
    pointsOfInterest.forEach(place => {
      const placeDiv = document.createElement('div');
      placeDiv.classList.add('place-item');
  
      const img = document.createElement('img');
      img.src = `images/${place.image}`;
      img.alt = place.name;
      placeDiv.appendChild(img);
  
      const placeName = document.createElement('p');
      placeName.textContent = place.name;
      placeDiv.appendChild(placeName);
  
      // Adicionar evento de clique para exibir o resumo
      placeDiv.addEventListener('click', () => {
        displaySummary(place);
      });
  
      featuredPlacesDiv.appendChild(placeDiv);
    });
  }
  
  function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
  
    // Simulação de pesquisa em todos os locais do banco de dados
    const filteredResults = placesDatabase.filter(place =>
      place.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 20); // Limitar a 20 resultados
  
    displayResults(filteredResults);
  
    // Ocultar os locais em destaque
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'none';
  }
  
  function displayResults(results) {
    const resultsDiv = document.querySelector('.results-container');
    resultsDiv.innerHTML = '';
  
    if (results.length === 0) {
      resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
    } else {
      results.forEach(result => {
        const div = document.createElement('div');
  
        const img = document.createElement('img');
        img.src = `images/${result.image}`;
        img.alt = result.name;
  
        // Adicionando um clique na imagem para exibir o resumo
        img.addEventListener('click', () => {
          displaySummary(result); // Função para exibir o resumo do local
        });
  
        div.appendChild(img);
  
        const placeName = document.createElement('p');
        placeName.innerHTML = `<strong>${result.name}</strong>`;
        div.appendChild(placeName);
  
        resultsDiv.appendChild(div);
      });
    }
  }
  
  function displaySummary(place) {
    const summaryDiv = document.createElement('div');
    summaryDiv.classList.add('summary');
  
    const img = document.createElement('img');
    img.src = `images/${place.image}`;
    img.alt = place.name;
    img.classList.add('summary-img');
    summaryDiv.appendChild(img);
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('summary-details');
  
    const name = document.createElement('h3');
    name.textContent = place.name;
    detailsDiv.appendChild(name);
  
    const description = document.createElement('p');
    description.textContent = place.summary; // Mostra o resumo específico da localidade
    detailsDiv.appendChild(description);
  
    summaryDiv.appendChild(detailsDiv);
  
    // Limpa a exibição anterior, se houver
    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.innerHTML = '';
  
    // Mostra o resumo na área de resultados
    resultsContainer.appendChild(summaryDiv);
  }
  
  function searchPlaces(type) {
    let query = '';
  
    if (type === 'restaurantes' || type === 'eventos' || type === 'pontos_turisticos') {
      const places = placesDatabase.filter(place => place.category === type);
      displayResults(places);
    } else {
      // Caso seja necessário implementar lógica adicional para novas categorias
    }
  
    // Ocultar os locais em destaque ao realizar a pesquisa
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'none';
  }
  
  function clearResults() {
    const resultsDiv = document.querySelector('.results-container');
    resultsDiv.innerHTML = '';
  
    // Exibir novamente os locais em destaque
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'block';
  }
  
  // Exibe os locais em destaque ao carregar a página
  window.onload = () => {
    displayFeaturedPlaces();
  };