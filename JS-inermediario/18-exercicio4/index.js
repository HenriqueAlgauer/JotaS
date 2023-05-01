//1- pegar elementos 
//2- fazer laço if 
    //- if element.value !== ''
        //element.classList.add('verde')  
    //- else 
        //element.classList.remove('verde')

inputs = document.querySelectorAll('.input')

inputs.forEach(input=>{
    input.addEventListener('change',()=>{
        if (input.value !== '') {
            input.classList.add('verde')
        }else{
            input.classList.remove('verde')
        }
    })
})