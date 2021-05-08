doudou-api v1.0
----------------

doudou-api is a REST API providing data about soft toys.
("doudou" means "soft toy companion" in french)

It's intendend as a fun student project.
It could be useful to anyone who needs to access to a free API.
I could also be useful to anyone needing inspiration to name their soft toys !

--------------------------
DATA :

An exemple of resource :
{ "doudous": [
   {    "id" : 001,
        "name" :  "Emé", 
        "age" : "26",
        "species": "puppet",
        "sex" : "F",
        "softness": "2"
    },
    ...
  ]
}

- species contains different varieties of soft toys, e.g. puppets, dogs, cats, leopards, bears, birds, elephants, penguins, etc...
- sex may contain 'F', 'M', 'U' for unknown and 'O' for other
- softness may contain "1" for low softness, "2" for medium softness or 3 for extra softness

---------------------
VERBS

GET/doudous : returns all doudous
GET/doudous?p=x : returns page X, containing 10 doudous
GET/doudous?id=x : returns the doudou of id x
GET/doudous?name=x : returns the doudou of name x
GET/doudous?age=x : returns all doudous of age x
GET/doudous?species=x : returns all doudous of species x
GET/doudous?sex=x : returns all doudous of sex x
GET/doudous?softness=x : returns all doudous of softness x
POST/doudous : adds a doudou and sends confirmation message
PUT/doudous : updates a doudou based on the id in the request, and sends confirmation message