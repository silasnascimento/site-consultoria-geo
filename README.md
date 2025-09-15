# silasogis.com — Landing Page (PT/EN)

Site estático bilíngue para divulgação profissional como Desenvolvedor GIS.

## Desenvolvimento local

Abra o `index.html` no navegador. Os estilos e scripts estão em `styles.css` e `script.js`.

## Deploy automático na Hostinger

Este site está configurado para deploy automático através da funcionalidade integrada do Hostinger que conecta diretamente com o repositório Git.

### Configuração atual

- **Deploy automático**: Configurado via hPanel do Hostinger
- **Repositório**: Conectado diretamente ao GitHub
- **Branch**: `main`
- **Trigger**: Push automático quando há commits na branch principal

### Estrutura do repositório

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

### Publicar alterações

- Faça commit e push para `main`
- O deploy acontece automaticamente via Hostinger
- Aguarde alguns minutos e acesse `https://silasogis.com`

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

Se o deploy automático falhar, verifique:

- Conexão do repositório no hPanel do Hostinger
- Configuração da branch `main`
- Logs de deploy no painel da Hostinger

