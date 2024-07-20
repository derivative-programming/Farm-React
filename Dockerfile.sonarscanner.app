# Use the official Node.js image as the base
FROM node:22.4.1

# Install SonarScanner CLI and Python
RUN npm install -g sonarqube-scanner && \
    apt-get update && \
    apt-get install -y openjdk-17-jdk-headless wget unzip

# Set the working directory
WORKDIR /usr/src/app

# Copy the source code into the container
COPY . .

# Copy the .env file to the working directory
COPY .env .env

# Install project dependencies
RUN npm install

# Ensure the entrypoint script has Unix line endings and is executable
# RUN apt-get install -y dos2unix && \
#     dos2unix /usr/src/app/dockerfile_sonarscanner_app_entrypoint.sh && \
#     chmod +x /usr/src/app/dockerfile_sonarscanner_app_entrypoint.sh && \
#     apt-get remove -y dos2unix && apt-get autoremove -y

# Define the entrypoint
ENTRYPOINT ["/usr/src/app/dockerfile_sonarscanner_app_entrypoint.sh"]