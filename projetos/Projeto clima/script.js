const apiKey = '41e5228dbd27c002df3ebab92f0c27d9';
let distritosCache = [];


function carregarDistritos() {
    if (distritosCache.length === 0) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome`)
            .then(response => response.json())
            .then(distritos => {
                distritosCache = distritos;
            })
            .catch(error => alert('Erro ao carregar distritos!'));
    }
}

function mostrarSugestoes() {
    const cidade = document.getElementById('cidade').value.toLowerCase();
    const sugestoesDiv = document.getElementById('sugestoes');
    sugestoesDiv.innerHTML = '';

    if (cidade.length > 2) {
        const cidadesFiltradas = distritosCache.filter(distrito =>
            distrito.nome.toLowerCase().includes(cidade)
        );

        cidadesFiltradas.forEach(distrito => {
            const item = document.createElement('li');
            item.textContent = distrito.nome;
            item.onclick = () => {
                document.getElementById('cidade').value = distrito.nome;
                sugestoesDiv.innerHTML = '';
            };
            sugestoesDiv.appendChild(item);
        });
    }
}


function buscarClima() {
    const cidade = document.getElementById('cidade').value;
    if (!cidade) {
        alert('Digite uma cidade!');
        return;
    }


    // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=São Paulo&appid=${apiKey}&units=metric&lang=pt`)
        .then(response => response.json())
        .then(data => {
            const climaAtual = data.list[0];  // Primeira previsão, clima atual
            const resultadoAtual = document.getElementById('climaAtual');
            resultadoAtual.innerHTML = `
                <h2>Clima Atual em ${data.city.name}</h2>
                <img class="icon" src="https://openweathermap.org/img/wn/${climaAtual.weather[0].icon}.png" alt="${climaAtual.weather[0].description}" />
                <p class="temp">${climaAtual.main.temp}°C</p>
                <p class="condicao">${climaAtual.weather[0].description}</p>
            `;

            // Container para previsão dos próximos 5 dias
            const resultado5Dias = document.getElementById('previsao5Dias');
            resultado5Dias.innerHTML = '';  // Limpar resultados anteriores
            const previsoes = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

            previsoes.forEach(forecast => {
                const dataFormatada = new Date(forecast.dt_txt).toLocaleDateString('pt-BR', {
                    weekday: 'short', day: 'numeric', month: 'short'
                });
                resultado5Dias.innerHTML += `
                    <div class="previsao">
                        <p class="data">${dataFormatada}</p>
                        <img class="icon" src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}" />
                        <p class="temp-max">Min: ${forecast.main.temp_max}°C</p>
                        <p class="temp-min">Max: ${forecast.main.temp_min}°C</p>
                    </div>
                `;
            });


        })
        .catch(error => alert('Erro ao buscar o clima!'));
}

carregarDistritos();
