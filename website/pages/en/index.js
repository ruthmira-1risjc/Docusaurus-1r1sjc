/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Documentação</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Saiba mais em:</h2>
        <MarkdownBlock>[Clique aqui para acessar nosso site](https://www.1risjc.com.br/)</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Para mantermos um ambiente organizado, nossos códigos ficam armazenados em repositórios do GitHub.' +
              'Para utilização e entendimento dos projetos temos uma documentação nesste site , que poderá facilitar sua aplicação. <br />'+
              'Visite nosso perfil : <a href="https://github.com/1-Oficial-de-Registro-de-Imoveis">**1° RISJC**</a>',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Sobre nosso Legado',
          },
        ]}
      </Block>
    );
    

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Em construção',
          },
        ]}
      </Block>
    );
    

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Para mais informações do Cartório, você pode acessar nosso site: **www.1risjc.com.br**',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Sobre o 1º RISJC',
            textAlign:'center'
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'O Projeto Pré-Protocolo tem como intuito agilizar os atendimentos realidos no balcão , através de um formulário simples e dinâmico disponibilizado em nossos tablets locais irá trazer mais conforto para nossos clientes.',
            image: `${baseUrl}img/depoimento.png`,
            imageAlign: 'top',
            title: 'Projeto Pré-Protocolo',
          },
          {
            content: 'O Projeto RUDA é uma implementação de automatização, onde atraves da bibiblioteca OCR extraimos os dados dos documentos e alimentamos nossos sistemas internos. Também implementamos um agendador que busca monitorar os arquivos inseridos na pasta alvo, já aciona nosso extrator , assim o usuário não precisa esperar que aquela informação apaareça no banco , pois esta estará sempre sendo alimentada.',
            image: `${baseUrl}img/ocr.png`,
            imageAlign: 'top',
            title: 'Projeto RUDA',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <div className="logos">{showcase}</div>
          <h4><strong>Ruth Mira</strong></h4>
          <sub>Developer</sub>
          <p><em>" Estudante de Banco de Dados e desenvolvedora, atualmente utilizando diversas biblioetecas e com conhecimento em nas Linguagens : Javascript, Python etc. "</em></p>
          <p></p>
          <p></p>
          <div className="more-users">
            <a className="text" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
