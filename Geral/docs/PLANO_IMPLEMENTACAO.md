# Plano de Implementação

## Seção 1 — Identificação e visão geral

### Nome do grupo: 
A-TRAIN
### Integrantes: 
Adriano Nasc. Jr. | Erik F. D. | Gabriel G. | Nathan P.
### Link do mockup:
 https://canva.link/kchgr9mmuijm10u
### Resumo do sistema:
 O A-TRAIN é uma plataforma ferroviária que permite aos passageiros consultar horários, acompanhar a localização dos trens, receber notificações e solicitar bilhetes. Além disso, oferece ferramentas de monitoramento para operadores e administradores, incluindo relatórios da frota e acompanhamento de sensores. Seu diferencial é reunir informações de viagem e gestão operacional em um único sistema, proporcionando mais praticidade, segurança e eficiência para todos os usuários.

### Decisão Técnica da Stack:

Utilizaremos o Visual Studio

**HTML**
Será utilizado para estruturar as páginas do sistema, organizando os conteúdos e componentes da interface.

**CSS**
Será utilizado para a estilização das telas, garantindo que o sistema siga o padrão visual definido no mockup e seja responsivo para diferentes dispositivos.

**JavaScript**
Será utilizado para implementar validações de formulários, interações do usuário, navegação entre telas e manipulação de dados da aplicação.



***Seção 2 — Arquitetura de Arquivos e Pastas***
### Estrutura de Pastas
transporte-ferroviario/

├── index.html

├── pages/
│   ├── login.html
│   ├── dashboard.html
│   ├── trens.html
│   ├── detalhes-trem.html
│   ├── sensores.html
│   ├── relatorios.html
│   └── usuarios.html

├── css/
││   ├── global.css
│   ├── header.css
│   ├── buttons.css
│   ├── cards.css
│   └── forms.css


├── js/
│   ├── auth.js
│   ├── dados.js
│   ├── dashboard.js
│   ├── trens.js
│   ├── sensores.js
│   ├── relatorios.js
│   └── usuarios.js

├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/

└── docs/
   └── PLANO_IMPLEMENTACAO.md

### Justificativa
A pasta pages reúne todas as telas do sistema.
A pasta css armazena os arquivos de estilização.
A pasta js contém os scripts responsáveis pelas funcionalidades.
A pasta assets guarda imagens, ícones e logos utilizados no projeto.
A pasta docs é destinada à documentação.
Por que separar os arquivos?
Os arquivos CSS foram separados por componentes para facilitar a reutilização dos estilos.
O arquivo auth.js será responsável pelas funções de login e controle de acesso.
O arquivo dados.js será responsável pelo gerenciamento e armazenamento das informações do sistema.
Essa organização torna o projeto mais limpo, organizado e fácil de manter.
