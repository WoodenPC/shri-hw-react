FROM node:alpine
RUN apk update && apk upgrade && apk add bash && apk add inotify-tools && apk add --no-cache git
WORKDIR '/app'
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
EXPOSE 5000
RUN git config --global user.email "test-mail@mail.com"
RUN git config --global user.name "robot"
CMD ["npm", "run", "start"]