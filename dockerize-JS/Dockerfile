# 1.0 give version for node using tag (:20)
FROM node:20 

# 1.1 in which directory in docker i will set the files which /app
WORKDIR /app 

# 1.2 first dot means docker directory which is declare by . and second dot means copy all the file in this directory i.e dockerize-JS
COPY . .

# 1.3 give the final command using CMD
CMD ["node", "app.js"]

