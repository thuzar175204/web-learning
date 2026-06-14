import random

import math



#Computer Move

def computer_move():
    random_number=math.floor(random.random()*3)+1

    if random_number == 1:
     computer = 'rock'
    elif random_number == 2:
     computer = 'paper'
    elif random_number == 3:
     computer = 'scissor'
    return computer

def result():
    #User Move

    user=input("Enter your move (rock=r, paper=p, scissor=s):")

    computer=computer_move()  

    if user == 'r' and computer == 'rock':
        result = 'Tie'
    elif user == 'r' and computer == 'paper':
        result = ' You Lose'
    elif user == 'r' and computer == 'scissor':
        result = ' You Win'

    if user == 'p' and computer == 'rock':
        result = 'You Win'
    elif user == 'p' and computer == 'paper':
        result = ' Tie'
    elif user == 'p' and computer == 'scissor':
        result = ' You Lose'

    if user == 's' and computer == 'rock':
        result = 'You Lose'
    elif user == 's' and computer == 'paper':
        result = ' You Win'
    elif user == 's' and computer == 'scissor':
        result = ' Tie'

    if user == 'r':
      print(f"You pick rock.Computer pick {computer}.{result}.")


    elif user == 'p':
      print(f"You pick paper.Computer pick {computer}.{result}.")


    elif user == 's':
      print(f"You pick scissor.Computer pick {computer}.{result}.")


result()




