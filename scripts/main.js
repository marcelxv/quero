Vue.config.devtools = true
console.log('vue.config.devtools', Vue.config.devtools)

const app = new Vue({
    el: '#app',
    data: {
        abreModal: false,
        selecionado: false,
        selecao: [],
        busca: {
            cidade: '',
            curso: '',
            modalidade: [],
            preço: '10000',
        },
        bolsas: [],
        semestre: 'todos',
        favoritos: [],
    },
    methods: {
        // busca bolsas na api e atualiza o array de bolsas
        getData: function () {
            fetch('./api/db.json')
                .then(response => response.json())
                .then(data => {
                    this.bolsas = data;
                })
                .catch(error => console.error(error));
        },
        // salva seleção do usuário no array de favoritos, fecha modal e esvaia seleção
           favoritar: function () {
            this.favoritos = (this.selecao);
            this.abreModal = false;
            this.selecionado = false;
        },
        // remove bolsa favoritada através do id
        removeFavorito: function (index) {
            this.favoritos.splice(index, 1);
        },
        // exibe bolsas favoritas filtradas pelo semestre selecionado
        filtrarPorSemestre(semestre) {
            this.semestre = semestre;
        }
    },
    computed: {
        resultados() {
            // retorna bolsas em ordem alfabética
            let porOrdemAlfabetica = this.bolsas.sort((a, b) => {
                if (a.university.name < b.university.name) return -1;
                if (a.university.name > b.university.name) return 1;
                return 0;
            });
            // retorna bolsas filtradas por cidade, curso e modalidade
            let porFiltrosUI = porOrdemAlfabetica.filter(bolsa => !bolsa.campus.city.indexOf(this.busca.cidade) &&
                !bolsa.course.name.indexOf(this.busca.curso) && !bolsa.course.kind.indexOf(this.busca.modalidade));

            // retorna bolsas filtradas por preço 
            let porPreco = porFiltrosUI.filter(bolsa => bolsa.full_price < this.busca.preço);
            return porPreco;
        },
        cidadesFiltradas() {
            // remove valores repetidos do array bolsas.campus.city e armazena em um novo array
            let cidades = this.bolsas.map(bolsa => bolsa.campus.city);
            let cidadesFiltradas = [...new Set(cidades)];
            return cidadesFiltradas;
        },

        favoritosFiltrados() {
            // retorna bolsas favoritas filtradas pelo semestre selecionado
            if (this.semestre === 'todos') {
                return this.favoritos;
            } else {
                let favsFiltrados = this.favoritos.filter(bolsa => bolsa.bolsa.enrollment_semester === this.semestre);
                return favsFiltrados
            }
        },
    },
    mounted() {
        // carrega bolsas favoritas do localStorage
        let retrievedObject = localStorage.getItem('nFav');
        retrievedObject = JSON.parse(retrievedObject)
        this.favoritos = retrievedObject
    },
    watch: {
        selecao() {
            if (this.selecao.length > 0) {
                this.selecionado = true;
            } else {
                this.selecionado = false;
            }
        },
        // salva bolsas favoritas no localStorage
        favoritos(nFav) {
            localStorage.setItem('nFav', JSON.stringify(nFav));
            return this.favorito
        },
        // limpa inputs do formulário de busca toda vez que o modal é aberto
        abreModal() {
            if (this.abreModal) {
                this.busca = {
                    cidade: '',
                    curso: '',
                    modalidade: [],
                    preço: '10000',
                }
            }

        },

    },
    created() {
        this.getData();
    }
});