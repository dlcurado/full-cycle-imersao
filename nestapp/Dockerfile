FROM node:20-slim

WORKDIR /home/node/app

USER node

# Esse comando Linux ficara lendo o arquivo em dev/null
# em um looping infinito por conta do -f
# Essa e a estrategia para que o app nao caia ao
# final de sua inicializacao
CMD [ "tail", "-f", "/dev/null" ]
