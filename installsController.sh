#!/bin/bash

echo "This bash script runs and installs all project scripts using pnpm"

echo "Running server install script"
bash ./server/serverInstalls.sh
echo "done"

echo "Running client install script"
bash ./client/clientInstalls.sh
echo "done"