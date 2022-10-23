hello () {
   return "Hello World $1 $2"
}

hello Pepe Pepa

ret=$?

echo "$ret"
