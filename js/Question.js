class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("your answer.....")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question1 = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Question1.html("Question:-what starts and ends with the letter 'E',but has only one letter")
    this.option1.html("1:Everyone")
    this.option2.html("2:Envelope")
    this.option3.html("3:Estimate")
    this.option4.html("4:Example")



    this.option1.position(100,120)
    this.option2.position(100,140)
    this.option3.position(100,160)
    this.option4.position(100,180)
    this.Question1.position(50,100)
    this.input2.position(350, 230);
    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thank You, Your Answer Has Been Submitted")
    this.message.position(100,300)
    })


  }
}
