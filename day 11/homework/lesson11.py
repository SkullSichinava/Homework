def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")

is_triangle(5, 6, 7)
 


def name_list(name1, name2, name3):
    names_combined = ", ".join([name1, name2, name3])
    print(names_combined)

name_list("ლუკა","საბა","მამუკა")

