FROM node:alpine

COPY ./package.json . 

RUN npm i 

COPY ./ ./ 

RUN npm run build

RUN rm -Rf src/

EXPOSE 3000

CMD [ "npm","run","deploy" ]