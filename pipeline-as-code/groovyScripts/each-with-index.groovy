def list = [1,2,5,7]
list.each{
println it
}
list.each{val->
println val
}
list.eachWithIndex{it,index->
println "value " + it + " at index " +index
}