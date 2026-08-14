const inputUpload = document.getElementById('meu-upload')

var url_imagem = ""
var nome = ""

//const textoNome = document.getElementById('nome-arquivo');

inputUpload.addEventListener('change', function(evento) {

    //Pega o primeiro arquivo selecionado
    const arquivo = evento.target.files[0]
    
    if (arquivo) {
        url_imagem = arquivo.name
        const nomeDaImagem = arquivo.name;

    } else {    
        console.log("Nenhum arquivo selecionado")

    }
});     

const n = document.getElementById("nome")

const btn = document.getElementById("salvar")

btn.addEventListener("click", ()=> {
    nome = n.value
    console.log(n.value)
    criarUsuario()
}) 

//POST

async function criar() {
    const novo = {"nome": nome, "url": url_imagem}

    const response = await feitch("http://localhost:3000/alunos", {
        method: "POST",
        headers: {
            'Content type': 'aplication/json'
        },
        body: JSON.stringify(novo)
    })
}