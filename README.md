# Desafio Front-end - Lions Seminovos

Este projeto foi criado para o desafio técnico de front-end da Lions Seminovos. A proposta foi desenvolver uma experiência inspirada no site da empresa, com página inicial, catálogo de veículos e formulário para agendar uma visita.

## Como resolvi o desafio

Escolhi React porque já tenho experiência criando aplicações com essa biblioteca no meu trabalho anterior. Isso me permitiu aproveitar conhecimentos que já uso no dia a dia e concentrar o trabalho na interface e nos requisitos do desafio.

Organizei o código para simplificar a manutenção e deixar a navegação pelo projeto mais fácil. Cada página cuida de uma parte da experiência: início, catálogo, detalhes do veículo ou agendamento. Elementos que aparecem em mais de um lugar, como cabeçalho, cards e modal de desconto, ficam em componentes reutilizáveis. Os dados dos veículos e das lojas também ficam separados da interface.

Na página inicial, incluí uma apresentação da loja, busca rápida, veículos em destaque e acesso ao pedido de desconto. No catálogo, dá para pesquisar e combinar filtros. A página de agendamento tem um formulário com seleção de loja. O layout se adapta a celulares e telas maiores.

Procurei seguir princípios de Clean Code: usar nomes claros, dividir a interface em partes menores e manter cada componente responsável por uma tarefa. Para o tamanho deste desafio, essa organização torna o código mais simples de percorrer sem adicionar camadas desnecessárias.

Também usei imagens públicas e incluí links para o site e as redes sociais da Lions Seminovos. Os formulários e os veículos são demonstrativos: nenhum dado é enviado à loja e os anúncios não representam o estoque real.

## Tecnologias

- React e TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React para ícones

## Organização do código

O código da aplicação fica em `lions-seminovos/src`:

- `components/`: cabeçalho, rodapé, cards, filtros e modal de desconto.
- `data/`: dados de exemplo dos veículos e lista de lojas.
- `hooks/`: lógica reutilizável dos filtros do catálogo.
- `pages/`: páginas inicial, catálogo, detalhes do veículo e agendamento.
- `types/`: tipos usados nos dados dos veículos.
- `lib/`: funções auxiliares de formatação.
- `App.tsx`: rotas e estrutura principal da aplicação.
- `index.css`: estilos globais e classes compartilhadas.

## Como rodar o projeto

Você precisa ter Node.js 18 ou mais recente e npm instalados.

1. No terminal, entre na pasta do projeto:

   ```bash
   cd lions-seminovos
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor local:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite, geralmente `http://localhost:5173`.

Para gerar a versão de produção, rode:

```bash
npm run build
```

Os arquivos gerados ficam em `lions-seminovos/dist`.



- Tela Principal
<img width="1393" height="916" alt="image" src="https://github.com/user-attachments/assets/0dc5f1d7-cb1c-4f92-87fa-f63f4e1ca4c3" />

<img width="1221" height="922" alt="image" src="https://github.com/user-attachments/assets/4eea14d2-1c9f-46a4-bc64-f8da7fe959c4" />

<img width="1576" height="764" alt="image" src="https://github.com/user-attachments/assets/7dea7c20-95cb-491b-8ecb-b4fe5eec49aa" />



