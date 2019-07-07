# builder
FROM lts-jessie as builder

WORKDIR /frontend

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn
COPY . .
RUN yarn build

# server
FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /frontend/build /frontend/build