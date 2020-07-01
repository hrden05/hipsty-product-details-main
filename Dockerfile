# pulling in official base image
FROM node:14.4.0-alpine

# RUN mkdir -p /src/app

# set working directory
WORKDIR /app

# add node modules bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add the app
COPY . ./

# what port the container will show the outside world
EXPOSE 3000

# start the app
CMD ["npm", "start"]

# TO BUILD
# docker build -t product_details .

# TO RUN
# docker run -it -d --rm -p 3000:3000 -v $(pwd):/hipsty-product-details-main -e CHOKIDAR_USEPOLLING=true --name hp product_details
