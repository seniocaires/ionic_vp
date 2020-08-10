# Ionic

## Ambiente de desenvolvimento

### Container Ionic

Construa a imagem docker

```
docker build -f Dockerfile-desenvolvimento -t ionic_vp_desenvolvimento .
```

Execute o container

```
docker run -it --rm -v $(pwd):/app -p 8100:8100 -p 8000:8000 ionic_vp_desenvolvimento bash

cd {PATH_PROJETO}

ionic cordova run browser -livereload
```

Acessar http://localhost:8100

### Iniciar um emulador Android com Docker

Execute o container abaixo e acesse http://localhost:6080

```
docker run --privileged -it --rm -p 6080:6080 -p 5554:5554 -p 5555:5555 -e DEVICE="Samsung Galaxy S6" --name android-container budtmo/docker-android-x86-8.1
```

### JSON Generator

https://www.json-generator.com/

```
[
  '{{repeat(20, 20)}}',
  {
    id: '{{index()+1}}',
    price: '{{floating(5, 100, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    name: '{{lorem(1, "words")}}'
  }
]
```