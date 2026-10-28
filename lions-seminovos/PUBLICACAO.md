# Checklist antes de publicar

Use esta lista para fazer a revisão final do projeto. Marque cada item somente depois de conferir no navegador ou no terminal.

## Aparência e conteúdo

- [ ] Abrir a página inicial e conferir se o destaque principal e as imagens dos veículos carregam.
- [ ] Percorrer todo o catálogo e verificar se há imagens quebradas ou repetidas em excesso.
- [ ] Confirmar que as fotografias são tratadas como ilustrativas e que os dados dos veículos são demonstrativos.
- [ ] Conferir a versão mobile e desktop, incluindo o menu de navegação.
- [ ] Verificar se não há textos cortados, sobreposição de elementos ou rolagem horizontal inesperada.
- [ ] Confirmar que a identificação textual “LIONS SEMINOVOS” não é apresentada como logotipo oficial.

## Funcionalidades

- [ ] Testar os links do cabeçalho, rodapé e botões principais.
- [ ] Testar a busca rápida da página inicial.
- [ ] Aplicar mais de um filtro no catálogo e confirmar que eles funcionam em conjunto.
- [ ] Limpar os filtros e conferir o estado sem resultados.
- [ ] Abrir os detalhes de um veículo e seguir para o agendamento.
- [ ] Enviar o formulário vazio para conferir as mensagens de validação.
- [ ] Enviar o formulário preenchido e conferir a confirmação demonstrativa.
- [ ] Confirmar que não há mensagem dizendo que uma visita real foi agendada.
- [ ] Clicar no botão do site oficial e verificar se abre `https://lionsseminovos.com.br/` em uma nova aba.

## Revisão técnica

- [ ] Instalar as dependências com `npm install`.
- [ ] Executar `npm run build` e resolver eventuais erros antes da entrega.
- [ ] Executar `npm run dev` e testar a aplicação no navegador.
- [ ] Conferir o console do navegador e corrigir erros relevantes.
- [ ] Confirmar que `node_modules/` e `dist/` não serão enviados ao GitHub.
- [ ] Revisar o README e confirmar que os comandos e as limitações estão descritos corretamente.

## Imagens externas

As imagens são carregadas de URLs externas do Unsplash. A aplicação possui fallback visual para falhas, mas isso não substitui a revisão manual. Abra o catálogo com conexão à internet e confirme cada imagem. Se alguma falhar, troque a URL correspondente em `src/data/vehicles.ts` por uma imagem pública válida e teste novamente.

Como as imagens são ilustrativas, elas não precisam representar exatamente o modelo indicado; ainda assim, prefira fotografias automotivas coerentes e evite repetir a mesma imagem em vários cards.

## Transparência do projeto

Mantenha explícito no README e na interface que o projeto é uma demonstração independente inspirada no site público da Lions Seminovos. Não invente informações de contato, perfis sociais, disponibilidade de veículos ou condições comerciais. O formulário não envia dados e não cria agendamentos reais.
