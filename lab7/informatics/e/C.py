def xor(x, y):
    if x == y:
        return 0
    return 1




arr = [int(i) for i in input().split()]
print(xor(arr[0], arr[1]))