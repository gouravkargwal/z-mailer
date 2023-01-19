#  Dockerfile for Node Express Backend
FROM node:10.16-alpine

RUN npm install -g nodemon

WORKDIR /zmailer/server

COPY package*.json .

RUN npm ci

COPY . . 

EXPOSE 5000

CMD ["npm","run","prod"]

#------Commands--------
#docker build -t zmailer-server:[verion number] .
#docker images
#docker run --name [zmailer-backend] -p 4000:4000 -d [name of image]:[version]
#docker run --name [zmailer-backend] -p 4000:4000 -rm -v [absolute path]:[container path] -v /zmailer/server/node_modules [name of image]:[version]

#docker run --name [zmailer-backend] -p 4000:4000 -rm -v D:\Z-mailer\server\:/zmailer/server [name of image]:[version]


#-v for adding volumes
#second -v i used to add node modules to another volume

#docker ps //list running container
#docker ps -a //list all container
#docker start [container name]
#docker stop [container name]
#docker container rm [container name] //remove container

#docker image rm [image name] //remove images
#docker image rm [image name] -f  //force remove images

#docker system prune -a // remove everything

#------Theory----------
#Copy . . (These parth are relative to wokdir means if u specify /app in workdir then copy will copy to /app/app)
#First argument of copy is the directory of api on my system which has all the code required
#Second arguement of copy is the directory of api in image(as image have there folder structure)

#Volumes are used to map container to code