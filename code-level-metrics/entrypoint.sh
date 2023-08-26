#!/usr/bin/env bash

APP_PID=
TEST_PID=
echo "Starting server"
node -r ./src/instrumentation src/main.js &
APP_PID=$!

cleanup () {
  echo "Cleaning up"
  kill $APP_PID
  wait $APP_PID
  kill $TEST_PID
  exit
}

trap cleanup SIGINT SIGTERM

echo "Make requests"
# make requests
./make-requests.sh &
TEST_PID=$!
wait $TEST_PID
