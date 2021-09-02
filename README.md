# Vitrio | Frontend Developer Challenge

Bem vindo, neste teste vamos avaliar seus conhecimentos em **React com Typescript**, **SCSS** e **Responsividade**.

## Instruções

- Crie um repositório privado no bitbucket (utilizando este repositório como base) e libere acesso do repositório para o e-mail **dev@vitrio.com.br**

- Trabalhe dentro da estrutura da pasta **vitrio-frontend-challenge**
  - Esta estrutura é uma estrutura padrão cra (create react app) com typescript e sass

## Layout

O layout está dentro da pasta **layout**, neste ponto avaliaremos como você seguirá o layout disposto em formato não aberto para entendermos como você lida com dificuldades que possam aparecer neste sentido, desde o espaçamento até as cores que são utilizadas no layout.

Dentro do layout temos 2 partes:

1. Layout de catalogo/vitrine

- Aqui avaliaremos especificamente:
  - A consulta dos items de catalogo pelo endpoint: https://bitbucket.org/vitriosdev/vitrio-dev-test/raw/master/data/catalogo.json
    - **importante:** avaliaremos o consumo do catalogo por este endpoint
  - Como o código foi criado e estruturado
  - Se foi validado os eventos que ocorrem nos cards de produto (exemplo: hover para exibição de alguma informação)
  - Se foi feito as verificações para exibição de preço ou do botão de 'consulte'

2. Layout de newsletter

- Aqui avaliaremos especificamente:
  - Como o formulário foi feito semânticamente
  - Se existe e como foi feita as validação de campos
  - Se ao submeter/enviar o formulário, algum efeito ou mensagem de sucesso ou erro de validação aparece de forma visual e intuitiva

**Dica/Importante**: aqui avaliaremos cada parte de forma separada, por isto, sugerimos que seja criado dois componentes, sendo um componente para catalogo e um componente para newsletter mas que ambos sejam importados e utilizados na mesma página.

## Critérios técnicos que avaliaremos do projeto todo

- Uso do git e padronização dos commits

  - Sugerimos a utilização de micro commits conforme for avançando no projeto e **[mensagens semânticas de commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)**

- Organização dos arquivos do projeto

- Construção de **HTML** e **SCSS** estruturado e organizado

- Boas práticas na utilizaçao de **JavaScript** e **TypeScript**

- Responsividade (mobile, tablet e desktop)

## Nossas dicas para o desenvolvimento do projeto

1. Antes de iniciar o desenvolvimento, avalie o layout e tente mapear e entender o que o layout precisa em relação a eventos (hover, condicional para exibição de dados) e quais componentes você precisará criar (nós recomendamos que o card do produto seja um componente proprio por exemplo)
2. **Não** utilize nenhum **framework de estilização** (exemplo: boostrap, materialize...), vamos avaliar o seu nível de conhecimento em css/scss
3. Tente seguir boas práticas de código, avaliaremos a hierarquia utilizada tanto no HTML quanto no SCSS. Em Javascript, avaliaremos como foi feito a criação e utilização de variaveis e código
4. Recomendamos que haja separação de responsabilidade dentro dos componentes, tanto de estilização quanto de customização de código javascript que seja criado para fazer uso de condicionais por exemplo.
5. A utilização de tipagens via typescript é importante e será avaliada
6. Para a parte de formulário avaliaremos a utilização de tags nativas do HTML, tanto para validação quanto para o envio do formulário.
7. Preencha o arquivo de [Feeback do projeto](FEEDBACK_PROJETO.md) contando para nós o que fez, o que não fez e a sua avaliação sobre o teste

## Não conseguiu finalizar o teste?

Não tem problemas, envie mesmo assim, nós vamos avaliar o teste mesmo que não esteja finalizado dando prioridade aos seguintes pontos:

- Como o projeto ficou estruturalmente e se foi utilizado boas práticas
- Qual lógica você seguiu no código para resolver, contornar os problemas ou implementações que precisou fazer
- Qual prioridade você deu no desenvolvimento do layout
- Quais detalhes você implementou (exemplo: hover, eventos de validação...)

## Dúvidas ?

Caso tenha alguma dúvida, envie um e-mail para **dev@vitrio.com.br** com o titulo contendo o prefixo: `[Frontend Challenge]`

Exemplo: `[Frontend Challenge] posso utilizar vue ?`

# Boa sorte ^^
# apiMock
