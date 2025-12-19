# build stage

FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

# production stage

FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve

ENV PATH="/usr/local/bin:${PATH}"

COPY --from=build /app/dist ./dist

EXPOSE 3005

CMD ["serve", "-s", "dist", "-l", "3005"]