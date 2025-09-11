# silasogis.com — Landing Page (PT/EN)

Site estático bilíngue para divulgação profissional como Desenvolvedor GIS.

## Desenvolvimento local

Abra o `index.html` no navegador. Os estilos e scripts estão em `styles.css` e `script.js`.

## Deploy automático na Hostinger (FTP)

Este repositório inclui um workflow do GitHub Actions que envia os arquivos via FTP/FTPS para a Hostinger quando você fizer push na branch `main`.

### Passo 1 — Criar conta FTP na Hostinger

- No hPanel: Sites (ou Websites) → Gerenciar → Arquivos → Contas FTP (ou FTP Accounts)
- Crie uma conta FTP dedicada para o domínio `silasogis.com`
- Anote:
  - **Servidor/Host** (ex.: `ftp.hostinger.com` ou host específico do seu plano)
  - **Usuário** e **Senha** da conta FTP
  - **Diretório raiz do site**:
    - Geralmente `public_html/`
    - Em alguns planos: `domains/silasogis.com/public_html/`

### Passo 2 — Configurar Secrets no GitHub

No repositório → Settings → Secrets and variables → Actions → New repository secret. Adicione:

- `FTP_SERVER`: host do FTP (ex.: `ftp.hostinger.com`)
- `FTP_USERNAME`: usuário FTP
- `FTP_PASSWORD`: senha FTP
- `FTP_PORT`: `21`
- `FTP_SERVER_DIR`: diretório remoto alvo, por exemplo:
  - `/public_html/` (padrão)
  - ou `/domains/silasogis.com/public_html/` (se aplicável)

O workflow usa FTPS (explícito). Se o seu plano não suportar FTPS, mude `protocol: ftps` para `ftp` no arquivo `.github/workflows/deploy.yml`.

### Passo 3 — Estrutura do repositório

- `index.html`
- `styles.css`
- `script.js`
- `.github/workflows/deploy.yml`

### Passo 4 — Publicar

- Faça commit e push para `main`
- Acompanhe a execução em: Actions → "Deploy to Hostinger via FTP"
- Após sucesso, aguarde alguns minutos e acesse `https://silasogis.com`

## DNS do domínio `silasogis.com`

Garanta que o domínio aponta para a Hostinger:

- Se você usa DNS da Hostinger: defina os nameservers da Hostinger no seu registrador
- Se você usa DNS externo (Cloudflare, etc.): crie um registro `A` apontando para o IP do seu servidor Hostinger
- No hPanel, adicione o domínio ao seu plano (Websites → Adicionar site) e aponte para o diretório correto
- Ative SSL gratuito (Certificado SSL → Configurar Let’s Encrypt) e force HTTPS se desejar

## Personalizações opcionais

- Substitua o `og:image` em `index.html` por uma imagem sua (1200×630)
- Ajuste cores e tipografia em `styles.css`
- Edite os textos no objeto de traduções em `script.js`

## Suporte

Se o deploy falhar, verifique:

- Diretório remoto (`FTP_SERVER_DIR`) correto
- Credenciais e host FTP
- Firewall/FTPS no provedor
- Logs do job em GitHub Actions

