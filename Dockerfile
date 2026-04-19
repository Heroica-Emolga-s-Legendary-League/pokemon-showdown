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

EXPOSE 8000

# Support PORT env var (Coolify injects this); fallback to 8000
CMD ["sh", "-c", "node pokemon-showdown --skip-build ${PORT:-8000}"]
