def power(a, b):
    if b == 0:
        return 1
    res = a
    for _ in range(b - 1):
        res *= a
    return res

a, b = map(float, input().split())
b = int(b)
print(power(a, b))
