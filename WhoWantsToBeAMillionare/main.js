//variables
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
const questionSpace = document.querySelector('.questSpc')
let money = document.querySelector('.money');
let changeMoney = 11;
let playBtn = document.querySelector('.play-a')
let errorMsg = document.querySelector('.error')
let isCorrect;
let fiftyFifty = document.querySelector('.fifty-fifty')
let audience = document.querySelector('.audience')
let callfriend = document.querySelector('.call-friend')
let logoImg = document.querySelector('.logo-img')
let statImg = document.querySelector('.img-stat')
let CallFriendOutput = document.querySelector('.call-a-friend')
let questionsArrayEasy = [
    'In the UK, the abbreviation NHS stands for National what Service?',
    'Which Disney character famously leaves a glass slipper behind at a royal ball?',
    'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
    'Which of these brands was chiefly associated with the manufacture of household locks?',
   'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
   'What does the word loquacious mean?',
   'Which toys have been marketed with the phrase “robots in disguise”?',
   'Obstetrics is a branch of medicine particularly concerned with what?',
   'Construction of which of these famous landmarks was completed first?',
   'Which of these cetaceans is classified as a “toothed whale”?'
]
let CallAfriend_A = [
    'Friend: You definitely asked the right friend! «A» is the correct answer. I’m sure of it.',
    'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «A».',
    'Friend: Hi, I read something about this recently and am sure the correct answer is «A».'
]
let CallAfriend_B = [
    'Friend: Intelligence isn’t your best feature, is it? This is the easiest question! The answer is «B»',
    'Friend: I’m tempted to leave you hanging because this is just too easy. How can you possibly be confused? The correct answer is «B»!',
    'Friend: Oh im not sure but i think i’ve heard somthing about this topic on the TV, the right one should be answer «B».'
]
let CallAfriend_C = [
    'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «C».',
    'Friend: Ha-ha! And here I thought you knew everything. Even I know the correct answer is «C». You should go with that.',
    'Friend: That’s easy! Can’t believe you need to ask. The correct answer is «C».'
]
let CallAfriend_D = [
    'Friend: You definitely asked the right friend! «D» is the correct answer. I’m sure of it.',
    'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «D».',
    'Friend: Hi, I read something about this recently and am sure the correct answer is «D».'
]


//Event listeners
answer1.addEventListener('click', changeColor1);
answer2.addEventListener('click', changeColor2);
answer3.addEventListener('click', changeColor3);
answer4.addEventListener('click', changeColor4);
fiftyFifty.addEventListener('click', changeFifty);
audience.addEventListener('click', Audience);
callfriend.addEventListener('click', callFriend);



//function for answer1 color
function changeColor1(){

    answer1.style.backgroundColor = 'rgb(253, 249, 0)'
}
//function for answer2 color
function changeColor2(){

    answer2.style.backgroundColor = 'rgb(253, 249, 0)'
}
//function for answer3 color
function changeColor3(){

    answer3.style.backgroundColor = 'rgb(253, 249, 0)'

}
//function for answer4 color
function changeColor4(){

    answer4.style.backgroundColor = 'rgb(253, 249, 0)'
    
}
//random question function
function randomQuestion(){

    const random = questionsArrayEasy[Math.floor(Math.random() * questionsArrayEasy.length)]
    questionSpace.innerHTML =  random;
    
    if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
        answer1.innerHTML = 'A. ' + 'Humanity'
        answer2.innerHTML = 'B. ' + 'Health'//correct answer
        answer3.innerHTML = 'C. ' + 'Honour'
        answer4.innerHTML = 'D. ' + 'Household'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime();
            setTime();
        }
        
    
        
        
        answer1.onclick=function(){
                isCorrect = false;                
                setTime();
        }
        answer3.onclick=function(){


                isCorrect = false;
                setTime();
        }
        answer4.onclick=function(){

                isCorrect = false;
                setTime();
        }
    
    }
    
    if(questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
        answer1.innerHTML = 'A. ' + 'Pocahontas'
        answer2.innerHTML = 'B. ' + 'Sleeping Beauty'
        answer3.innerHTML = 'C. ' + 'Cinderella'//correct answer
        answer4.innerHTML = 'D. ' + 'Elsa'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
        
    

        answer1.onclick=function(){

            isCorrect = false;
            setTime();
           
        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }

    if(questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
        answer1.innerHTML = 'A. ' + 'Hangar'
        answer2.innerHTML = 'B. ' + 'Terminal'
        answer3.innerHTML = 'C. ' + 'Concourse'
        answer4.innerHTML = 'D. ' + 'Carousel'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }
    if(questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
        answer1.innerHTML = 'A. ' + 'Phillips'
        answer2.innerHTML = 'B. ' + 'Flymo'
        answer3.innerHTML = 'C. ' + 'Chubb'//correct answer
        answer4.innerHTML = 'D. ' + 'Ronseal'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
        
        answer1.onclick=function(){

            isCorrect = false;
            setTime();
        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    }
    }
    if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
        answer1.innerHTML = 'A. ' + 'Republicanism'
        answer2.innerHTML = 'B. ' + 'Communism'//correct answer
        answer3.innerHTML = 'C. ' + 'Conservatism'
        answer4.innerHTML = 'D. ' + 'Liberalism'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
            

        
        answer1.onclick=function(){

            isCorrect = false;
            setTime();
        }
        answer3.onclick=function(){

        isCorrect = false;
        setTime();
        }
        answer4.onclick=function(){

        isCorrect = false;
        setTime();
        }
    

    }
    if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
        answer1.innerHTML = 'A. ' + 'Angry'
        answer2.innerHTML = 'B. ' + 'Chatty'//correct answer
        answer3.innerHTML = 'C. ' + 'Beautiful'
        answer4.innerHTML = 'D. ' + 'Shy'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime();
            setTime();
        }
        
    
        
        
        answer1.onclick=function(){
                isCorrect = false;                
                setTime();
        }
        answer3.onclick=function(){


                isCorrect = false;
                setTime();
        }
        answer4.onclick=function(){

                isCorrect = false;
                setTime();
        }
    
    }
    if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
        answer1.innerHTML = 'A. ' + 'Bratz Dolls'
        answer2.innerHTML = 'B. ' + 'Sylvanian Families'
        answer3.innerHTML = 'C. ' + 'Hatchimals'
        answer4.innerHTML = 'D. ' + 'Transformers'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }
    if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
        answer1.innerHTML = 'A. ' + 'Childbirth'//correct answer
        answer2.innerHTML = 'B. ' + 'Broken bones'
        answer3.innerHTML = 'C. ' + 'Heart conditions'
        answer4.innerHTML = 'D. ' + 'Old age'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer1.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer4.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }
    if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
        answer1.innerHTML = 'A. ' + 'Empire State Building'
        answer2.innerHTML = 'B. ' + 'Royal Albert Hall'
        answer3.innerHTML = 'C. ' + 'Eiffel Tower'
        answer4.innerHTML = 'D. ' + 'Big Ben Clock Tower'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }
    if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
        answer1.innerHTML = 'A. ' + 'Gray whale'
        answer2.innerHTML = 'B. ' + 'Minke whale'
        answer3.innerHTML = 'C. ' + 'Sperm whale'//correct answer
        answer4.innerHTML = 'D. ' + 'Humpback whale'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
        
    

        answer1.onclick=function(){

            isCorrect = false;
            setTime();
           
        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }

}

function removeIndex() {
    let Index = questionsArrayEasy.indexOf( questionSpace.innerHTML);
    if (Index < 0) return;
  
    questionsArrayEasy.splice(Index, 1);
    const random = questionsArrayEasy[Math.floor(Math.random() * questionsArrayEasy.length)]
    questionSpace.innerHTML = random;

    
    if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
        answer1.innerHTML = 'A. ' + 'Humanity'
        answer2.innerHTML = 'B. ' + 'Health'//correct answer
        answer3.innerHTML = 'C. ' + 'Honour'
        answer4.innerHTML = 'D. ' + 'Household'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
        }
        
        answer1.onclick=function(){
                isCorrect = false;                
                setTime();
        }
        answer3.onclick=function(){

                isCorrect = false;
                setTime();
        }
        answer4.onclick=function(){

                isCorrect = false;
                setTime();
        }
    
    }
    
    else if(questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
        answer1.innerHTML = 'A. ' + 'Pocahontas'
        answer2.innerHTML = 'B. ' + 'Sleeping Beauty'
        answer3.innerHTML = 'C. ' + 'Cinderella'//correct answer
        answer4.innerHTML = 'D. ' + 'Elsa'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
    

        answer1.onclick=function(){

            isCorrect = false;
            setTime();
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    }
    }

    else if(questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
        answer1.innerHTML = 'A. ' + 'Hangar'
        answer2.innerHTML = 'B. ' + 'Terminal'
        answer3.innerHTML = 'C. ' + 'Concourse'
        answer4.innerHTML = 'D. ' + 'Carousel'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }

    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    }
    }
    else if(questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
        answer1.innerHTML = 'A. ' + 'Phillips'
        answer2.innerHTML = 'B. ' + 'Flymo'
        answer3.innerHTML = 'C. ' + 'Chubb'//correct answer
        answer4.innerHTML = 'D. ' + 'Ronseal'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true
            
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }

        answer1.onclick=function(){

            isCorrect = false;
            setTime();
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    }
    }
    else if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
        answer1.innerHTML = 'A. ' + 'Republicanism'
        answer2.innerHTML = 'B. ' + 'Communism'//correct answer
        answer3.innerHTML = 'C. ' + 'Conservatism'
        answer4.innerHTML = 'D. ' + 'Liberalism'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();

        }
        answer1.onclick=function(){

            isCorrect = false;
            setTime();
        }
        answer3.onclick=function(){

        isCorrect = false;
        setTime();
        }
        answer4.onclick=function(){

        isCorrect = false;
        setTime();
        }
    

    }else if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
        answer1.innerHTML = 'A. ' + 'Angry'
        answer2.innerHTML = 'B. ' + 'Chatty'//correct answer
        answer3.innerHTML = 'C. ' + 'Beautiful'
        answer4.innerHTML = 'D. ' + 'Shy'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer2.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime();
            setTime();
        }
        
    
        
        
        answer1.onclick=function(){
                isCorrect = false;                
                setTime();
        }
        answer3.onclick=function(){


                isCorrect = false;
                setTime();
        }
        answer4.onclick=function(){

                isCorrect = false;
                setTime();
        }
    
    }else if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
        answer1.innerHTML = 'A. ' + 'Bratz Dolls'
        answer2.innerHTML = 'B. ' + 'Sylvanian Families'
        answer3.innerHTML = 'C. ' + 'Hatchimals'
        answer4.innerHTML = 'D. ' + 'Transformers'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }

    } else if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
        answer1.innerHTML = 'A. ' + 'Childbirth'//correct answer
        answer2.innerHTML = 'B. ' + 'Broken bones'
        answer3.innerHTML = 'C. ' + 'Heart conditions'
        answer4.innerHTML = 'D. ' + 'Old age'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer1.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer4.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }else if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
        answer1.innerHTML = 'A. ' + 'Empire State Building'
        answer2.innerHTML = 'B. ' + 'Royal Albert Hall'
        answer3.innerHTML = 'C. ' + 'Eiffel Tower'
        answer4.innerHTML = 'D. ' + 'Big Ben Clock Tower'//correct answer
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer4.onclick=function(){
            isCorrect = true

            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            
            
        }
    
        answer1.onclick=function(){

            isCorrect = false;
            setTime();

        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer3.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }else if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
        answer1.innerHTML = 'A. ' + 'Gray whale'
        answer2.innerHTML = 'B. ' + 'Minke whale'
        answer3.innerHTML = 'C. ' + 'Sperm whale'//correct answer
        answer4.innerHTML = 'D. ' + 'Humpback whale'
        answer1.style.backgroundColor = 'rgb(0, 0, 95)'
        answer2.style.backgroundColor = 'rgb(0, 0, 95)'
        answer3.style.backgroundColor = 'rgb(0, 0, 95)'
        answer4.style.backgroundColor = 'rgb(0, 0, 95)'
        answer1.disabled = false;
        answer2.disabled = false;
        answer3.disabled = false;
        answer4.disabled = false;
        changeMoney--;
        console.log(changeMoney)
        if(changeMoney == 10){
            money.innerHTML = 'Question 1/10: $ 100'
        }else if(changeMoney == 9){
            money.innerHTML = 'Question 2/10: $ 200'
        }else if(changeMoney == 8){
            money.innerHTML = 'Question 3/10: $ 500'
        }else if(changeMoney == 7){
            money.innerHTML = 'Question 4/10: $ 1000'
        }else if(changeMoney == 6){
            money.innerHTML = 'Question 5/10: $ 5000'
        }else if(changeMoney == 5){
            money.innerHTML = 'Question 6/10: $ 10 000'
        }else if(changeMoney == 4){
            money.innerHTML = 'Question 7/10: $ 50 000'
        }else if(changeMoney == 3){
            money.innerHTML = 'Question 8/10: $ 100 000'
        }else if(changeMoney == 2){
            money.innerHTML = 'Question 9/10: $ 500 000'
        }else if(changeMoney == 1){
            money.innerHTML = 'Question 10/10: $ 1 000 000'
        }
        answer3.onclick=function(){
            isCorrect = true
            function correctTime(){
                setTimeout(removeIndex,5000)
            }
            correctTime()
            setTime();
            }
        
    

        answer1.onclick=function(){

            isCorrect = false;
            setTime();
           
        
    }
    answer2.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    answer4.onclick=function(){

        isCorrect = false;
        setTime();
    
    }
    }else {
        questionSpace.innerHTML =  'You Win!';
        answer1.innerHTML = ' '
        answer2.innerHTML = ' '
        answer3.innerHTML = ' '
        answer4.innerHTML = ' '
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer2.style.backgroundColor = 'rgb(0, 0, 48)'
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
        answer1.disabled = true;
        answer2.disabled = true;
        answer3.disabled = true;
        answer4.disabled = true;
        money.innerHTML = 'You Win: $ 1 000 000 '
    }
}


randomQuestion();

function changeFifty(){
    if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
        answer1.innerHTML = ' '
        answer4.innerHTML = ' '
        answer1.disabled = true;
        answer4.disabled = true;
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
        answer1.innerHTML = ' '
        answer2.innerHTML = ' '
        answer1.disabled = true;
        answer2.disabled = true;
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer2.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
        answer2.innerHTML = ' '
        answer3.innerHTML = ' '
        answer2.disabled = true;
        answer3.disabled = true;
        answer2.style.backgroundColor = 'rgb(0, 0, 48)'
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
        answer1.innerHTML = ' '
        answer4.innerHTML = ' '
        answer1.disabled = true;
        answer4.disabled = true;
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
        answer3.innerHTML = ' '
        answer4.innerHTML = ' '
        answer3.disabled = true;
        answer4.disabled = true;
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
        answer1.innerHTML = ' '
        answer4.innerHTML = ' '
        answer1.disabled = true;
        answer4.disabled = true;
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
        answer2.innerHTML = ' '
        answer3.innerHTML = ' '
        answer2.disabled = true;
        answer3.disabled = true;
        answer2.style.backgroundColor = 'rgb(0, 0, 48)'
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
        answer3.innerHTML = ' '
        answer4.innerHTML = ' '
        answer3.disabled = true;
        answer4.disabled = true;
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
        answer2.innerHTML = ' '
        answer3.innerHTML = ' '
        answer2.disabled = true;
        answer3.disabled = true;
        answer2.style.backgroundColor = 'rgb(0, 0, 48)'
        answer3.style.backgroundColor = 'rgb(0, 0, 48)'
    }else if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
        answer1.innerHTML = ' '
        answer4.innerHTML = ' '
        answer1.disabled = true;
        answer4.disabled = true;
        answer1.style.backgroundColor = 'rgb(0, 0, 48)'
        answer4.style.backgroundColor = 'rgb(0, 0, 48)'
    }
    fiftyFifty.disabled = true;
    fiftyFifty.style.backgroundColor = 'rgb(0, 0, 48)'
}
function refreshIncorrect(){
    if(isCorrect == false){
        document.location.reload();
    }
    
}
function setTime(){
    setTimeout(refreshIncorrect, 6000);
    setTimeout(revealAnswer, 3000);
}

function revealAnswer(){
    if(isCorrect == true || isCorrect == false){
        if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
            answer2.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
            answer3.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
            answer4.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
            answer3.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
            answer2.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
            answer2.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
            answer4.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
            answer1.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
            answer4.style.backgroundColor = 'green';
        }else if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
            answer3.style.backgroundColor = 'green';
        }
        
    }
}
function Audience(){
    if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
        logoImg.src = 'img/StatsAudience1.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
        logoImg.src = 'img/StatsAudience2.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
        logoImg.src = 'img/StatsAudience3.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
        logoImg.src = 'img/StatsAudience4.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
        logoImg.src = 'img/StatsAudience5.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
        logoImg.src = 'img/StatsAudience6.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
        logoImg.src = 'img/StatsAudience3.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
        logoImg.src = 'img/StatsAudience7.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
        logoImg.src = 'img/StatsAudience3.png';
        logoImg.className = 'img-stat';
    }else if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
        logoImg.src = 'img/StatsAudience2.png';
        logoImg.className = 'img-stat';
    }

    function ChangeBack(){
        if(logoImg.src = 'img/StatsAudience1.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience2.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience3.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience4.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience5.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience6.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }else if(logoImg.src = 'img/StatsAudience7.png'){
            logoImg.src = 'img/logo_1.png';
            logoImg.className = 'logo-img';
        }

    }
    function ChangeBackTime(){
        setTimeout(ChangeBack,4000);
    }
    ChangeBackTime();
    audience.disabled = true;
    audience.style.backgroundColor = 'rgb(0, 0, 48)'
}
function callFriend(){
    if(questionSpace.innerHTML == 'In the UK, the abbreviation NHS stands for National what Service?'){
        let randomise1 = CallAfriend_B[Math.floor(Math.random() * CallAfriend_B.length)]
            CallFriendOutput.innerHTML = randomise1;
    }else if (questionSpace.innerHTML == 'Which Disney character famously leaves a glass slipper behind at a royal ball?'){
        let randomise2 = CallAfriend_C[Math.floor(Math.random() * CallAfriend_C.length)]
            CallFriendOutput.innerHTML = randomise2;
    }else if (questionSpace.innerHTML == 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?'){
        let randomise3 = CallAfriend_D[Math.floor(Math.random() * CallAfriend_D.length)]
            CallFriendOutput.innerHTML = randomise3;
    }else if (questionSpace.innerHTML == 'Which of these brands was chiefly associated with the manufacture of household locks?'){
        let randomise4 = CallAfriend_C[Math.floor(Math.random() * CallAfriend_C.length)]
            CallFriendOutput.innerHTML = randomise4;
    }else if(questionSpace.innerHTML == 'The hammer and sickle is one of the most recognisable symbols of which political ideology?'){
        let randomise5 = CallAfriend_B[Math.floor(Math.random() * CallAfriend_B.length)]
            CallFriendOutput.innerHTML = randomise5;
    }else if(questionSpace.innerHTML == 'What does the word loquacious mean?'){
        let randomise6 = CallAfriend_B[Math.floor(Math.random() * CallAfriend_B.length)]
            CallFriendOutput.innerHTML = randomise6;
    }else if(questionSpace.innerHTML == 'Which toys have been marketed with the phrase “robots in disguise”?'){
        let randomise7 = CallAfriend_D[Math.floor(Math.random() * CallAfriend_D.length)]
            CallFriendOutput.innerHTML = randomise7;
    }else if(questionSpace.innerHTML == 'Obstetrics is a branch of medicine particularly concerned with what?'){
        let randomise8 = CallAfriend_A[Math.floor(Math.random() * CallAfriend_A.length)]
            CallFriendOutput.innerHTML = randomise8;
    }else if(questionSpace.innerHTML == 'Construction of which of these famous landmarks was completed first?'){
        let randomise9 = CallAfriend_D[Math.floor(Math.random() * CallAfriend_D.length)]
        CallFriendOutput.innerHTML = randomise9;
    }else if(questionSpace.innerHTML == 'Which of these cetaceans is classified as a “toothed whale”?'){
        let randomise10 = CallAfriend_C[Math.floor(Math.random() * CallAfriend_C.length)]
            CallFriendOutput.innerHTML = randomise10;
    }

    function ChangeNothing(){
        if(CallFriendOutput.innerHTML == 'Friend: Intelligence isn’t your best feature, is it? This is the easiest question! The answer is «B»' ||
        CallFriendOutput.innerHTML == 'Friend: I’m tempted to leave you hanging because this is just too easy. How can you possibly be confused? The correct answer is «B»!' ||
        CallFriendOutput.innerHTML == 'Friend: Oh im not sure but i think i’ve heard somthing about this topic on the TV, the right one should be answer «B».'){
            CallFriendOutput.innerHTML = ' ';
        }else if(CallFriendOutput.innerHTML == 'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «C».' ||
        CallFriendOutput.innerHTML == 'Friend: Ha-ha! And here I thought you knew everything. Even I know the correct answer is «C». You should go with that.' ||
        CallFriendOutput.innerHTML == 'Friend: That’s easy! Can’t believe you need to ask. The correct answer is «C».'){
            CallFriendOutput.innerHTML = ' ';
        }else if(CallFriendOutput.innerHTML == 'Friend: You definitely asked the right friend! «D» is the correct answer. I’m sure of it.' ||
        CallFriendOutput.innerHTML == 'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «D».' ||
        CallFriendOutput.innerHTML == 'Friend: Hi, I read something about this recently and am sure the correct answer is «D».'){
            CallFriendOutput.innerHTML = ' ';
        }else if(CallFriendOutput.innerHTML == 'Friend: You definitely asked the right friend! «A» is the correct answer. I’m sure of it.' ||
        CallFriendOutput.innerHTML == 'Friend: Are you sure you read the question correctly? Because if you did, you’d know the correct answer is obviously «A».' ||
        CallFriendOutput.innerHTML == 'Friend: Hi, I read something about this recently and am sure the correct answer is «A».'){
            CallFriendOutput.innerHTML = ' ';
        }
    }
    function ChnageNothingTime (){
        setTimeout(ChangeNothing, 6000);
    }
    ChnageNothingTime();
    
    callfriend.disabled = true;
    callfriend.style.backgroundColor = 'rgb(0, 0, 48)'
}




    
    



