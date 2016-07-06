# football-react
React JS front-end for a football data service

### Start Application

Start application and server using
```
npm install
npm install jspm -g
jspm install
npm start
```

Test the UI from a browser
```
http://<hostname>:8080
```

Test the API
```
GET http://<hostname>:8080/api
```

### Teams API

### Request
```
GET: http://<hostname>:8080/api/team
```

### Response
```
{
    [
        {
            "id": 1,
            "name": "tottenham hotspur",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
        },
        {
            "id": 2,
            "name": "Manchester United FC",
            "badgeUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
        }
    ]
}
```

### Goals Scored API

### Request
```
GET: http://<hostname>:8080/api/team/{teamId}/goals
```

### Response
```
{
    [
        {
            "date": "2015-11-03T19:45:00Z",
            "goalsScored": "2",
            "goalsConceded": "5"
        },
        {
            "date": "2015-11-103T19:45:00Z",
            "goalsScored": "4",
            "goalsConceded": "2"
        }
    ]
}
```


