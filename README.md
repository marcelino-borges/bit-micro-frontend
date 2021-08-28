## Instalando BVM, BIT e configurando o ambiente

1. `npm i @teambit/bvm -g`;
2. `bvm install`; e
3. `setx path "%path%;%LocalAppData%\.bvm"`.

## Criando novo projeto

1. `bit init --harmony`;
2. `bit install react --type peer`;
3. `bit install react-dom --type peer`;
4. `bit create react-component path/to/component`;
5. `bit status` após testar tudo, pro framework checar se está tudo ok;
6. `bit login` para logar no site do bit harmony;
7. Criar o workspace e a collection, copiar o nome do "export to...";
8. Voltar no projeto, abrir o workspace.jsonc e colar o export do site no defaultScope;
9. Executar `bit link` para o Bit relinkar todos os node modules; e
10. Pode renomear os imports de componentes locais usando "@scopeOriginal/componente" para "@marcelino-borges.mfe-test/componente" (para buscar o componente nao do escopo local, mas da nuvem (portal bit).

## Rodando localmente

1. `bit start` para rodar no browser ou;
2. `bit compile` para ver erros em componentes sem precisar rodar o workspace.
