# Stage 1: Compile and Build angular codebase
FROM node:18.20.2 as build
RUN export NODE_OPTIONS="--max-old-space-size=8192"
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
COPY . /app
RUN npm run build-prod

FROM nginx:alpine

# Copy configuration
COPY nginx.conf /etc/nginx/nginx.conf

#COPY --from=linden-photography /app/dist /usr/share/nginx/html/linden-photography
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 4200
