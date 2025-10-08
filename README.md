# student-grade-manager

API REST em NodeJS simples com os métodos `GET`, `POST`, `PUT` e `DELETE`

## POST
Utiliza a rota `/grades` para receber um JSON modelo dos dados de nota.

### Modelo esperado de Body:
```JSON
{
    "sutdentName:" "FOO",
    "subject:" "BAR",
    "grade:" "123"
}
```
Um UUID é atribuído automaticamente para cada nova entrada do `POST`.


## GET
Utiliza a rota `/grades` para retornar um JSON das notas cadastradas.

### Exemplo de retorno:
```JSON
[   
    {
        "id:" "widnehao10",
        "sutdentName:" "FOO",
        "subject:" "BAR",
        "grade:" "123"
    },
    {
        "id:" "sicpa392dn",
        "sutdentName:" "FOOBAR",
        "subject:" "GAZ",
        "grade:" "321"
    }
]
```

## PUT
Utiliza a rota `/grades/{ID}` e espera um JSON com as mesmas regras do `POST` para atualizar uma entrada a partir de seu ID.

## DELETE
Utiliza a rota `/grades/{ID}` para remover uma entrada a partir de seu ID.
