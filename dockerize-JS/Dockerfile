# 1.0 give version for node using tag (:20)
FROM node:20 

# 1.1 in which directory in docker it will set the files which is /app
WORKDIR /app 

# 1.2 first dot means copy all my source file from my local machine which is declare by (.) i.e dockerize-JS folder and second dot means paste it to the docker directory which defined in 1.1 
COPY . .

# but if u not declare 1.1 earliar then u have to set the command "COPY . /app"

# 1.3 give the final command using CMD and it will give me the running port in terminal 
CMD ["node", "app.js"]

