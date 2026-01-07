# 3.1 from the following code we COPY the package.json file and install the dependencies at the start because package.json is not change every time. During creating the image it will install the dependencies every time which will take long time in previous Dockerfile. To minimize the time it will install the dependencies at the start. Now when we change any code of the app.js file it will not install the dependencies again in build time because dependencies are cached in the container and it will take less time to build the image.
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]

# 3.2 now run "docker build --tag node-optimize-image ." then run " docker run -p 5001:5000 --name node_optimize_container --rm node-optimize-image"