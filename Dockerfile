FROM node:16.3-alpine as build
WORKDIR /app
COPY . ./
RUN npm install -y
COPY . ./ 
RUN npm run build
FROM nginx
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]