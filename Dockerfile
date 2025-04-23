FROM postgres:latest AS database
COPY ./sql/init.sql /docker-entrypoint-initdb.d/

FROM node:23-slim AS backend
ENV NODE_ENV=production
WORKDIR /app
COPY . /app
WORKDIR /app/backend
RUN npm install
RUN npm install --prefix ../frontend
RUN npm run build-frontend
EXPOSE 3000
ENTRYPOINT ["npx", "ts-node", "index.js"]

FROM nginx:stable AS nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=backend /app/backend/dist /usr/share/nginx/html
EXPOSE 80

