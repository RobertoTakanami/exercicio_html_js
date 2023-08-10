const btn = document.querySelector("#send");

btn.addEventListener('click', function(e) {
    
    e.preventDefault();
    const n1 = document.querySelector("#first");
    const n2 = document.querySelector("#second");
    const value1 = n1.value;
    const value2 = n2.value; 
    const mensagemPositiva = `O número ${value2} é maior que o número ${value1}.`;
    const mensagemNegativa = `O número ${value2} não é maior que o número ${value1}.`;

    let valorMaior = max(value1,value2);

    function max(value1,value2) {
        if(value2 > value1) {
            const containerMensagemPositiva = document.querySelector('.success-message');
            containerMensagemPositiva.innerHTML = mensagemPositiva;
            containerMensagemPositiva.style.display = 'block';
        }else{
            const containerMensagemNegativa = document.querySelector('.unsuccess-message');
            containerMensagemNegativa.innerHTML = mensagemNegativa;
            containerMensagemNegativa.style.display = 'block'; 
        }
    }   
})
