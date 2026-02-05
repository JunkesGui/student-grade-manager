# student-grade-manager

Simple NodeJS REST API with the methods `GET`, `POST`, `PUT` and `DELETE`

## POST
Uses the route `/grades` to recieve the sudent's grade in JSON format. 

### Expected Body:
```JSON
{
    "sutdentName:" "FOO",
    "subject:" "BAR",
    "grade:" "123"
}
```
A UUID is automatically attributed to each new entry made by `POST`.

## GET
Uses the route `/grades` to return a JSON with with all the registered notes.

### Return example:
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
Uses the route `/grades/{ID}` expects the same model as the `POST` method to update an entry from its ID.

## DELETE
Uses the route `/grades/{ID}` to remove an entry from its ID.

--- 

API REST em NodeJS simples com os métodos `GET`, `POST`, `PUT` e `DELETE`

## POST
Utiliza a rota `/grades` para receber um JSON com os dados de nota.

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
