# Base stage
FROM node:20-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Test stage
FROM base AS test
WORKDIR /app
RUN npm test

# Production stage
FROM base AS prod
WORKDIR /app
EXPOSE 3001
CMD ["npm", "start"]
