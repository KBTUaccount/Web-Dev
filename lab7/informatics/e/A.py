def min(a : int, b : int, c : int, d : int):
    min_1 = a if a < b else b
    min_2 = c if c < d else d
    return min_1 if min_1 < min_2 else min_2
arr = [int(i) for i in input().split()]

print(min(arr[0], arr[1], arr[2], arr[3]))