# order_service/Dockerfile
FROM node:14-slim

# Set environment variables
ENV PORT=3001
WORKDIR /app

# Copy and install dependencies
COPY package.json .
RUN npm install --only=prod

# Copy application files
COPY . .

# Expose the service port
EXPOSE 3001

# Run the app
CMD ["node", "server.js"]
