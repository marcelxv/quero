# Teste Técnico Front-end | Marcel Scognamiglio

**A missão dada: fazer uma página onde o aluno possa filtrar bolsas de estudo de seu interesse e adicionar à uma lista de bolsas favoritas.**

## Quero Educação – Bolsas Favoritas

**Aplicação superleve (menos de 200KB) desenvolvida usando HTML, CSS e Javascript – com Vue.js para cuidar dos dados e interações do usuário**

Como se trata de um aplicativo progressivo com Vue.js em CDN, não se faz necessário instalar nenhum pacote ou dependência. Basta rodá-lo no navegador usando um live server.

Como visualizar o projeto ao vivo
Basta clicar [aqui](https://marcelxv.github.io/quero)

### Como visualizar o projeto localmente
1. Clone o repositório do projeto
2. Abra em um editor de código (Vscode, Sublime, etc) 
3. Abra o arquivo index.html em um live server de sua preferência

### Setup da aplicação:
- HTML5 - como linguagem de marcação para centralizar estilos e conteúdos dinâmicos
- CSS3 – como linguagem de estilo para definir estilos de elementos 
- Javascript – como linguagem de programação para armazenar, adicionar lógica e interação com elementos da página
- Vue.js na versão 3 - como framework para criar interfaces de usuário, interação com a API, etc


### Detalhes sobre a aplicação:
- Neste app o usuário pode filtrar bolsas de estudo de acordo com a a) cidade, b) curso, c) modalidade e d) preço
- O usuário pode adicionar bolsas através de um Modal de Busca
- Quando o modal está aberto o usuário pode fechar através do botão de cancelar ou ao clicar fora do modal
- Caso nenhuma bolsa seja selecionada, o botão de adicionar bolsa fica desabilitado
- Os resultados da busca têm ordenação por nome da faculdade;
- O usuário pode adicionar bolsas à lista de favoritos (múltiplos cursos também podem ser selecionados e adicionados à lista de favoritos)
- O usuário pode remover bolsas da lista de favoritos
- O usuário pode filtrar bolsas de estudo favoritas por semestre
- Caso a bolsa não esteja disponível, o botão para 'Ver Oferta' aparece desabilitado
- O estado da aplicação (com dados do usuário) persiste em LocalStorage
- A navegação pela tecla tab é feita de forma que o foco não seja perdido (acessibilidade)
- As funções e variáveis JavaScript foram escritas em Português para facilitar a leitura e diferenciar da linguagem do backend (em inglês) / exemplo: cidade e curso ao invés de city e course

### Detalhes sobre a entrega:
- Modo celular começa abaixo de 1280px de largura. Sendo assim, 1280px é o tamanho mínimo para o modo desktop;
- O HTML foi estruturado de forma semântica para melhor compreensão do usuário;
- Na falta de parametrização exata de medidas e fontes, foram adotados os padrões de tamanho e fonte do Google Fonts;
- Na ferramenta Axe DevTools foi feita uma análise de acessibilidade certificando que todos os elementos estão acessíveis;
- O código foi organizado de forma a facilitar a leitura e a manutenção – tabulação, espaçamento entre linhas, etc;
- Na ausência de diretrizes de design (UI Elements) foram adotados tamanhos padrões e fontes padrões;
