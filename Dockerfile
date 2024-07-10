
# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV HOST=0.0.0.0
ENV PORT=8080

# Run server.js when the container launches
CMD ["node", "server.js"]



