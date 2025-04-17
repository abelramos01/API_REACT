# API_REACT

*Estrutura do projeto*

root/app/_layout.js (Define o layout da pilha de navegação (Stack)) 


root/app/index.js (Tela principal com lista de usuários) 


root/app/user/[id].js (Tela de detalhes do usuário com rota dinâmica)


root/ index.js (Arquivo de entrada do app (registro com ExpoRoot))


O arquivo babel.config.js já está configurado para uso do expo router


*Instruções de Execução*


1. Pré-requisitos:
   
Certifique-se de ter:

Node.js instalado;

expo-cli instalado (npm install -g expo-cli);

Um emulador Android/iOS ou o app Expo Go no seu dispositivo;


2. Instalação de requisitos
   
Depois baixe as pastas do Repositorio, e navegue até ela pelo terminal cd C:\Users\(seu usuário)\my_app

No diretório do projeto, rode:

npm install

npm install expo-router react-native-safe-area-context react-native-screens react-native-gesture-handler react-native-reanimated

3. Inicializando o projeto:
   
Para iniciar o app com o Expo, use:

npx expo start
