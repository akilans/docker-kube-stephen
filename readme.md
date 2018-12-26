# Docker & Kubernetes complete Guide

  * docker run = docker create + docker start
  * docker create busybox - creates container with bustbox image
  * docker start -a busybox-container - starting the container, -a prints the output on terminal
  * docker logs busybox-container - prints the log on terminal
  * docker stop - Properly closes and cleaning.takes max 10 seconds to stop the running container
  * docker kill - kill the running container immediately
  * docker build - creates new images on each step and next step is using the image to create a temprorary container. Finally it creates the final image.
  * docker build - checks the changes and orders to use cache from previous build
  * docker commit -c 'CMD ["redis-server"]' alpine-redis-container[running]
  * docker-compose up -d --build - run all the containers in the docker-compose.yaml file in background. Build new image if any change
  * docker compose down - stop and remove all the containers

# Kubernetes

  * Kind Pod and ReplicationController not for Production. Can't update other than image properties in kind Pod
  * 
  
  
 
