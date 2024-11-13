# syntax=docker/dockerfile:1

FROM node:18.17.0-alpine AS base

RUN apk add --no-cache libc6-compat curl

FROM base AS deps

WORKDIR /app

COPY --link --chown=node:node package.json yarn.lock ./

RUN yarn --frozen-lockfile --ignore-scripts

FROM base AS build

WORKDIR /app

COPY --from=deps --link /app/node_modules ./node_modules
COPY --link . .

RUN yarn build

FROM base as runtime

WORKDIR /app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY --from=deps --link --chown=node:node /app/node_modules ./node_modules
COPY --from=build --link --chown=node:node /app/.next ./.next
COPY --from=build --link --chown=node:node /app/public ./public
COPY --link --chown=node:node package.json .
COPY --link --chown=node:node .env.local .

USER node

EXPOSE 3000

CMD ["yarn", "start"]
