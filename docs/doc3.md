---
id: doc3
title: GitHub Actions
---
## O que é GitHub Actions?
## Criando um Action para sua máquina local!
Neste tutorial iremos apresentar como podemos configurar que seu Github execute alguns scripts toda vez que tivermos um Push ou um Pull Request na maisn do seu reposítorio no GitHub.

1. Ao realizar o login na sua conta do GitHub escolha um repositório que deseja executar esta ação , neste caso iremos realizar no Docusaurus:

![alt text](/img/image.png)


2. Agora iremos escolher qual ação iremos adicionar para este repositório. 
    Na aba `Actions` iremos buscar na barra de pesquisa  por `python application` 

![alt text](/img/image2.png)

3. Certo! Clicamos em `configure`.

![alt text](/img/image3.png)

4. Agora iremos add o script para que execute as ações desejadas, como dito anteriormente este será um exemplo de código para que ao ser feito um push ou um pull requet na main , execute a funções no docker.

![alt text](/img/image4.png)

Modifiquei o meu arquivo yaml, para executar as ações exatas nos arquivos que desejo. é possível personalizar da maneira que lhe é mais conveniente.
Neste exemplo iremos apagar uma imagem especifico do nosso docker e construí-la novamente.

~~~~python
# This workflow will install Python dependencies, run tests and lint with a single version of Python
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python

name: Python application

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  
permissions:
  contents: read

jobs:
  build:

    runs-on: self-hosted

    steps:
    - uses: actions/checkout@v3
    
    - name: Executa o código
      run: |
        docker ps  
        docker compose down
        docker container stop $(docker image ls -aq)
        docker ps  
        docker image ls
        docker rmi $(docker images 'docusaurus-1r1sjc-docusaurus' -a -q)
        docker image ls
        docker compose up -d
~~~~

5. Agora precisamos configurar a máquina local para que o GitHub possa executar a açõa quando for realizado no seu computador.
     Na aba de `Setting` procure por `Runners`, selecione `new-selv-hosted runner`

     ![alt text](/img/image5.png)

E siga os comandos indecados dependendo do seu sistema operacional.

**Download**
~~~~python
# Create a folder under the drive root
$ mkdir actions-runner; cd actions-runner# Download the latest runner package
$ Invoke-WebRequest -Uri https://github.com/actions/runner/releases/download/v2.312.0/actions-runner-win-x64-2.312.0.zip -OutFile actions-runner-win-x64-2.312.0.zip# Optional: Validate the hash
$ if((Get-FileHash -Path actions-runner-win-x64-2.312.0.zip -Algorithm SHA256).Hash.ToUpper() -ne '847dbba12e7d0ae8f280481cf270110892a94657b63a6a4ab2da41c2b9831191'.ToUpper()){ throw 'Computed checksum did not match' }# Extract the installer
$ Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$PWD/actions-runner-win-x64-2.312.0.zip", "$PWD")
~~~~
**Configure**
~~~~python
# Create the runner and start the configuration experience
$ ./config.cmd --url https://github.com/ruthmira-1risjc/Docusaurus-1r1sjc --token BEJ2XJAOFQGLVAPGFLOZO33FYKG22# Run it!
$ ./run.cmd
~~~~
**Using your self-hosted runner**
~~~~python
# Use this YAML in your workflow file for each job
runs-on: self-hosted
~~~~

