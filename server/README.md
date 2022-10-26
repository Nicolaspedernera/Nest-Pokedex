<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in Dev mode.

1. Clone the repository.
2. Run:
```
npm install
```
3. Have Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Run Data Base. 
```
docker-compose up -d
```

5. Clone the ```.env.template.``` file and rename the copy ```.env```

6. Fill the variables defined in the ```.env```

7. Run the app on dev:
```
npm run start:dev
```

8. Rebuild Database.
```
http://localhost:3000/api/v2/seed
```


## Stack used.
* MongoDB
* Nestjs 