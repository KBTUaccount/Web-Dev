a = input()
flag = True
for i in range(len(a) - 1, -1, -1):
    if (flag == True and a[i] == '0'):
        continue
    flag = False
    print(a[i], end = '')