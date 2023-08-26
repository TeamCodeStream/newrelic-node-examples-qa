#!/bin/bash
echo "Starting request loop..."

while true; do
#  curl --silent http://localhost:3000/named-mw
#  sleep 1
#  curl --silent http://localhost:3000/anon
#  sleep 1
#  curl --silent http://localhost:3000/arrow
#  sleep 1
#  curl --silent http://localhost:3000/chained
#  sleep 1
#  curl --silent http://localhost:3000/schedule-job
#  sleep 1
#  curl --silent http://localhost:3000/run-job
  sleep 5
  curl --silent http://localhost:3000/cart
  sleep 5
  curl --silent http://localhost:3000/users
  sleep 5
  curl --silent http://localhost:3000/users/states
  sleep 15
done
