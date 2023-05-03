
Gym Pass Api


## RFs (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar
- [ ] Deve ser possivel se autenticar
- [ ] Deve ser possivel obter o perfil de um user logado
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo user logado
- [ ] Deve ser possivel o user obter seu historico de check-ins 
- [ ] Deve ser possivel o user buscar academias proximas
- [ ] Deve ser possivel o user buscar uma academia pelo nome
- [ ] Deve ser possivel o user realizar check-in em um academia
- [ ] Deve ser possivel validar o check-in de um usuario
- [ ] Deve ser possivel cadastrar uma academia

## RNs (Regras de negocio)

- [ ] O User não deve poder se cadastrar com um email duplicado
- [ ] O User não pode realizar 2 check-ins no mesmo dia
- [ ] O User não pode fazer check-in se não estiver a 100m da academia
- [ ] O Check-In so pode ser valido ate 20m apos criado
- [ ] O Check-In so pode ser valido por Admins
- [ ] A academia so pode ser cadastrar por Admins

## RNFs (Requisitos não funcionais)

- [ ] A senha do User precisa estar criptografada
- [ ] Os dados da aplicação precisam estar em um PostgreSQL
- [ ] Todas as listas de dados precisam estar paginadas com ate 20 itens
- [ ] O User deve ser identificado por um JWT (JSON Web Token)
# gymApps-api
