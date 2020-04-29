FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm run build

# add app
COPY . ./


EXPOSE 80

# start app
#RUN npm start
CMD ["npm", "start", "-p", "80"]