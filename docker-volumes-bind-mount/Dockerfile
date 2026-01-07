
FROM node

WORKDIR /app

# 4.2 first install the nodemon globally and then run the command "npm install -g nodemon" also update the package.json script "dev": "nodemon -L app.js". here the "-L" flag, which enables legacy watch mode.
RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
# 4.3 build the image so run "docker build --tag volumes-bind-mount ."

# 4.4 as we update the code the update data will not reflect in the container if we run the container, so we need to add volumes by using the command "docker run -p 5001:5000 --name volumes-container --rm -v "C:\Projects\docker-tutorial-codeabc-basic-to-advance\docker-volumes-bind-mount:/app" volumes-bind-i" but there is a problem because we have empty node_modules in host machine so it will show error upon running the container. We need to add another volumes (Anonymous Volumes) for run the node_modules in the container so run "docker run -p 5001:5000 --name volumes-container --rm -v "C:\Projects\docker-tutorial-codeabc-basic-to-advance\docker-volumes-bind-mount:/app" -v "/app/node_modules" volumes-bind-i".

# Note: "-v "C:\Projects\docker-tutorial-codeabc-basic-to-advance\docker-volumes-bind-mount" is the host path which is copied from docker-volumes-bind-mount folder copy path and "/app" is the container path.

# 4.5 Now if u change any code the updated response will be shown in localhost:5001