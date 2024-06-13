# Aplicación Web para películas

### Instalación> [!NOTE]

> Node > 18.0.0
> Mongo > 18.0.0
> Docker > 18.0.0

### Instalación de MongoDB con Docker Compose

```sh
docker-compose exec mongo bash

mongosh -u root -p example
use admin
db.createUser({
  user:"alvaro",
  pwd: "S2_7m_A2_5z_c3",
  roles:["dbOwner"]
})
use movie-db
db.createUser({
  user:"alvaro",
  pwd: "S2_7m_A2_5z_c3",
  roles:["dbOwner"]
})
```
