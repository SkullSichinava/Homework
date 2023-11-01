old_list = [2, 4, 6, 2, 4, 7, 2, 9]
new_list = []
for num in old_list:
    if num != 4:
        new_list.append(num)
print(new_list)


family = ["Fatima", "Mamuka", "Luka", "Saba"]
full_sentence = "My moms name is: {}, My dads name is: {}, My name is: {}, My brothers name is: {}".format(family[0],family[1],family[2],family[3])
print(full_sentence)


age = [44, 47, 15, 5]
full_sentence = "My moms age is: {}, My dads age is: {}, My age is: {}, My brothers age is: {}".format(age[0],age[1],age[2],age[3])
print(full_sentence)


age = [54, 57, 25 ,15]
full_sentence = "My moms age after 10 years is: {}, My dads age after 10 years is: {}, My age after 10 years is: {}, My brothers age after 10 years is: {}".format(age[0],age[1],age[2],age[3])
print(full_sentence)


joke = ["Let me tell you a joke",]
full_sentence = "ერთ ებრაელს კითხეს, შემთხვევით ებრაელი ხომ არ ხართ? ებრაელმა უპასუხა, კი ებრაელი ვარ, ოხონთ შემთხვევით არა.".format(joke[0])
print(full_sentence)

