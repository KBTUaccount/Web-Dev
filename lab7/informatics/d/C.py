a = int(input())
arr = input().split()
res = 0
for i in arr:
    if int(i) > 0:
        res += 1
print(res)