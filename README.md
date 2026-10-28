# Lions Seminovos — Desafio Front-end

Aplicação front-end desenvolvida como desafio técnico para uma vaga de desenvolvimento front-end. O projeto é **inspirado** no site público da [Lions Seminovos](https://lionsseminovos.com.br/), mas possui implementação própria e **não é o site oficial da empresa**.

## Objetivo

Construir uma experiência automotiva responsiva e demonstrar conhecimentos de React, TypeScript, componentização, navegação, filtros, formulários e acessibilidade básica.

## Funcionalidades

- **Página inicial:** apresentação do projeto, busca rápida e veículos em destaque.
- **Catálogo:** listagem de veículos demonstrativos com filtros combináveis por marca, modelo, preço, ano, categoria e câmbio.
- **Filtros compartilháveis:** os filtros selecionados são refletidos na URL, permitindo abrir ou compartilhar uma busca.
- **Detalhes do veículo:** página individual com informações demonstrativas e acesso ao formulário de visita.
- **Agendamento demonstrativo:** formulário com validação de campos, seleção de veículo e confirmação visual após o envio.
- **Navegação responsiva:** menu mobile e layout adaptável a celulares, tablets e desktops.
- **Tratamento de imagens:** caso uma imagem externa não carregue, a interface apresenta um fallback.
- **Link externo:** botão para visitar o site oficial da Lions Seminovos, aberto em nova aba.

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Estrutura do projeto

```text
src/
├── components/   # Cabeçalho, rodapé, cards, filtros e componentes reutilizáveis
├── data/         # Dados estáticos dos veículos demonstrativos
├── hooks/        # Lógica reutilizável dos filtros
├── lib/          # Funções utilitárias e constantes
├── pages/        # Início, catálogo, detalhes, agendamento e página 404
├── types/        # Tipos TypeScript
├── App.tsx       # Rotas e estrutura principal
├── index.css     # Estilos globais
└── main.tsx      # Inicialização da aplicação
```

## Como executar localmente

**Pré-requisito:** Node.js 18 ou superior e npm.

1. Clone este repositório ou baixe o código.
2. No terminal, entre na pasta do projeto.
3. Instale as dependências e inicie o servidor:

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Verificar a versão de produção

```bash
npm run build
npm run preview
```

O comando `npm run build` executa a checagem de tipos TypeScript e gera a versão de produção na pasta `dist/`.

## Decisões técnicas

- **Componentização:** cabeçalho, rodapé, cards, filtros e imagens são separados em componentes reutilizáveis.
- **Dados separados da interface:** os veículos e suas informações ficam centralizados em `src/data/vehicles.ts`.
- **Filtros na URL:** os parâmetros de busca são mantidos na URL para facilitar a navegação e o compartilhamento de resultados.
- **Validação no front-end:** o formulário verifica os campos necessários e informa o resultado de forma visível.
- **Acessibilidade básica:** são utilizados rótulos de formulário, textos alternativos, foco visível e suporte à navegação por teclado.
- **Falha de imagem:** existe uma alternativa visual para evitar espaços quebrados quando uma imagem não carrega.

## Limitações e transparência

- Os veículos, preços, quilometragens e características são **dados fictícios para demonstração**; não representam o estoque real da Lions Seminovos.
- As fotografias são ilustrativas e podem não corresponder exatamente à marca, ao modelo ou à versão informada no card.
- O formulário de agendamento é apenas demonstrativo: os dados não são enviados para a empresa, armazenados ou usados para confirmar uma visita.
- O projeto não possui backend, banco de dados ou autenticação.
- A identificação da marca é textual. Não foram incluídos logotipo oficial, endereço, telefone, horário de funcionamento ou links de redes sociais que não tenham sido confirmados.


