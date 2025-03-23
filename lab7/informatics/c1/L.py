a = input()
res = 0
for i in range(len(a) - 1, -1, -1):
    res += int(a[i]) * (2 ** (len(a) - i - 1))
print(res)