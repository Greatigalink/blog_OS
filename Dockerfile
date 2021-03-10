FROM node:12

MAINTAINER greatiga

RUN mkdir -p /blog/docker_blog

WORKDIR /blog/docker_blog

COPY . /blog/docker_blog

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD nohup sh -c 'npm run build && npm run start'