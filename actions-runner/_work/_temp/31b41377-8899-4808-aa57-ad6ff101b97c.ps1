$ErrorActionPreference = 'stop'
docker ps  
docker compose down
docker container stop $(docker image ls -aq)
docker ps  
docker image ls
docker rmi $(docker images 'docusaurus-1r1sjc-docusaurus' -a -q)
docker image ls
docker compose up -d

if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }