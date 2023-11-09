def find_smallest_int(arr):
    min = arr[0]
    for item in arr:
        if min > item:
            min = item
    return min


def summation(num):
    temp = []
    for i in range(1, num+1):
        temp.append(i)
    return sum(temp)

