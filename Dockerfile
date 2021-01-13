FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install

ENV PORT=80
 
VOLUME [ "/data" ]

EXPOSE 80
CMD [ "npm", "start" ]