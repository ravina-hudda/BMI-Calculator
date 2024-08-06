const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height= parseInt((document.querySelector('#height')).value)
    const weight= parseInt((document.querySelector('#weight')).value)
    const result= document.querySelector('#results')

    if(height===' '||height<0|| isNaN(height)){
        result.innerHTML='Invalid height'
    }
    else if(weight===' '||weight<0|| isNaN(weight)){
        result.innerHTML='Invalid weight'
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        // result.innerHTML=bmi
        if(bmi>24.9)
        {result.innerHTML= `<span>${bmi}</span> <span>Over weight</span>`}
        else if(bmi<18.6)
            {result.innerHTML= `<span>${bmi}</span> <span>under weight</span>`}
        else 
            {result.innerHTML= `<span>${bmi}</span> <span>Normal</span>`}
    }
})
