#!/bin/bash

kubectl apply -f task-hello.yml

kubectl apply -f task-goodbye.yml

kubectl apply -f pipeline-hello.yml

kubectl apply -f pipeline-hello-run.yml




tkn pipelinerun logs pipeline-hello-run -f -n default