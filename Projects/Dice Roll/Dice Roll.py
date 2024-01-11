import random
from collections import Counter

n_players = 2
n_rounds = 4
n_dice = 3
points = Counter()

for round_number in range(n_rounds):
    print(f'Round {round_number+1}:')
    for player in range(n_players):
        dice = [random.randint(1, 6) for _ in range(n_dice)]
        print('  Player', player+1, 'rolled', ', '.join(str(d) for d in dice))

        match len(set(dice)):
            case 1:
                print('    WOW! You hit a three of a kind!', end=' ')
                round_points = 5
            case 2:
                print('    Well done! You rolled a pair', end=' ')
                round_points = 1
            case _:
                print('    Unlucky, you missed!', end=' ')
                round_points = 0

        print(f'({round_points}p)')
        points[player] += round_points
    print()

(_, hiscore), = points.most_common(1)
match [player for player, point in points.items() if point == hiscore]:
    case (winner,):
        print(f'Player {1+winner} is the winner with {hiscore} points!')
        print()
    case winners:
        print("It's a draw between players", ', '.join(str(p) for p in winners))