#Base image
FROM node:alpine

#Change working directory
WORKDIR /usr/app

#Copy only package.json file to avoid installing dependencies on each build
COPY ./package.json ./

#Install dependecies
RUN npm install

#Copy the entire source code
COPY ./ ./

# Start command when run a container
CMD ["npm","start"]