#!/bin/bash

  echo "El ocu es :  $ocu"

  echo "creando el real"

  kubectl apply -f ingress-real-green.yml

  echo "borrando el real"

  kubectl delete -f ingress-real-green.yml

  echo "desplegando el ocu"

  kubectl apply -f ingress-ocu-green.yml















