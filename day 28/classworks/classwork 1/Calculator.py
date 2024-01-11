import math
def MathCalculator():

    num1 = int(input("Enter The First Number"))
    num2 = int(input("Enter The Second Number"))
    operator = input("Enter The Math Operator (+, -, /, *):")

    result = 0

    if operator =="+":
        result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        if num2 != 0:
            result = num1 / num2
        else:
            
            return
