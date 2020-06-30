# pulling in official base image
FROM node:14.4.0-alpine

# set working directory
WORKDIR /hipsty-product-details-main

# add node modules bin to $PATH
ENV PATH /hipsty-product-details-main/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm run build-dev
RUN npm run seed

# add the app
COPY . ./

# what port the container will show the outside world
EXPOSE 3000

# start the app
CMD ["npm", "start-dev"]
