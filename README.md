# Blog IFSP Capivari - Frontend

Este é o frontend do projeto **Blog IFSP Capivari**, desenvolvido com **Next.js** e **TypeScript**. O blog tem como objetivo permitir a publicação e leitura de artigos pela comunidade acadêmica, com um painel administrativo completo para gerenciar conteúdos e usuários.

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) – Framework React com renderização SSR/SSG
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para maior segurança
- [NextAuth.js](https://next-auth.js.org/) – Autenticação e gerenciamento de sessões
- [shadcn/ui](https://ui.shadcn.com/) – Biblioteca de componentes acessíveis e estilizados com Tailwind CSS
- [Tailwind CSS](https://tailwindcss.com/) – Utilitários CSS para estilização
- [Resend](https://resend.com/) – Envio de e-mails de convite (invites)
- [SWR](https://swr.vercel.app/) – Fetching de dados reativo

---

## Estrutura de páginas

### Página inicial (Home)
- Exibe a lista de artigos públicos
- Cada artigo leva à sua página individual de leitura
- Visual limpo e acessível

### Página de Login
- Login via e-mail/senha (implementado com NextAuth)
- Redirecionamento automático para o painel admin após login

### Admin
- Acesso restrito a usuários autenticados (autores ou administradores)
- CRUD completo de artigos
- Upload de imagens
- Visualização de autor e categorias

### Sistema de convites
- Administradores podem enviar convites por e-mail
- Os convidados recebem um link com token para se cadastrar como autores
- Integração com a **Resend API** para envio de e-mails

---
