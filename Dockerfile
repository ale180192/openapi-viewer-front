FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# docker build --rm -t openapi-front-v1 .
# docker run -d -p 4200:80 --name openapi-front-v1 openapi-front-v1
# docker exec -it ID-CONTAINER ls /usr/share/nginx/html
# docker ps
# docker container stop 3426914376a2
# docker container rm 3426914376a2
