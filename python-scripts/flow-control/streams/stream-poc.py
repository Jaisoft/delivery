
from lazy_streams import stream

s = stream(range(10))

print(s.reverse().filter(lambda x: x%2 != 0).to_list())


print("min:  ", s.min())

print("max:  ", s.max())

print("size: ", s.size())


print(s.reduce(lambda x,y: x+y))

