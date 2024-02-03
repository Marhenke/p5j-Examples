let r 
let g
let b
let h = 0
let w = 0
let ejercicio = 1
let robotx = 0
let largo = 100


function setup() 
{
    createCanvas(windowWidth, windowHeight)
    background(0)
}

function mouseClicked()
{
    if (ejercicio < 5)
    {
        ejercicio++
        background(0)
    }
    else
    {
        ejercicio = 2
        background(0)
    }

}

function draw() 
{
    
    r = random(255)
    g = random(255)
    b = random(255)

    
    
    if (ejercicio == 1)
    {
        fill (255)
        textSize(30)
        text("Hola!", 30, 50)
        textSize(20)
        text("Para pasar de ejercicios haga click ", 30, 100)
        text("con el mouse.", 30, 130)
        text("El robot se mueve con las flechas.", 30, 190)
        text("Gracias!", 30, 250)
    }
    else if (ejercicio == 2)
    {
        background (200)
        noStroke()
        
        
        if (keyIsDown(LEFT_ARROW)) 
        {
            if (robotx > -140)
            {
                robotx = robotx - 3
            }
            else
            {
                robotx = windowWidth
            }
          }
        
          if (keyIsDown(RIGHT_ARROW)) 
          {
            if (robotx < windowWidth + 20)
            {
                robotx = robotx + 3
            }
            else
            {
                robotx = -120
            }
          }
          if (keyIsDown(UP_ARROW)) 
          {
            if (largo < 150)
            {
                largo = largo + 1
            }
            else
            {
                largo = 150
            }
          }
        
          if (keyIsDown(DOWN_ARROW)) 
          {
            if (largo > 20)
            {
                largo = largo - 1
            }
            else
            {
                largo = 20
            }
          }
        
        
        
        
        //cuerpo
        fill(100)
        ellipse(robotx + 50, 325, 70)
        fill(0)
        rect(robotx, 250, 100, 75)
        fill(170)
        rect(robotx, 270, 100, 7)

        //cuello
        
        fill(0)
        rect(robotx + 65, 250 - largo, 2, largo)
        rect(robotx + 75, 250 - largo, 2, largo)
        rect(robotx + 85, 250 - largo, 2, largo)

        //cabeza
        ellipse(robotx + 75, 250 - largo -30, 80)
        fill(255)
        ellipse(robotx + 85, 250 - largo - 35, 25)
        fill (0)
        ellipse(robotx + 85, 250 - largo - 35, 5)

        strokeWeight(2)
        stroke(0)
        let largo_uno = 35
        let largo_dos = 20
        let largo_tres = 15
        line(robotx + 45, 250 - largo - 50 , robotx + 45 - largo_uno, 250 - largo - largo_uno - 50)
        line(robotx + 95, 250 - largo - 50 , robotx + 95 + largo_dos, 250 - largo - largo_dos - 50)
        line(robotx + 105, 250 - largo - 30 , robotx + 105 + largo_tres, 250 - largo - 30)
        
        
    }
    else if (ejercicio == 3)
    {
        fill(r, g, b)
        strokeWeight(0)
        if (h < windowWidth)
        {
            w = random(windowWidth)
            ellipse(w, h, 10)
            w = random(windowWidth)
            ellipse(w, h, 10)
            w = random(windowWidth)
            ellipse(w, h, 10)
        
            h = h+0.2
        }
        else
        {
            h = 0
            background(0)
        }
        
    }

    else if (ejercicio == 4)
    {
        fill(255)
        strokeWeight(1)
        stroke(0)
        rotate(mouseX / 20)
        rect(60, 60, 150, 30)
        rect(260, 260, -150, -30)
        rect(360, 360, -150, -30)
        rect(460, 460, -150, -30)
        rect(560, 560, -150, -30)
        rect(660, 660, -150, -30)
        rect(760, 760, -150, -30)
        rect(860, 860, -150, -30)
        rect(960, 960, -150, -30)
        rect(1060, 1060, -150, -30)
        rect(1160, 1160, -150, -30)
    }

    else if (ejercicio == 5)
    {
        
        noFill()
        stroke(r, g, b)
        
        if (h < windowHeight)
        {
            ellipse(windowWidth/2, windowHeight/2, w, h)
            w --
            h ++
        }
        else 
        {
            background(0)
            h = 0
            w = windowWidth
        }
        
    }
    
}