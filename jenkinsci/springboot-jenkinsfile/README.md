cd springboot-minikube-poc

mvn package

open  -a Docker

minikube start

minikube dashboard

eval $(minikube docker-env)

docker build -t springboot-minikube-image:latest .

kubectl apply -f deployment.yaml

minikube tunnel

kubectl get all


kubectl delete -f deployment.yaml

minikube stop

