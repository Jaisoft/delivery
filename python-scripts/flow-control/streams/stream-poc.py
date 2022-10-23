
from lazy_streams import stream

data = range(100)

s = stream(data)


print (s.reverse().filter(lambda x: (x+1)%2 == 0).map(lambda x: x*x).map(lambda x: "Item %d" % x).last_or_else("Nothing here"))

