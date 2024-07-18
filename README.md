**Lista de Séries de TV**

* Este é um projeto simples de uma Lista de Séries de TV desenvolvido em React. Ele permite adicionar novas séries, editar séries existentes e remover séries individualmente ou todas de uma vez. A aplicação utiliza componentes funcionais, hooks como useState e useEffect para gerenciamento de estado e efeitos colaterais, e é estilizada com CSS básico.

**Funcionalidades**

* Adicionar Série: Insira o nome de uma nova série na caixa de texto e clique em "Adicionar Série".
* Editar Série: Clique no botão "Editar" ao lado de uma série para alterar seu nome.
* Remover Série: Clique no ícone de lixeira ao lado de uma série para removê-la individualmente.
* Remover Todas as Séries: Utilize o botão "Remover Todas" para limpar toda a lista de séries.

**Estrutura do Projeto**

* O projeto está organizado da seguinte forma:

        App.js: Componente principal que gerencia o estado das séries e renderiza outros componentes.

        FormularioSerie.jsx: Componente para adicionar e editar séries.

        ListaSeries.jsx: Componente que exibe a lista de séries e permite a remoção individual ou em massa.

        App.css: Estilização básica para a aplicação.

**Instalação e Uso**

* Para executar este projeto localmente, siga estas etapas:

        1. Clone o repositório:
            git clone https://github.com/pjohn0707/lista-seriesTV.git
            cd gerenciador-series

        2. Instale as dependências:
            npm install

        3. Inicie a aplicação:
            npm start