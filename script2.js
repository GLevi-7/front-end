const inputUpload = document.getElementById('meu-upload')
const nome = document.getElementById('nome')

//const textoNome = document.getElementById('nome-arquivo');

inputUpload.addEventListener('change', function(evento) {

    //Pega o primeiro arquivo selecionado
    const arquivo = evento.target.files[0]
    
    if (arquivo) {
        //Obtém o nome da imagem
        const nomeDaImagem = arquivo.name;

    } else {
        console.log("Nenhum arquivo selecionado")

    }
});     

const n = document.getElementById("nome")

const btn = document.getElementById("salvar")

btn.addEventListener("click", ()=> {
    console.log(n.value)
})