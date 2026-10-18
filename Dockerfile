FROM node:22-slim

WORKDIR /app
COPY server/package*.json ./
RUN npm install --omit=dev
COPY server/index.js ./
COPY demo ./demo

ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
