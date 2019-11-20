# Notes

### Option 1 - Run by plain Docker
* docker build -t test-node .
* docker run -p 7000:5000 -v /usr/app/node_modules -v $(pwd):/usr/app test-node

### Option 2 - Run by docker-compose
* docker-compose up
* docker-compose ps
* docker-compose down