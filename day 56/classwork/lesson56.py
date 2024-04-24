# HW1
def litres(time):
    return time // 2

# HW2
def paperwork(n, m):
    if m < 0 or n < 0:
        return 0
    else:
        return n*m
    
# HW3
def grow(arr):
    result = 1
    for num in arr:
        result = result * num
    return result

# HW4
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result = result + "0"
        else:
            result = result + "1"
    return result

# HW5
def count_by(x, n):
    return [x * i for i in range(1, n + 1)]