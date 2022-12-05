//CEP COM PREENCHIMENTO AUTOMÁTICO - início

let cep = document.querySelector('#cep');
let endereco = document.querySelector('#endereco');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.value = '';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {

    if("erro" in resposta) {
        alert('Seu CEP não foi encontrado. Tente novamente.');
        return;
    }

    console.log(resposta);
    endereco.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}

//CEP COM PREENCHIMENTO AUTOMÁTICO - fim


//ERRO AO NÃO PREENCHER CAMPOS - início

const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const data = document.getElementById("floatingInputValue")
const form = document.getElementById("form")
const btn = document.getElementById("btn")
const alert = document.getElementById("alert")
const regex = /^\w+([-+.']'\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

btn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!regex.test(data.value) || sobrenome.value == "") {
        form.classList.add("was-validated")
    } else {
        alert.style.display = "flex"
        setTimeout(() => location.href = "./plataforma.html",2000)
    }

})

//ERRO AO NÃO PREENCHER CAMPOS - fim