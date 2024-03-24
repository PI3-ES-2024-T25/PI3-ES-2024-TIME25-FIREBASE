# Firebase
## Setup
Precisa ter o node na sua máquina (versão recomendada 18 stable)

Instale as ferramentas do firebase:

    npm i -g firebase-tools

Faça login:

    firebase login

No projeto procure o arquivo .firebaserc.example faça uma cópia e renomeie a CÓPIA para .firebaserc

No arquivo .firebaserc troque o valor no objeto de default para o id do projeto do SEU firebase (
    perto da logo do firebase, clique no simbolo de engrenagem em Project Overview e então em Project Settings, então voce ira procurar pelo seu Project ID 
)

Baixe as dependencias, dentro do diretório do projeto:
    
    cd functions/ && npm i && cd ..

## Upload das functions
Agora voce pode subir as functions para o seu firebase, recomendo subir função uma a uma

Dentro do diretório (mude no comando para o nome da sua função):
    
    cd functions/ && npm run build && firebase deploy --only functions:minhaFuncao && cd ..

## Teste

Vá no arquivo arquivo index.ts (esta dentro de functions/src/) descomente o código do arquivo e execute o comando abaixo dentro do diretório:

    cd functions/ && npm run build && firebase deploy --only functions:hellWorld && cd ..
