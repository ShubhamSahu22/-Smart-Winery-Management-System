# monitoring_service/Dockerfile
FROM python:3.9-slim

# Set environment variables
ENV PORT=8000
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Expose the service port
EXPOSE 8000

# Run the app
CMD ["python", "app.py"]
