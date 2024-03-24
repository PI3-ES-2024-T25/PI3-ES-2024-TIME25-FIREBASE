# Firebase
## Setup
Precisa ter o node na sua máquina (versão suportadas 18, 16 ou 14)

Para ver a sua versão do node:

    node --version

Instale as ferramentas do firebase:

    npm i -g firebase-tools

Faça login:

    firebase login

## ID do Projeto Firebase

No projeto procure o arquivo .firebaserc.example faça uma cópia e renomeie a CÓPIA para .firebaserc

No arquivo .firebaserc troque o valor no objeto de default para o id do projeto do SEU firebase ( já dentro do projeto do console na web, 
    perto da logo do firebase, clique no símbolo de engrenagem em Project Overview > Project Settings, procure pelo seu Project ID 
)

## Instale as dependencias

Baixe as dependencias, dentro do diretório do projeto:
    
    cd functions/ && npm i && cd ..

## Upload das functions
Agora voce pode subir as functions para o seu firebase, recomendo subir função uma à uma

Dentro do diretório (mude no comando para o nome da sua função) e execute:
    
    cd functions/ && npm run build && firebase deploy --only functions:minhaFuncao && cd ..

## Teste

Vá no arquivo arquivo index.ts (esta dentro de functions/src/) descomente o código do arquivo e execute o comando abaixo dentro do diretório:

    cd functions/ && npm run build && firebase deploy --only functions:hellWorld && cd ..
