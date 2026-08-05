FROM node:22-alpine

# Build tools needed for native modules (better-sqlite3)
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN node build
RUN cp config/config-example.js /app/config-example.js

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
	CMD wget -q --spider "http://127.0.0.1:${PORT:-8000}/" || exit 1

# Support PORT env var (Coolify injects this); fallback to 8000
CMD ["sh", "-c", "[ -f config/config.js ] || { mkdir -p config; cp /app/config-example.js config/config.js; }; node pokemon-showdown --skip-build ${PORT:-8000}"]
