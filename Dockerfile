# Use a different Node.js base image
FROM node:20

# Set the working directory inside the Docker image
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json /app/

# Install the dependencies defined in package.json
RUN npm install

# Copy the rest of the application files to the working directory
COPY . /app/

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]
