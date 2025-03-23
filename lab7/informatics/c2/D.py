a = int(input())
i = 1
flag = False
while(i <= a):
    if(i == a):
        flag = True
    i *= 2
if flag:
    print("YES")
else:
    print("NO")
