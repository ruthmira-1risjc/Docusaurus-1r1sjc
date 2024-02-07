
Este website foi criado com  [Docusaurus](https://docusaurus.io/).


## O que é Docusaurus?
O Docusaurus é um gerador de sites estáticos que utiliza o React, uma das principais bibliotecas JavaScript, para a criação de páginas. Ele é especialmente voltado para a criação e gerenciamento de sites onde o conteúdo é o protagonista.

Ele permite que você crie um site completo, com recursos como blog, de forma rápida e fácil, destacando seu conteúdo desde o início. Como o conteúdo é o foco com Docusaurus, é perfeito para criar sites de documentação como wikis. Ele também utiliza markdown, que é ideal tanto para colaboração quanto para armazenamento em um repositório git.

Além disso, o Docusaurus tem uma tonelada de recursos incríveis como i18n, pesquisa e temas personalizados.


## Requirements

[Node.js](https://nodejs.org/en/download/) version 18.0.

```
sudo apt-get install -y nodejs
```
Ao instalar o Node.js, é recomendável que você marque todas as caixas de seleção relacionadas às dependências.

## Instalação

Agora podemos começar criando nosso primeiro website com o docsaurus.

## Website

Nesses tutorial iremos utilizar as linhas de comando, é possível criar o esqueleto com as pastas e exemplos iniciais mais simples do website.
Em um repositório vazio utilize esta linha de comando, e ele criará o diretório.

```
npx create-docusaurus@latest my-website classic
```

## Estrutura do Projeto

Irá aparecer uma estrutura similar a esta em seu repositório.

```
meu-site
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock

```

Sobre a estrutura das pastas:
#### blog 
Contém os arquivos Markdown do blog. Mais detalhes podem ser encontrados no guia do [Blog](https://docusaurus.io/pt-BR/docs/blog)
#### docs 
Contém os arquivos Markdown para os documentos. Personalize a ordem da barra lateral `sidebars.js path`. Mais detalhes podem ser encontrados no [Docs](https://docusaurus.io/pt-BR/docs/docs-introduction.).
#### scr  
É opcional colocar seus arquivos não relacionados à documentação aqui.é válido para organizaçaõ do projeto em si.
##### src/pages
Aceita arquivos JSX/TSX/MDX serão convertidos em páginas do seu site. Mais detalhes podem ser encontrados no [Pages](https://docusaurus.io/pt-BR/docs/creating-pages)
#### static 
Pasta de arquivos estáricos. Todos arquivos aqui serão copiados para raiz do direótiro `build`. 
#### docusaurus.config.js 
O arquivo que contém toda a configuração do site. == `siteConfg.js`
#### package.json 
Você pode instalar e usar quaisquer pacotes npm que você goste.
#### sidebars.js 
Usado pela documentação para organizar a ordem dos documentos na barra lateral.

## Executando servidor 
Você pode usar um servidor local de desenvolvimento para servir seu site e visualizar as alterações , conforme o constrói.

```
cd meu-site
npm run start
```
ou
```
cd meu-site
yarn run start
```


Por padrão, uma janela do navegador será aberta em http://localhost:3000.

Parabéns! Você acabou de criar o seu primeiro site no Docusaurus! Navegue pelo site para ver o que está disponível.
