PLANO_IMPLEMENTACAO.md
***Seção 1 — Identificação e Visão Geral***
Nome do Grupo e Integrantes
## Grupo: A-Train
Integrantes:

# Nathan Tomaz Pacheco
# Adriano Nascimento Junior
# Erik Felipe de Andrade Dalonso
# Gabriel Martins Gonzatto

***Link do Mockup***
https://canva.link/kchgr9mmuijm10u

Resumo do Sistema
O sistema foi desenvolvido para auxiliar no gerenciamento e monitoramento do transporte ferroviário. A plataforma permite acompanhar informações sobre trens, sensores, relatórios de manutenção e alertas operacionais em tempo real. O sistema é destinado a operadores, técnicos e administradores, facilitando a tomada de decisões e contribuindo para a segurança e eficiência das operações ferroviárias.
Decisão Técnica
HTML5
Será utilizado para estruturar todas as páginas do sistema de forma organizada e semântica.
CSS3
Será utilizado para estilizar as interfaces e garantir um visual padronizado.
JavaScript Puro
Será utilizado para implementar funcionalidades, validações e interações entre as páginas.
CSS Puro (sem Bootstrap)
A equipe optou por não utilizar frameworks de estilo para ter maior controle sobre a interface e desenvolver uma identidade visual própria para o sistema.

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
│   ├── global.css
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

***Seção 3 — Componentes Reutilizáveis Identificados***
Botão Primário
Aparece em: Login, Usuários e Relatórios.
Variações: normal, hover e desabilitado.
Header de Navegação
Aparece em: Dashboard, Trens, Sensores, Relatórios e Usuários.
Variações: item selecionado e item não selecionado.
Menu Lateral
Aparece em todas as telas internas.
Variações: menu aberto e menu fechado.
Card de Informação
Aparece em: Dashboard, Trens e Sensores.
Variações: com alerta, sem alerta e com indicador de status.
Campos de Formulário
Aparecem em: Login, Usuários e Relatórios.
Variações: campo de texto, senha e seleção.
Tabela de Dados
Aparece em: Trens, Sensores e Usuários.
Variações: com filtros e sem filtros.
Modal de Confirmação
Aparece em: Usuários e Relatórios.
Variações: confirmação de ação e cancelamento.
Badge de Status
Aparece em: Dashboard, Trens e Sensores.
Variações: ativo, em manutenção e alerta.
Esses componentes serão desenvolvidos uma única vez e reutilizados nas diferentes telas do sistema, evitando repetição de código e facilitando futuras alterações.

***Seção 4 — Ordem de Implementação***
1. Componentes Base
Botões
Inputs
Header
Menu lateral
Cards
Tabelas
Justificativa: Esses componentes serão utilizados em praticamente todas as telas do sistema.
2. Tela de Login
Justificativa: É a porta de entrada do sistema e permite o acesso dos usuários.
3. Dashboard
Justificativa: Após o login, o usuário será direcionado para esta tela, que apresenta as principais informações do sistema.
4. Tela de Trens
Justificativa: Exibe a lista de trens monitorados e serve como base para consultas mais detalhadas.
5. Tela de Detalhes do Trem
Justificativa: Depende da existência da listagem de trens para exibir informações específicas.
6. Tela de Sensores
Justificativa: Complementa o monitoramento dos trens com informações sobre sensores e alertas.
7. Tela de Relatórios
Justificativa: Utiliza dados provenientes das demais áreas do sistema para gerar análises e históricos.
8. Tela de Usuários
Justificativa: Funcionalidade administrativa implementada após a conclusão das telas principais.

***Seção 5 — Fluxos de Navegação do Usuário***
### Fluxo 1 — Acessar o Sistema
Perfil: Operador
Tela de Login
Insere usuário e senha
Clica em "Entrar"
Dashboard
Visualiza informações gerais da operação ferroviária

### Fluxo 2 — Monitorar um Trem
Perfil: Operador
Dashboard
Acessa a Lista de Trens
Seleciona um trem
Tela de Detalhes do Trem
Consulta status, localização e informações operacionais

### Fluxo 3 — Verificar Alertas de Sensores
Perfil: Técnico
Dashboard
Acessa a tela de Sensores
Visualiza alertas ativos
Seleciona um alerta
Analisa os detalhes do problema identificado

### Fluxo 4 — Gerar Relatório Operacional
Perfil: Técnico
Dashboard
Acessa Relatórios
Seleciona o período desejado
Define filtros
Gera o relatório
Visualiza ou exporta os resultados

### Fluxo 5 — Gerenciar Usuários
Perfil: Administrador
Dashboard
Acessa a tela de Usuários
Clica em "Adicionar Usuário"
Preenche os dados solicitados
Salva o cadastro
Novo usuário é registrado no sistema

### Fluxo 6 — Encerrar Sessão
Perfil: Todos os usuários
Acessa o menu do usuário
Clica em "Sair"
O sistema encerra a sessão
Retorna para a tela de Login.
