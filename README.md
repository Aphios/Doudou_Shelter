Doudou Shelter
----------------

Doudou Shelter provides a home for "doudous" ("soft toy companions" in french).
At Doudou Shelter, anyone can adopt a doudou or give one so that it can be later adopted.
This is a fictional service, meaning you only give or adopt some doudou data and not real stuffed toys.

Doudou Shelter is a small website I built for learning purposes.
It uses React.js for the frontend and Node/Express.js for the backend which contains a MongoDb-based API.

---------------------
API Documentation
---------------------

The Doudou Shelter API is a REST API providing data about soft toys.
It could be useful to anyone who needs to access to a free API.
I could also be useful to anyone needing inspiration to name their soft toys !

-----------------------
DATA :

An exemple of resource :
{ "doudous": [
   {    "_id" : "609697696ee2cc78fae3a0f7",
        "name" :  "Emé", 
        "age" : 26,
        "species": "puppet",
        "sex" : "F",
        "softness": 2
    },
    ...
  ]
}

- species contains different varieties of soft toys, e.g. puppets, dogs, cats, leopards, bears, birds, elephants, penguins, etc...
- sex may contain 'F', 'M', 'U' for unknown and 'O' for other
- softness may contain "1" for low softness, "2" for medium softness or 3 for extra softness

---------------------
VERBS

- GET/api/doudous : returns all doudous
- GET/api/doudous/id/x : returns the doudou of id x
- GET/api/doudous/name/x : returns all doudous of name x
- GET/api/doudous/age/x : returns all doudous of age x
- GET/api/doudous/species/x : returns all doudous of species x
- GET/api/doudous/sex/x : returns all doudous of sex x
- GET/api/doudous/softness/x : returns all doudous of softness x
- POST/api/doudous : adds a doudou and sends confirmation message
- PUT/api/doudous/:id : updates a doudou and sends confirmation message
- DELETE/api/doudous/:id : deletes a doudou of id x. This route is only available to application administrator