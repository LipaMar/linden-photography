# Stage 1: Compile and Build angular codebase
FROM --platform=linux/amd64 node:20.15.1 as build
RUN export NODE_OPTIONS="--max-old-space-size=8192"
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci --loglevel verbose
COPY . /app
RUN npm run build

FROM nginx:alpine

# Copy configuration
COPY nginx.conf /etc/nginx/nginx.conf

#COPY --from=linden-photography /app/dist /usr/share/nginx/html/linden-photography
COPY --from=build /app/dist /usr/share/nginx/html

RUN mkdir -p /usr/share/nginx/html/public/photos

EXPOSE 4200
