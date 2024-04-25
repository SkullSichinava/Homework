# 8 kyu

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

# 7 kyu

# HW1
def to_jaden_case(string):
    words = string.split()
    jaden_cased_words = [word.capitalize() for word in words]
    return ' '.join(jaden_cased_words)

# HW2
def accum(st):
    index = 1 
    result = [] 
    for l in st: 
        l = l * index 
        l = l.capitalize()
        index += 1
        result.append(l)
    return "-".join(result)

# HW3
def remove_smallest(numbers):
    x = list(numbers)
    if x:
        x.remove(min(numbers))
    return x

# 6 kyu

# HW1
def solution(number):
    if number < 0:
        return 0
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)

# HW2
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return "%s likes this" % names[0]
    elif len(names) == 2:
        return "%s and %s like this" % (names[0], names[1])
    elif len(names) == 3:
        return "%s, %s and %s like this" % (names[0], names[1], names[2])
    else:
        return "%s, %s and %s others like this" % (names[0], names[1], len(names)-2)

# HW3
def is_pangram(s):
    sentence = s.lower()
    letters_found = set()
    for char in sentence:
        if char.isalpha():
            letters_found.add(char)
    return len(letters_found) == 26