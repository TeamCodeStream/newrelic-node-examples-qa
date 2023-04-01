#!/usr/bin/env bash

echo "Starting server"
node -r ./src/instrumentation src/main.js &

echo "Make requests"
# make requests 
./make-requests.sh
