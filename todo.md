<!-- - instalar Vue -->
<!-- - instalar API de db.json no data -->
<!-- - criar pagina blank  -->
<!-- - criar modal de busca -->
<!-- - criar busca por  -->
<!-- -- cidade, 
-- curso, 
-- modalidade -->
<!-- -- preço -->
<!-- - criar modal  -->
<!-- - bug: varias cidades com mesmo nome -->
<!-- - acertar botao de adicionar (disabled) -->
<!-- - ordenacao da listagem do modal por nome da faculdade -->
<!-- - adicionar itens aos favoritos
- remover itens dos favoritos -->
<!-- - criar listagem de cursos -->
<!-- - criar filtragem de favoritos -->
<!-- - estilizar a pagina
- estilizar modal de busca -->
<!-- - persistir -->
- footer mobile
- documentar

Especificações de funcionalidades:
[x] O projeto possui uma única página, com a lista de favoritos e um modal para a busca de cursos;
[x] A clicar em Adicionar curso, deve abrir o modal de busca;
[x] A busca deve conter os seguintes filtros:
[x] Cidade;
[x] Curso;
[x] Modalidade (Presencial/EaD);
[x] Preço;
[x] A lista de cursos deve ter ordenação por nome da faculdade;
[x] Múltiplos cursos podem ser selecionados e adicionados à lista de favoritos;
[x] O botão Adicionar bolsa(s) deve ficar desabilitado enquanto não houver cursos selecionados;
[x] Os cursos podem ser removidos da lista de favoritos, através do botão Excluir;
[x] O botão Ver oferta não leva a lugar algum;
[x] Bolsas com { enabled: false }, devem aparecer com o botão Indisponível;
[x] A lista de favoritos deve respeitar o semestre selecionado.



Critérios de avaliação:
[ ] Fidelidade ao layout solicitado;
[x] Fidelidade às funcionalidades solicitadas;
[x] HTML estruturado de forma semântica;
[x] Clareza de nomenclatura do CSS;
[x] Seguir as melhores práticas de acessibilidade;
[x] Seguir as melhores práticas de performance na web;
[x] Adesão ao mobile first.


Sugestões extras (não obrigatórias):
[ ] Desenvolvimento de testes;
[ ] Seguir algum style guide de Javascript;
[ ] Seguir algum style guide de CSS;
[ ] Componentização e extensibilidade dos componentes Javascript;
[x] Persistir a lista de favoritos no browser do cliente;
[ ] Aplicar animações de transição.



Bugs
[ ] Ao voltar do LocalStorage, na primeira interação, a lista de favoritos (legada) é sobreescrita.
[x] Filtro modalidade --presencial não funciona.
[ ] Filtro de modalidade permite ser checked nas duas opcoes

