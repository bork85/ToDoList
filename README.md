# 📝 To-Do List

Uma aplicação de lista de tarefas moderna e funcional, desenvolvida com React + Vite no frontend e Node.js/TypeScript no backend.

## ✨ Características

- ✅ **Adicionar Tarefas**: Crie novas tarefas rapidamente
- ✔️ **Marcar como Concluída**: Controle visual de tarefas finalizadas
- 🗑️ **Remover Tarefas**: Exclua tarefas indesejadas
- 💾 **Persistência de Dados**: Armazenamento em MongoDB
- 🎨 **Interface Moderna**: Design limpo com Styled Components
- 📱 **Responsivo**: Layout adaptativo para diferentes dispositivos

## 📁 Estrutura do Projeto

```bash
ToDoList/
├── backend/
│   ├── src/
│   │   ├── api/          # Controllers e lógica de negócio
│   │   ├── database/     # Configuração do MongoDB
│   │   ├── routes/       # Rotas da API
│   │   ├── app.ts        # Configuração do Express
│   │   └── server.ts     # Inicialização do servidor
│   ├── package.json
│   └── tsconfig.json
├── src/
│   ├── assets/           # Imagens e recursos
│   ├── axios/            # Configuração do Axios
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   ├── styles.js         # Styled Components
│   └── globalStyles.js   # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Tecnologias Utilizadas

### Frontend

- ⚛️ **React 19**: Biblioteca JavaScript para interfaces
- ⚡ **Vite**: Build tool rápida e moderna
- 💅 **Styled Components**: CSS-in-JS para estilização
- 🔌 **Axios**: Cliente HTTP para requisições
- 🎨 **React Icons**: Biblioteca de ícones

### Backend

- 🟢 **Node.js**: Runtime JavaScript
- 📘 **TypeScript**: Superset tipado do JavaScript
- 🚂 **Express**: Framework web minimalista
- 🍃 **MongoDB**: Banco de dados NoSQL
- 📦 **Mongoose**: ODM para MongoDB
- 🔐 **CORS**: Middleware para controle de acesso

## 🚀 Como Usar

### Pré-requisitos

- Node.js (v16 ou superior)
- MongoDB instalado e rodando
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/bork85/ToDoList.git
cd ToDoList
```

### 2. Configure o Backend

```bash
cd backend
npm install
npm start
```

O servidor backend estará rodando em `http://localhost:3000`

### 3. Configure o Frontend

```bash
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

### No Frontend

| Script | Descrição |
| -------- | ----------- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Executa o ESLint |

### No Backend

| Script | Descrição |
| -------- | ----------- |
| `npm start` | Inicia o servidor com nodemon e ts-node |
| `npm test` | Executa os testes (a implementar) |

## 🔌 API Endpoints

| Método | Endpoint | Descrição |
| -------- | ---------- | ----------- |
| `GET` | `/todos` | Lista todas as tarefas |
| `POST` | `/todos` | Cria uma nova tarefa |
| `PATCH` | `/todos/:id` | Atualiza status de uma tarefa |
| `DELETE` | `/todos/:id` | Remove uma tarefa |

## 🎨 Funcionalidades

### Adicionar Tarefa

Digite a tarefa no campo de entrada e clique em "Adicionar" para criar uma nova tarefa.

### Marcar como Concluída

Clique no ícone de check ao lado da tarefa para marcá-la como concluída ou não concluída.

### Remover Tarefa

Clique no ícone de lixeira para excluir permanentemente uma tarefa.

## 🔧 Personalização

Para customizar a aplicação:

1. **Alterar estilos**: Modifique os componentes em `src/styles.js`
2. **Ajustar cores globais**: Edite `src/globalStyles.js`
3. **Configurar API**: Atualize a URL base em `src/axios/index.js`
4. **Modificar banco de dados**: Configure a conexão em `backend/src/database/`

## 📝 Notas de Desenvolvimento

- A aplicação utiliza MongoDB para persistência de dados
- O frontend se comunica com o backend via API REST
- Styled Components permite estilização dinâmica baseada em props
- TypeScript no backend garante type safety

## 📄 Licença

Este projeto está sob licença livre para uso educacional e pessoal.

## ✉️ Contato

- **E-mail**: me chame em [daniel.bork@yahoo.com.br](mailto:daniel.bork@yahoo.com.br)

---

**Versão**: 1.0.0  
**Idioma**: Português (Brasil)
