FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./


EXPOSE 8085

# start app
#RUN npm start
CMD ["npm", "start", "-p", "8085"]