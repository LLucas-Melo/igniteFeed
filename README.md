# Ignite Feed 📱

## 📝 Descrição
O Ignite Feed é uma aplicação que simula uma rede social, desenvolvida durante o programa Ignite da Rocketseat. O projeto implementa funcionalidades comuns de redes sociais como posts, comentários e interações entre usuários.

## ✨ Preview da Aplicação
![Ignite Feed Preview]

## 🚀 Funcionalidades
- Criação de posts
- Sistema de comentários
- Likes em comentários
- Remoção de comentários
- Formatação de data relativa (há X tempo)
- Interface responsiva
- Validação de comentários vazios

## 🛠️ Tecnologias Utilizadas
- React.js
- TypeScript
- CSS Modules
- Date-fns para formatação de datas
- Phosphor Icons para ícones
- Vite como bundler

## 💻 Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/LLucas-Melo/igniteFeed.git
```

2. Acesse a pasta do projeto
```bash
cd igniteFeed
```

3. Instale as dependências
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 📁 Estrutura do Projeto
```
igniteFeed/
├── src/
│   ├── components/
│   │   ├── Avatar/
│   │   ├── Comment/
│   │   ├── Header/
│   │   ├── Post/
│   │   └── Sidebar/
│   ├── assets/
│   ├── styles/
│   └── App.tsx
├── public/
└── package.json
```

## 🎯 Principais Componentes

### Header
- Componente de cabeçalho da aplicação
- Exibe o logo e navegação

### Post
- Componente principal para exibição de posts
- Gerencia estados de comentários
- Implementa interações de usuário

### Comment
- Componente para exibição e gerenciamento de comentários
- Sistema de likes
- Funcionalidade de deletar comentário

### Sidebar
- Exibe informações do perfil do usuário
- Permite edição de perfil

### Avatar
- Componente reutilizável para exibição de avatares
- Suporta diferentes tamanhos e estilos

## 🔄 Fluxo da Aplicação
1. Usuário visualiza feed de posts
2. Pode adicionar comentários em posts
3. Interagir com comentários (like/delete)
4. Visualizar informações de perfil na sidebar

## 📝 Características do Código
- Componentização eficiente
- Uso de TypeScript para type safety
- CSS Modules para estilização isolada
- Hooks do React para gerenciamento de estado
- Formatação de datas com date-fns
- Princípios de Clean Code

## 🚀 Funcionalidades Futuras Sugeridas
- [ ] Implementar sistema de autenticação
- [ ] Adicionar funcionalidade de compartilhamento
- [ ] Implementar sistema de seguir usuários
- [ ] Adicionar notificações em tempo real
- [ ] Implementar sistema de hashtags
- [ ] Adicionar suporte a imagens nos comentários

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🐛 Encontrou um bug?
Caso encontre algum problema, por favor abra uma issue no GitHub com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado
- Screenshots (se aplicável)

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor
Lucas Melo
- GitHub: [@LLucas-Melo](https://github.com/LLucas-Melo)

## 🙏 Agradecimentos
- Rocketseat pelo programa Ignite
- Comunidade do React
- Contribuidores do projeto
****
