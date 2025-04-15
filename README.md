# Birdie

**Birdie** é uma rede social desenvolvida com o objetivo de praticar e aprender tecnologias modernas do ecossistema web. O projeto utiliza **Next.js**, **React** e **TypeScript** para construção da interface e lógica, integrando autenticação com **Clerk**, banco de dados em nuvem pela **Neon**, gerenciamento de dados com **Prisma**, estilização com **Tailwind CSS** e **shadcn/ui**, upload de arquivos via **uploadthing** e deploy na **Vercel**.

---

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – Framework fullstack para React
- [React](https://reactjs.org/) – Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) – Superset de JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) – Estilização utilitária
- [shadcn/ui](https://ui.shadcn.dev/) – Componentes acessíveis e integrados ao Tailwind
- [Clerk](https://clerk.com/) – Autenticação de usuários
- [Neon](https://neon.tech/) – Banco de dados PostgreSQL serverless
- [PostgreSQL](https://www.postgresql.org/) – Banco de dados relacional
- [Prisma](https://www.prisma.io/) – ORM para TypeScript
- [uploadthing](https://uploadthing.com/) – Serviço de upload de arquivos
- [Vercel](https://vercel.com/) – Plataforma de deploy frontend/backend

---

## Funcionalidades

- Autenticação com Clerk (e-mail, redes sociais, etc)
- Criação e visualização de postagens com texto
- Upload de imagens
- Interações com postagens (curtidas, etc)
- Perfis de usuários públicos
- Feed principal e personalizado
- Interface responsiva com design moderno

---

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/birdie.git
cd birdie
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo .env com base no .env.example

### 4. Rode as migrações do banco

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```