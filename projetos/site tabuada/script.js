function verificar() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
  
    if (numero !== '' && numero > 0) {
      resultado.innerHTML = ''; // Limpa o resultado anterior
  
      // Adiciona título ao resultado
      let titulo = document.createElement('h3');
      titulo.style.textAlign = 'center';
      titulo.style.color = 'rgb(25, 56, 69)';
      resultado.appendChild(titulo);
  
      // Cria a tabela
      let tabela = document.createElement('table');
      tabela.style.margin = '10px auto';
      tabela.style.borderCollapse = 'collapse';
      tabela.style.width = '100%';
  
      // Adiciona as linhas da tabuada
      for (let x = 1; x <= 10; x++) {
        let linha = document.createElement('tr');
        
        // Adiciona as células
        let celula1 = document.createElement('td');
        celula1.textContent = `${numero} x ${x}`;
        celula1.style.border = '1px solid rgb(11, 54, 94)';
        celula1.style.padding = '8px';
        celula1.style.textAlign = 'center';
  
        let celula2 = document.createElement('td');
        celula2.textContent = ` ${numero * x}`;
        celula2.style.border = '1px solid rgb(11, 54, 94)';
        celula2.style.padding = '8px';
        celula2.style.textAlign = 'center';
  
        linha.appendChild(celula1);
        linha.appendChild(celula2);
        tabela.appendChild(linha);
      }
  
      resultado.appendChild(tabela);
  
      // Estiliza a área do resultado
      resultado.classList.add('resultado');
  
      // Limpa o campo de entrada
      document.getElementById("numero").value = '';
    }
  }
  