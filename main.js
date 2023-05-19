function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pmfe1pxX0/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

dog = 0;
cat = 0;
cow = 0;
lion = 0;

function gotResult (error , result) {
    if(error){
        console.error(error);
    }else {
        console.log(result);

        random_number_r = Math.floor(Math.random()*255) + 1 ;
        random_number_g = Math.floor(Math.random()*255) + 1 ;
        random_number_b = Math.floor(Math.random()*255) + 1 ;

        document.getElementById("name").innerHTML = 'Detected voice is of - ' + result[0].label;
        document.getElementById("counts1").innerHTML = 'detected  dog ' + (dog);
        document.getElementById("counts2").innerHTML = 'detected  cat ' + (cat);
        document.getElementById("counts3").innerHTML = 'detected  cow ' + (cow);
        document.getElementById("counts4").innerHTML = 'detected  lion ' + (lion);

        document.getElementById("name").style.color = "rgb(" + random_number_r+"," +random_number_g+"," +random_number_b + ")";
        document.getElementById("counts1").style.color = "rgb(" + random_number_r+"," +random_number_g+"," +random_number_b + ")";
        document.getElementById("counts2").style.color = "rgb(" + random_number_r+"," +random_number_g+"," +random_number_b + ")";
        document.getElementById("counts3").style.color = "rgb(" + random_number_r+"," +random_number_g+"," +random_number_b + ")";
        document.getElementById("counts4").style.color = "rgb(" + random_number_r+"," +random_number_g+"," +random_number_b + ")";


        img = document.getElementById('ear.png')
        img1 = document.getElementById('dog.webp')
        img2 = document.getElementById('cat.jpg')
        img3 = document.getElementById('cow.jpg')
        img4 = document.getElementById('lion.jpg')
        

        if (result[0].label == "barking")
         {
            img.src = 'ear.png';
            img1.src = 'dog.webp';
            img2.src = 'cat.jpg';
            img3.src = 'cow.jpg';
            img4.src = 'lion.jpg';
            
            
         }
         else if (result[0].label == "meowing") 
         { 
            img.src = 'cat.jpg' ;
            
         } 
         else if (result[0].label == "mooing")
          { img.src = 'cow.jpg';
       
            }
            else if (result[0].label == "roaring")
            { 
                img.src = 'lion.jpg';
                
             
        }
        else (result[0].label == "background noise")
            { 
                img.src = 'ear.png';
            
        }

        
    
        }
}