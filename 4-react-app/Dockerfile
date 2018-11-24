#Base image
FROM node:alpine as builder

#Change working directory
WORKDIR /usr/app

#Copy only package.json file to avoid installing dependencies on each build
COPY ./package.json ./

#Install dependecies
RUN npm install --production 

#Copy source code
COPY . .

# Build react app
RUN npm run build

#Nginx server to serve reactjs static content
FROM nginx:alpine

# Copy static content from previous stage
COPY --from=builder /usr/app/build /usr/share/nginx/html
