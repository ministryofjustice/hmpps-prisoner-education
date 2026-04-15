FROM ghcr.io/ministryofjustice/hmpps-node:24-alpine AS base

ENV NODE_ENV=production

WORKDIR /app

RUN apk add --no-cache make python3 g++

COPY . .

RUN npm install

RUN chmod +x start.sh

CMD ["./start.sh"]
