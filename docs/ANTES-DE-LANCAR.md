# Antes de lançar

Pendências que precisam estar resolvidas antes de o Toquei receber o primeiro
cliente pagante. Nada aqui é opcional.

Formato: `- [ ] item — por quê — quem resolve`
Marque `[x]` quando resolver, mas **não apague a linha** — o histórico importa.

---

## Bloqueadores (não pode cobrar de ninguém sem isso)

- [ ] Formulário do site não envia nada — hoje é página de testes, os dados
      digitados se perdem. Definir destino (Formspree, Web3Forms ou função na
      Vercel) e garantir que alguém leia a caixa todo dia. — Zanzukny
- [ ] Mensagem de sucesso do formulário não pode prometer conta criada
      enquanto não houver cadastro automático. — dev
- [ ] Abrir empresa (MEI ou ME) — sem CNPJ, o controlador dos dados é pessoa
      física, com nome e endereço pessoal expostos na política. — Zanzukny
- [ ] Preencher razão social e CNPJ no rodapé e remover qualquer placeholder. — dev
- [ ] Política de privacidade completa: controlador, dados de terceiros
      (clientes da empresa usuária), leitura de conversas pelo Piloto,
      operadores nomeados, retenção, canal LGPD. — Zanzukny + jurídico
- [ ] Revisão jurídica da política e dos termos. — jurídico
- [ ] Definir e implementar o teste grátis de 14 dias: campo `trial_termina_em`,
      aviso no app a partir de 3 dias restantes, e comportamento no dia 15
      (somente leitura — nunca apagar dados nem bloquear acesso). — dev
- [ ] Meio de pagamento funcionando e nota fiscal sendo emitida. — Zanzukny
- [ ] E-mail `contato@toquei.app` existindo e sendo lido de verdade. — Zanzukny
- [ ] Se o Piloto passar a usar um provedor de IA/LLM de verdade, atualizar a
      política de privacidade para nomear o provedor e declarar a
      configuração de não-treinamento. Hoje o Piloto é 100% regras internas,
      sem terceiro envolvido. — dev
- [ ] `privacidade.html` e `termos.html` existem como rascunho (Prompt 3) mas
      têm vários `[COLCHETES]` pendentes (razão social, CNPJ, endereço,
      encarregado LGPD, provedores, prazos de retenção) e precisam de revisão
      jurídica completa antes do primeiro cliente pagante. — Zanzukny + jurídico

## Marca e domínio

- [ ] Registrar o domínio definitivo e apontar como URL principal, com 301 do
      `.vercel.app`. — Zanzukny
- [ ] Busca de marca no INPI, classes 9 e 42, antes de investir na identidade. — Zanzukny
- [ ] Decidir se o registro será "Toquei" isolado ou composto. — Zanzukny

## Produto

- [ ] WhatsApp conectado via API oficial — sem isso o produto não entrega o que
      promete. — dev
- [ ] Confirmar se o mockup do site reflete a tela real do app (rótulos,
      estados, botões). — dev
- [ ] Importação de faturas por planilha: existe ou está marcada como "em breve"
      no site? As duas coisas não podem divergir. Hoje o app real não tem essa
      importação implementada — o passo 1 de "Como você começa" no site foi
      marcado como "em breve" para não prometer o que não existe. — dev
- [ ] Remover todos os resquícios de `receb` (senhas de teste, seeds, variáveis). — dev
- [ ] Link "Entrar" do menu do site aponta para `#` com um TODO — decidir e
      preencher a URL real do app em produção. — dev

## Lançamento técnico

- [ ] `og:image` 1200x630, `og:title`, `og:description`, `twitter:card` — hoje o
      link compartilhado no WhatsApp chega sem miniatura (não existe imagem
      1200x630 gerada; título/descrição já estão preenchidos). — dev
- [ ] `<link rel="canonical">` aponta para `https://toquei-site.vercel.app/`
      (URL de preview atual) — trocar para o domínio final assim que existir. — dev
- [ ] Favicon SVG + `apple-touch-icon` 180x180. — dev
- [ ] `robots.txt` e `sitemap.xml`, confirmando que não ficou `noindex` de preview. — dev
- [ ] Eventos de conversão: clique em CTA, início e envio do formulário, uso do
      simulador. Exige acesso ao painel da Vercel (Analytics/Plausible), que
      não estava disponível nesta sessão. — dev
- [ ] Lighthouse mobile: LCP < 2,5s e CLS < 0,1. — dev
- [ ] Zero scroll horizontal em 360, 390, 414, 768, 1024 e 1440. — dev

## Resolvido

(mover para cá, com a data, quando concluir)
