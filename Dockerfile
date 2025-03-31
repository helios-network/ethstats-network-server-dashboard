FROM somenickname/python36-node9-nginx:0.0.3

WORKDIR /app

COPY package.json ./

ADD . .

RUN npm install

RUN npm run build

### Stage 2: Servir avec Nginx
FROM nginx:1.15-alpine
WORKDIR /usr/share/nginx/html

COPY --from=0 /app/config.js .
COPY --from=0 /app/set-env-vars.js .
COPY --from=0 /app/entrypoint.sh .
COPY --from=0 /app/dist .
COPY --from=0 /app/maintenance ./maintenance
COPY --from=0 /app/.htaccess ./.htaccess

CMD ["nginx", "-g", "daemon off;"]
