#!/usr/bin/env sh
node node_modules/webpack/bin/webpack.js -vpc --config webpack.config.prod.js

ssh root@$1 mkdir -p /var/www/$1
scp index.html root@$1:/var/www/$1/
scp dist/bundle.js root@$1:/var/www/$1/
ssh root@$1 service nginx reload
