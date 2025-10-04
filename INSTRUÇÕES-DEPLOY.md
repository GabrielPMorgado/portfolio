# 🚀 Instruções Rápidas para Deploy

## ⚠️ **IMPORTANTE: Você precisa criar o repositório no GitHub primeiro!**

### **1. Criar Repositório no GitHub**
1. Acesse: https://github.com/new
2. Nome do repositório: `portfolio`
3. Marque como **Público**
4. **NÃO marque nenhuma opção adicional** (deixe tudo desmarcado)
5. Clique em **"Create repository"**

### **2. Após criar o repositório, execute estes comandos:**

```bash
# Conectar com o repositório criado
git remote add origin https://github.com/GabrielPMorgado/portfolio.git

# Fazer push para o GitHub
git push -u origin main
```

### **3. Configurar GitHub Pages**
1. No repositório do GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **GitHub Actions**

### **4. Criar o arquivo de deploy automático**
Execute este comando para criar o workflow:

```bash
mkdir -p .github/workflows
```

E então crie o arquivo `.github/workflows/deploy.yml` com o conteúdo de deploy.

### **5. Fazer o deploy final**
```bash
git add .
git commit -m "feat: adicionar workflow de deploy automático"
git push
```

## 🎯 **Após alguns minutos, seu site estará disponível em:**
`https://GabrielPMorgado.github.io/portfolio/`

---

## 🔧 **Se der algum erro:**

1. **Verifique se o repositório foi criado** no GitHub
2. **Confirme o nome exato** do repositório
3. **Verifique se está logado** no GitHub
4. **Tente usar HTTPS** ao invés de SSH

## 📞 **Status Atual do Projeto:**
✅ Código commitado localmente  
✅ Build funcionando (34.07 kB CSS + 201.28 kB JS)  
✅ Tema escuro aplicado  
✅ Ícones de contato adicionados  
⏳ **Aguardando criação do repositório no GitHub**  

**Seu portfólio está pronto para o mundo! 🌟**