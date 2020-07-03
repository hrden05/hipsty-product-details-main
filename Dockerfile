# pulling in official base image
FROM node:12-alpine
# FROM node:14-slim

RUN mkdir -p /src/app

# set working directory
WORKDIR /src/app

# add node modules bin to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# COPY ./server ./server
# COPY ./database ./database
# COPY ./client/dist ./client/dist
# COPY ./server/seed.js ./seed
RUN npm install

# RUN npm install axios \
#   && npm install express \
#   && npm install faker \
#   && npm install fakergem \
#   && npm install mongoose

# add the app
COPY . /src/app

# # what port the container will show the outside world
EXPOSE 4507

# start the app
CMD ["npm", "start"]

# TO BUILD
# docker build -t product_details .

# TO RUN
# docker run -it -d --rm -p 3000:3000 -v $(pwd):/hipsty-product-details-main -e CHOKIDAR_USEPOLLING=true --name hp product_details
