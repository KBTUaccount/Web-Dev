a = int(input())
arr = input().split()
for i in range(a // 2):
    arr[i], arr[a - i - 1] = arr[a - i - 1], arr[i]

for i in arr:
    print(i)
