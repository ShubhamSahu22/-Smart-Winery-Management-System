# iot_device/Dockerfile

FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the device script
COPY iot_device.py .

# Run the IoT device script
CMD ["python", "iot_device.py"]
