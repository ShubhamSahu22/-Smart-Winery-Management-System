# frontend/Dockerfile
FROM node:14-slim

# Set environment variables
ENV PORT=3002
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy application files
COPY . .

# Build the frontend app
RUN npm run build

# Serve the app using a static file server
RUN npm install -g serve
EXPOSE 3002
CMD ["serve", "-s", "build", "-l", "3002"]
