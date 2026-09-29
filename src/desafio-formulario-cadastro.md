# Desafio: Formulário de Cadastro

Monte um formulário de cadastro em React aprendendo a usar os hooks **useState** e **useEffect**.

## Tarefa

Crie um formulário de cadastro com:

- Nome [x]
- E-mail [x]
- Senha [x]
- Confirmação de senha [x]

## Regras

1. Use **useState** para controlar todos os campos. [x]
2. O botão **Cadastrar** deve ficar desabilitado enquanto os dados forem inválidos. [x]
3. Use **useEffect** para validar os dados sempre que qualquer campo mudar. [x]
4. Mostre mensagens de erro abaixo dos campos quando necessário:
  - Nome com menos de 3 caracteres [x]
  - E-mail inválido [x]
  - Senha com menos de 6 caracteres [x]
  - Senhas diferentes [x]
5. Quando o formulário estiver válido, mostre: *Formulário válido! Pronto para cadastrar. [x]*
6. No envio, não precisa fazer requisição. Apenas mostre os dados cadastrados no console. [x]



## Bônus

Depois que o formulário estiver funcionando:

- Adicione um contador de quantos caracteres foram digitados no nome.
- Use **useEffect** para mudar o `document.title` conforme o estado do formulário:
  - "Preencha seu cadastro"
  - "Cadastro pronto!"



## Objetivo do exercício

Fazer você entender que o **useState** guarda e altera os dados do componente, e o **useEffect** reage a mudanças nesses dados e executa efeitos colaterais.