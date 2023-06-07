from turtle import*
from time import*
from random import*

def draw_firework():
    dis=0
    radius=0
    for j in range(8):
        if j !=0:
            dis+=100/(j*2)
        radius=30/(j+1)
        clear()
        for i in range(36):
            seth(i*10)
            penup()
            forward(dis)
            pendown()
            seth(0)
            dot(radius)
            seth(i*10) 
            penup()
            backward(dis)
            pendown()
        update()
        sleep(0.05)

tracer(0)

bgcolor("black")
hideturtle()
while True:

    penup()
    goto(randint(-360,360),randint(-360,360))
    pendown()
    color(random(),random(),random())
    draw_firework()

