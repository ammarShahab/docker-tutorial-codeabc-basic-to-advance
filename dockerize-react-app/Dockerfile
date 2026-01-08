# 5.1 

FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# 5.2 now build "docker build --tag react-app-image ." and run the command "docker run -p 5173:5173 --name react-container -w /app --rm -v "${PWD}:/app" -v "/app/node_modules" react-app-image". Here -w means work directory which is /app.