# Firebase
## Setup
Precisa ter o node na sua máquina (versão recomendada 18 stable)

Instale as ferramentas do firebase

    npm i -g firebase-tools

Faça login

    firebase login

No projeto procure o arquivo .firebaserc.example faça uma cópia e renomeie para .firebaserc somente.

No arquivo .firebaserc troque o valor no objeto de default para o nome do projeto do SEU firebase

## Upload das functions
Agora voce pode subir as functions para o seu firebase, recomendo subir função uma a uma

Dentro do diretório (mude no comando para o nome da sua função):
    
    cd functions && npm run build && firebase deploy --only functions:minhaFuncao && cd ..
