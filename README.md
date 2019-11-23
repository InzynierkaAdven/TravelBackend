# TravelBackend
Travel'n chill mobile app - backend

Base link: https://travelandchill.herokuapp.com/ 

### Cities DB example

```
{
    
    "basic_info":{
        "country": "Poland",
        "city": "Łódź", 
       "location": {
            "latitude":51.7732033,
            "longtitude": 19.4105532
        }
    },
    
    "hotels":[{
        "name": "DoubleTree by Hilton", 
        "num_of_stars": 4, 
        "avg_price": {"amount": 350, "currency": "PLN"},
        "location": {
            "latitude":51.7732033,
            "longtitude": 19.4105532
        },
        "address": {
            "street": "Mickiewicza",
            "number": 8
        },
        "comments": [{"author": "Adven97", "content" :"Good hotel"}], 
        "grades": [{"author": "Adven97", "rate": 4}]
    }],
    
    "foods":[{
        "name": "Ato Ramen",
        "type" : "Ramen bar", 
        "location": {
            "latitude":51.7609318,
            "longtitude": 19.4562637
        },
        "address": {
            "street": "Piotrkowska",
            "number": 140
        },
        "comments": [{"author": "Adven97", "content" :"Fantastic Ramen, best in the city!"}], 
        "grades": [{"author": "Adven97", "rate": 5}]
    }],
    
    "events":[{
        "name": "Wixapol",
        //missing duration, problem with Date field
        "location": {
            "latitude": 51.7612665,
            "longtitude": 19.459608
        },
        "address": {
            "street": "Piotrkowska",
            "number": 138
        },
        
        "price": {"amount": 20, "currency": "PLN"},
		"comments": [] 
    }],
    
    "atractions":[{
        "name": "Manufaktura",
        "location": {
            "latitude": 51.7813524,
            "longtitude": 19.4421527
        },
        "address": {
            "street": "Drewnowska",
            "number": 58
        },
        "price": {"amount": 20, "currency": "PLN"},
        "comments": [{"author": "Adven97", "content" :"good place for hanging out"}],
         "grades": [{"author": "Adven97", "rate": 5}]
    }],
    "comments": [{"author": "Adven97", "content" :"SPANIEALE MIASTO OGULEM "}],
   "grades": [{"author": "Adven97", "rate": 2}]
    
    
}
```

### User DB example

```
{
    "first_name": "Shrek",
    "last_name": "XD",
    "nick": "shrek",
    "email": "test1234@gmail.com",
    "password": "shrek"
}
```


### Comment example

```
{
 	"name": "Manufaktura",
        "author": "Adven97", 
        "content" :"chujnia xd"
}
````

### Rate example

```
{
 	"name": "Manufaktura",
        "author": "Adven97", 
        "rate": 3
}
````
