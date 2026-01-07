## What is Docker?

- Docker is a software platform that allows you to build, test and deploy application quickly.

## Why docker?

- consistency in any environment which will run in virtual machine that's why don't need to install dependencies in a local computer. All are run in a virtual machine.

## Scalability

- due image run in a container so by sharing the image we will scale it.

## Docker Image vs Container

<img src="/doceker_image_vs_container.jpg">

## Docker Image

- it is a bluprint

## Difference between virtual machine and container

<img src="/Virtual_Machines_vs_Containers.jpg">

=> Container:

- Host server: My PC performs as a host server
- OS: My PC Operating System
- Container Software: i.e Docker performs as a Container Software
- Container: Each container is isolated container and run independently (i.e when we run ubuntu OS in windows as isolated form)

### Note: Sign in to Docker using github (Best practice)

## How to use Docker hub and run one image using multiple container?

- go to docker hub
- search node as we are going to use node js application in Docker Hub and click on nodejs
- copy the pull command from the tag route
- open the terminal and paste the pull command or you can run "docker pull node"
- Now u can check it from docker desktop or run in terminal "docker images"
- to check all the container run "docker ps -a"
- to run the image in a container run "docker run node" then to check it run "docker ps -a" u will see the container run and automatically stopped
- to check any running container run "docker ps"
- to persist the container running, so run "docker run -it node" here "-it" means interactive
- Now pull ubuntu and run it interactively
- it will show like root@: now type "ls" it will show the root file
- to create a directory "mkdir ammar" and use to cd to go to the directory
- to create a file run "touch doc.txt"

## How to dockerize javascript application

- created a app.js file
- Now create a Dockerfile script according to the flow in the Dockerfile
- now run "docker build --tag dockerize-JS:v1 ." here (--tag) means tag and dockerize-js is the tagged name of the image and (.) means current path

##### Note: to see all command run "docker build --help" and "docker run --help"

- then image is created
- if u build command without any tag then run "docker images" to get the ID of the image, copy the ID and run by "docker run copied-id
- as we have given the tag so we can run "docker run dockerize-js:v1"
- you will get the answer in the terminal

## 2.0 Dockerize nodejs application

- run "npm init -y"
- install express and save it in package.json
- now follow the flow in the Dockerfile from 2.1
- now to stop any container run "docker container stop container_id" or u can manually stop it using docker desktop
- as the container stopped but the container will persist in the docker container as they are not removed. so to run the specific container again run "docker container start container_id or container_name"
- to remove container first stop it then run "docker container rm container_id or container_name"
- to remove the image run "docker rmi image_id or image_name"
- if u created multiple container by creating multiple images in two different port with different version using and to run that run the command "docker run -p 5001:3000 dockerize-nodeapplication:v1" and "docker run -p 5002:3000 dockerize-nodeapplication:v2"
- to stop that container run "docker container stop one_container_id second_container_id"
- if u want to remove container automatically upon stop then run the image in a container run and add the flag --rm "docker run -p 5001:3000 --rm image_id" then stop the container using "docker container stop container_id or Name". It will stop and delete the container automatically.
- to remove all the stopped container in one command "docker container prune"
- to remove all the images in one command "docker image prune -a"
- to name a container and remove aoutomatic after stop run "docker run -p 5001:3000 --name node_app_container --rm dockerize-nodeapplication:v1"
- to stop container run "docker container stop given_container_name"
