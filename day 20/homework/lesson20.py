def make_upper_case(s):
    return s.upper()


def areYouPlayingBanjo(name):
    if name[0].lower() == 'r':
        return name + ' plays banjo'
    else:
        return name + ' does not play banjo'
    
def find_needle(haystack):
    needle_index = haystack.index("needle")
    return "found the needle at position " + str(needle_index)
result = ("haystack")  

def sum_array(a):
    sum = 0
    for i in a:
        sum += i
    return sum

def invert(lst):
    result = list()
    for num in lst:
        result.append(-num)
    return result

def find_average(array):
    if len(array) != 0:
        return sum(array) / len(array)
    else:
        return 0
    
        