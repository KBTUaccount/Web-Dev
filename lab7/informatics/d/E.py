a = int(input())
arr = input().split()
flag = False
for i in range(1, a):
    if (int(arr[i]) >= 0 and int(arr[i - 1]) >= 0) or (int(arr[i]) < 0 and int(arr[i - 1]) < 0):
        flag = True
        break
if flag:
    print("YES")
else:
    print("NO")