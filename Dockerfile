FROM node:18-alpine
WORKDIR /app

ENV SECRET_KEY=default

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
