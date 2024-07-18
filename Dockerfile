# Stage 1: Compile and Build angular codebase
FROM node:18.20.2
RUN export NODE_OPTIONS="--max-old-space-size=8192"
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
COPY . /app
RUN npm run build-prod
