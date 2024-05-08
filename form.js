const handleSubmit = (Event) =>{
    Event.preventDefault();
    fetch('https://api.sheetmonkey.io/form/rq7WuADCBnMtBAatPtRLFW',{
        method:'post', 
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
        Nome: document.getElementById("nome").value,
        'Data de nascimeto': document.getElementById("data_nascimeto").value,
        Endereço: document.getElementById("endereco").value,
        Telefone: document.getElementById("tel").value,
        Curso: document.getElementById('cursos').value,
        Escolariedade: document.getElementById('escolariedade').value})
    });
}


document.querySelector("form").addEventListener('submit', handleSubmit)