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
- [ ] `privacidade.html` e `termos.html` publicados hoje mostram só um aviso
      curto ("estamos finalizando..."), porque o rascunho detalhado (Prompt 3)
      tinha vários `[COLCHETES]` visíveis em produção (razão social, CNPJ,
      endereço, encarregado LGPD, provedores, prazos de retenção). O rascunho
      completo, seção por seção, está guardado abaixo em "Rascunho jurídico
      completo" — ele volta ao ar assim que existir CNPJ e revisão jurídica.
      — Zanzukny + jurídico

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

## Rascunho jurídico completo (guardado, não publicado)

O texto abaixo é o rascunho detalhado que estava em `privacidade.html` e
`termos.html` antes de 2026-08-26. Foi retirado do ar porque tinha
`[COLCHETES]` visíveis em produção (razão social, CNPJ, endereço, encarregado
LGPD, provedores, prazos). Volta a ser publicado assim que existir CNPJ e
revisão jurídica — não é aconselhamento jurídico, foi escrito para revisão de
um advogado antes do primeiro cliente pagante.

### Política de privacidade

**1. Quem somos** — O Toquei é operado por **[RAZÃO SOCIAL]**, inscrita no
CNPJ **[NÚMERO]**, com sede em **[ENDEREÇO]**. Somos o controlador dos dados
descritos abaixo. Para qualquer assunto sobre dados pessoais, incluindo
pedidos de acesso, correção ou exclusão, o canal é **[E-MAIL DO
ENCARREGADO]**. Respondemos em até 15 dias.

**2. Quais dados tratamos** — Da empresa que usa o Toquei: nome, e-mail,
telefone, senha (armazenada de forma criptografada), razão social, CNPJ,
chave PIX, e os dados de uso do sistema. Dos clientes da empresa usuária:
nome, razão social, CNPJ ou CPF, telefone, e-mail, e o histórico de faturas
em aberto e pagas. Conteúdo das conversas: as mensagens trocadas entre a
empresa usuária e os clientes dela pelos canais conectados ao Toquei,
incluindo WhatsApp. Dados técnicos: endereço IP, tipo de navegador e
registros de acesso, usados para segurança e diagnóstico.

**3. Para que usamos** — Mostrar à empresa usuária quais faturas estão em
aberto, vencidas ou pagas. Enviar aos clientes dela os lembretes ("toques")
que ela configurar. Gerar o link de pagamento e a chave PIX de cada fatura.
Identificar, a partir do texto das mensagens trocadas com os clientes,
situações que pedem atenção — como um pedido de segunda via. Esse recurso,
chamado Piloto, funciona hoje com regras internas de reconhecimento de
texto, sem enviar o conteúdo das conversas a nenhum serviço externo de
inteligência artificial. O Piloto apenas sugere; nenhuma mensagem é enviada
sem confirmação de uma pessoa. A empresa usuária pode desligá-lo a qualquer
momento em Empresa › Piloto. Se isso mudar no futuro — por exemplo, se
passarmos a usar um provedor externo de IA — esta política será atualizada
antes da mudança valer, com o provedor nomeado explicitamente. Manter a
segurança do sistema e cumprir obrigações legais.

**4. Com que base legal** — Tratamos os dados da empresa usuária para
execução do contrato firmado com ela. Tratamos os dados dos clientes dela e
o conteúdo das conversas com base no legítimo interesse de viabilizar a
cobrança regular de dívidas existentes, e por conta da relação comercial
pré-existente entre a empresa usuária e o cliente dela. A empresa usuária é
responsável por ter uma relação legítima com cada contato que cadastra no
Toquei e por não usar o serviço para mensagens não solicitadas.

**5. Com quem compartilhamos** — Não vendemos dados pessoais. Compartilhamos
apenas com prestadores necessários ao funcionamento do serviço, que atuam
como operadores. Hoje o Piloto analisa o conteúdo das conversas localmente,
com regras internas — nenhum provedor de inteligência artificial recebe esse
conteúdo, por isso não há linha de "provedor de IA" na tabela abaixo. Se isso
mudar, o operador será nomeado aqui antes da mudança valer.

| Prestador | Para quê | Onde ficam os dados |
|---|---|---|
| [PROVEDOR DE WHATSAPP / BSP] | envio e recebimento de mensagens | [PAÍS] |
| [HOSPEDAGEM / BANCO DE DADOS] | armazenamento e execução do sistema | [PAÍS] |
| [PROCESSADOR DE PAGAMENTO] | cobrança da assinatura | [PAÍS] |

Se algum desses prestadores estiver fora do Brasil, a transferência
internacional ocorre com as garantias exigidas pela LGPD.

**6. Por quanto tempo guardamos** — Dados de cadastro e faturas: enquanto a
conta existir, e por [PRAZO] após o encerramento, para cumprimento de
obrigações legais e fiscais. Conteúdo de conversas: [PRAZO — sugestão: 12
meses] a contar da última mensagem. Registros de acesso: 6 meses, conforme o
Marco Civil da Internet. Após o pedido de exclusão, apagamos os dados em até
30 dias, exceto o que a lei exigir guardar.

**7. Seus direitos** — Qualquer pessoa cujos dados estejam no Toquei —
inclusive clientes da empresa usuária — pode pedir confirmação do
tratamento, acesso, correção, anonimização, portabilidade, informação sobre
compartilhamentos, e exclusão. Também pode se opor ao tratamento baseado em
legítimo interesse e pedir para não receber mais mensagens. O canal é
**[E-MAIL DO ENCARREGADO]**. Se o pedido for sobre dados cadastrados por uma
empresa usuária, podemos precisar encaminhá-lo a ela, e avisaremos quem fez
o pedido.

**8. Segurança** — Usamos conexão criptografada, senhas armazenadas com
hash, controle de acesso por usuário e registro de atividades. Nenhum
sistema é totalmente imune — em caso de incidente relevante, comunicaremos
os titulares e a ANPD nos prazos legais.

**9. Cookies** — Usamos apenas os cookies necessários para manter a sessão.
Ainda não usamos nenhuma ferramenta de analytics com cookie neste site.

**10. Mudanças** — Se esta política mudar de forma relevante, avisamos por
e-mail e dentro do produto antes de a mudança valer.

### Termos de uso

**1. O que é o Toquei** — O Toquei é um sistema de controle de contas a
receber que organiza faturas e envia lembretes aos clientes da empresa
usuária. O Toquei não é instituição de pagamento. Não emitimos boleto, não
processamos pagamento e não retemos dinheiro. A emissão e o recebimento
continuam com o banco, o emissor ou a maquininha que a empresa usuária já
utiliza.

**2. Conta e responsabilidade** — A empresa usuária é responsável pela
veracidade dos dados que cadastra, pelo sigilo das credenciais e pelos atos
dos usuários que autorizar. Ao cadastrar contatos de clientes, a empresa
usuária declara que possui relação comercial legítima com eles e que os
dados foram obtidos licitamente.

**3. Uso aceitável** — É proibido usar o Toquei para: enviar mensagens a
quem não tem relação comercial com a empresa usuária; cobrar dívida
inexistente, já paga ou prescrita; ameaçar, constranger, expor ou
ridicularizar o devedor, ou cobrar em horário e frequência abusivos — o
Código de Defesa do Consumidor proíbe expressamente; enviar conteúdo
enganoso, ilegal ou que viole direitos de terceiros. O descumprimento
permite suspensão imediata da conta.

**4. Teste grátis, preço e cancelamento** — O teste grátis dura 14 dias, sem
cobrança e sem cartão de crédito. Ao fim do período, sem contratação, a
conta passa a somente leitura: os dados continuam acessíveis, mas o envio de
toques e a criação de faturas ficam bloqueados. Nada é apagado. O plano
custa R$ 97 por mês, sem fidelidade. O cancelamento pode ser feito a
qualquer momento na própria conta e vale ao fim do ciclo já pago, sem multa.
Não há reembolso proporcional de período já utilizado, salvo exigência
legal. Mudanças de preço só valem para ciclos futuros e serão avisadas com
30 dias de antecedência.

**5. Disponibilidade** — Trabalhamos para manter o serviço no ar, mas não
garantimos funcionamento ininterrupto. Pode haver interrupção para
manutenção, falha de terceiros (como o WhatsApp) ou motivo de força maior.
Avisaremos as manutenções programadas com antecedência.

**6. Limite de responsabilidade** — O Toquei é ferramenta de organização e
comunicação. Não garantimos recebimento de valores nem redução de
inadimplência. A decisão de cobrar, o conteúdo aprovado e a relação com o
cliente final são da empresa usuária. Salvo dolo ou culpa grave, nossa
responsabilidade fica limitada ao valor pago pela empresa usuária nos 12
meses anteriores ao evento.

**7. Encerramento e dados** — Ao encerrar a conta, a empresa usuária pode
exportar seus dados por 30 dias. Depois disso, os dados são excluídos
conforme a política de privacidade.

**8. Alterações e foro** — Mudanças relevantes nestes termos serão avisadas
com antecedência. Aplica-se a lei brasileira, com foro em **[CIDADE/UF]**.

## Resolvido

(mover para cá, com a data, quando concluir)

---

## Ideias para depois

Decisões de produto discutidas e adiadas de propósito. Não são pendências de
lançamento. Reavaliar apenas quando o gatilho de cada uma for atingido.

**Contexto que vale para todas:** hoje não há cliente pagante. Qualquer coisa
aqui compete com vender o produto que já existe, e o pior desfecho é consumir
meses de trabalho enquanto o que está pronto não é vendido para ninguém.

### 1. Contas a pagar

**Status:** adiado.
**Gatilho para reavaliar:** 30 a 50 clientes pagantes em contas a receber.

Contas a pagar não é contas a receber espelhado — é outro produto. Tem aprovação
em níveis, agendamento de pagamento, conciliação bancária, previsão de saída e
rateio por centro de custo. O risco também muda de natureza: em receber, o pior
caso é não entrar dinheiro; em pagar, o pior caso é sair dinheiro errado. Isso
exige trilha de auditoria e segregação de funções desde o primeiro dia.

Regra de controle interno que precisa existir antes de qualquer linha de código:
**quem cadastra fornecedor não pode ser quem aprova o pagamento.** É a primeira
coisa que um contador pergunta, e sem isso o módulo não entra em empresa de porte.

Observação de mercado: no Brasil, a fonte mais forte de dados para contas a pagar
não é a rede entre clientes, é o **XML da NF-e** e a linha digitável do boleto —
a empresa já recebe os dois por e-mail. Se um dia houver módulo de AP, importar
XML provavelmente cobre mais casos do que a rede nos primeiros anos.

### 2. Efeito de rede entre duas empresas usuárias

**Status:** adiado, mas é a ideia mais valiosa da lista.
**Gatilho para reavaliar:** observar, nos dados, duas contas pagantes que
transacionam entre si.

Cobrança é via de mão dupla: todo toque enviado já toca em outra empresa. Isso é
raro e vale explorar — mas uma funcionalidade que só brilha quando as duas pontas
usam o produto não vale nada sem densidade, e densidade em B2B leva anos.

**Escopo mínimo quando chegar a hora (uma tela, não um produto):** quando a
empresa que recebe o toque também for cliente do Toquei, o toque vira uma fatura
a pagar **já preenchida** na conta dela, com um clique para aceitar. O valor não
é "gerenciar contas a pagar" — é **não digitar nada**. Digitação é o que todo
mundo odeia e o que nem planilha nem concorrente resolvem.

Efeito colateral desejado: quem recebe o toque sem ter conta percebe que poderia
ter aceito com um clique, e a própria mensagem carrega o convite. Laço viral de
graça.

**Comportamento das notificações (já definido):**
- Empresa destinatária sem Toquei — mensagem normal pelo WhatsApp, assinada como
  Toquei. É o que já acontece hoje.
- Empresa destinatária com Toquei — a mesma mensagem chega pelo WhatsApp, e dentro
  do app a fatura aparece pronta para aceitar. Nunca troque o canal.

### 3. Módulos, permissões e login (decisão tomada)

Se e quando houver contas a pagar, **não** criar dashboard separado nem produto
separado. A estrutura é:

- **Um login por pessoa, sempre.** Login compartilhado destrói a trilha de
  auditoria, e em contas a pagar isso é inaceitável.
- **Permissão por módulo**, atribuída pelo administrador: acesso a Receber, a
  Pagar, ou aos dois.
- Quem tem os dois vê um alternador no topo. Mesma interface, mesma navegação,
  mesmos componentes — dashboard separado significa dois designs, dois conjuntos
  de bugs e duas dívidas técnicas.

### 4. Chat próprio (decidido: não fazer)

**Status:** descartado. Só reabrir se houver mudança relevante na política ou no
preço da API do WhatsApp.

Chat próprio exige que a outra empresa entre no app para ler. Ninguém vai fazer
isso — e a pessoa que deve dinheiro é justamente a que menos quer abrir mais um
lugar para ser cobrada. Mensagem que ninguém lê não cobra ninguém. O WhatsApp
funciona porque já está aberto no celular de todo mundo, o dia inteiro. É a razão
de o produto funcionar.

**Caminho correto:** manter Conversas como caixa de entrada do WhatsApp, ao lado
do contexto financeiro. Quando as duas empresas forem clientes, **enriquecer a
mesma thread** — a mensagem continua chegando no WhatsApp, mas dentro do Toquei
aquela conversa ganha os botões de aceitar a fatura, contestar valor ou propor
data. O canal é do WhatsApp; a inteligência é nossa.

**Cuidado econômico a estudar antes de escalar:** a API oficial cobra por conversa
iniciada pela empresa e exige template aprovado fora da janela de 24 horas. Isso
afeta a margem do plano de R$ 97 e precisa entrar na conta antes de ter muitos
clientes. Chat próprio não resolve isso — só troca um custo por engajamento zero.

---

**Regra desta seção:** nada aqui vira tarefa sem que o gatilho correspondente
tenha sido atingido e registrado com data. Ao reavaliar, escreva embaixo do item
o que mudou e qual foi a decisão.
