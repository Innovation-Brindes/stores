FROM node:12

ENV PORT 1111

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --legacy-peer-deps

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 1111

# # Running the app
# CMD "npm" "start"
