#!/bin/bash


PEPE=( 'Debian' 'Redhat' 'Ubuntu' )

# get number of elements in the array
ELEMENTS=${#PEPE[@]}

# echo each element in array 
# for loop
for (( i=0;i<$ELEMENTS;i++)); do
    echo ${PEPE[${i}]}
done 

