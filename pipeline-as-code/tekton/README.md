open -a docker

minikube start

kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml

k apply -f task-hello.yml

k apply -f task-goodbye.yml

k apply -f pipeline-hello.yml

k apply -f pipeline-hello-run.yml




tkn pipelinerun logs pipeline-hello-run -f -n default

minikube delete