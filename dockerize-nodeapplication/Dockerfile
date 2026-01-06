# 2.1 give version for node using tag (:24)
FROM node:24

# 2.2 in which directory in docker it will set the files which is /app
WORKDIR /app

# 2.3 first dot means copy all my source file from my local machine which is declare by (.) i.e dockerize-nodeapplication folder and second dot means paste it to the docker directory which defined in 2.2 
COPY . .

# but if u not declare 1.1 earliar then u have to set the command "COPY . /app"
# 2.4 here RUN is used to build
RUN npm install 

# 2.5 Expose my defined port
EXPOSE 3000

# 2.6  give the final command using CMD and command for create image "docker build --tag dockerize-nodeapplication:v1 ." then run the command "docker run dockerize-nodeapplication:v1" and it will give me the running port in terminal but if u click it, it will show "This site can’t be reached" because it is running in the docker's port 3000 which is not connected with the local device to solve this we will command "docker run -p 5001:3000 dockerize-nodeapplication:v1" here "-p" means port mapping, "5001" will be connected to the exposed port "3000" and it will run in the port 5001. Now go to the "http://localhost:5001/" and u will get the "Dockerize The Nodejs application".
CMD ["node", "app.js" ]

