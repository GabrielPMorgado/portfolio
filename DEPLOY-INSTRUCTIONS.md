# 🚀 Instruções para Hospedar seu Portfólio no GitHub Pages

## 📝 Passos para Publicar seu Portfólio:

### 1. Criar Repositório no GitHub
1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository" (repositório novo)
3. Nome sugerido: `portfolio` ou `meu-portfolio`
4. Marque como **público**
5. Clique em "Create repository"

### 2. Configurar Git Local
Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: adicionar portfólio profissional completo"

# Conectar com o repositório do GitHub (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# Fazer push para o GitHub
git push -u origin main
```

### 3. Configurar GitHub Pages
1. No seu repositório no GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **GitHub Actions**
4. Volte para a pasta do projeto

### 4. Criar Workflow do GitHub Actions
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 5. Fazer Deploy
```bash
# Adicionar o workflow
git add .
git commit -m "feat: adicionar workflow de deploy para GitHub Pages"
git push

# Ou usar o método alternativo com gh-pages
npm run deploy
```

### 6. Acessar seu Portfólio
Após alguns minutos, seu portfólio estará disponível em:
`https://SEU-USUARIO.github.io/portfolio/`

## 🔧 Personalizações Importantes:

### Atualizar Informações Pessoais
Edite os seguintes arquivos com suas informações:

**src/components/Contact.jsx:**
- Email
- Telefone/WhatsApp
- LinkedIn
- GitHub

**index.html:**
- URLs nas meta tags Open Graph
- Título e descrição

**README.md:**
- Links do GitHub
- Informações pessoais

### Adicionar seus Projetos Reais
Edite **src/components/Projects.jsx:**
- Substitua os projetos de exemplo pelos seus
- Adicione links reais do GitHub e demos
- Atualize as tecnologias utilizadas

### Customizar Cores (Opcional)
Edite **src/index.css** nas variáveis CSS:
```css
:root {
  --primary-color: #3498db; /* Sua cor principal */
  --secondary-color: #667eea; /* Sua cor secundária */
  /* ... outras cores */
}
```

## 📱 Funcionalidades Incluídas:

✅ **Design Responsivo** - Funciona em desktop, tablet e mobile
✅ **Navegação Suave** - Menu fixo com scroll suave
✅ **Animações** - Efeitos visuais modernos
✅ **Formulário de Contato** - Sistema de contato funcional
✅ **SEO Otimizado** - Meta tags e estrutura otimizada
✅ **Performance** - Build otimizada com Vite
✅ **Filtro de Projetos** - Organização por categorias
✅ **Timeline de Experiência** - Histórico profissional visual

## 🎯 Próximos Passos:

1. **Personalizar** com suas informações reais
2. **Testar** em diferentes dispositivos
3. **Compartilhar** o link em suas redes profissionais
4. **Atualizar** regularmente com novos projetos
5. **Monitorar** analytics (opcional: Google Analytics)

## 📞 Suporte:

Se encontrar algum problema:
1. Verifique se todas as dependências estão instaladas
2. Confirme se o Node.js está atualizado (versão 18+)
3. Verifique se as configurações do GitHub Pages estão corretas

**Seu portfólio está pronto para impressionar recrutadores! 🚀**