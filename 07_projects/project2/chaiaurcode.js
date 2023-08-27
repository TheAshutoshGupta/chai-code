const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===''||height<0||isNaN(height))
    {
        results.innerHTML="please give a valid height"
    }

    else if(weight===''||weight<0||isNaN(weight))
    {
        results.innerHTML="please give a valid height"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
    
        let display="";
        if(bmi>=24.9){
        display="overweight";
        }
        else if(bmi<24.9 &&bmi>18.6){
        display= "normal"
        }
        else{
            display="underweight"
        }
        
    results.innerHTML=`<span>${bmi} which is ${display}</span>`;
    }

});