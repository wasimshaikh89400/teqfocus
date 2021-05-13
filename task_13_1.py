"""Given a range of the first 10 numbers, Iterate from
the start number to the end number, and In each iteration
print the sum of the current number and previous number."""

for x in range(10) :
    y = int(x -1)
    f = lambda x: (abs(x) + x) / 2
    n = int(f(y))
    m = int(f(x + y))
    print( ' Previous Number ' + str(x) +' Previous Number ' + str(n) + ' Sum: ' +str(m))
