import random
print("Hello, this is dice roller")
choice=(input("Roll a dice? "))


values=[1,2,3,4,5,6]
if choice=="yes":
    player2=random.choice(values)
    player1=random.choice(values)
    print("Player 1 rolled:", player1, "and Player 2 rolled:", player2)
    if player1==player2:
        print("Draw!")
    elif player1>player2:
        print("Player 1 won!")
    else:
        print("Player 2 won!")
else:
    print("Good Bye!")