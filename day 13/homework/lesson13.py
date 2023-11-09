def find_smallest_int(arr):
    min = arr[0]
    for item in arr:
        if min > item:
            min = item
    return min



def summation(num):
     total = 0
     for i in range(0, num+1):
        total = total + i
     return total
