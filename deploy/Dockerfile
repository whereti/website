# The site is a static export, so nothing JavaScript survives into the image:
# node builds it, nginx serves the files. Same setup as silentsilo.com.
#
# Built from the repository root, not from this folder:
#   docker build -f deploy/Dockerfile .

# -- Stage 1: dependencies --
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# -- Stage 2: build --
FROM node:22-alpine AS builder
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# -- Stage 3: serve --
FROM nginx:alpine AS runner
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/security-headers.conf

# The base image ships its own index.html and 50x.html; remove them so only
# this site's files are served.
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://127.0.0.1:3000/ || exit 1
