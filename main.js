const form = document.getElementById('form-contato');
const contatosAdicionados = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaContatosAdicionados()
})

function adicionaLinha() {
    
    const InputNomeContato = document.getElementById('nome-contato');
    const InputNumeroTelefone = document.getElementById('numero-telefone');

    if (contatosAdicionados.includes(InputNomeContato.value)) {
        alert(`O contato ${InputNomeContato.value} já foi adicionado!`)
    } else {
        contatosAdicionados.push(InputNomeContato.value)

    let linha = '<tr>';
    linha += `<td>${InputNomeContato.value}</td>`;
    linha += `<td>${InputNumeroTelefone.value}</td>`;
    linha +='</tr>';

    linhas += linha;
    }

    InputNomeContato.value = ''
    InputNumeroTelefone.value = ''
}

function atualizaTabela(){
    
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}

function atualizaContatosAdicionados() {
    document.getElementById('total-contatos').innerHTML = contatosAdicionados.length
    }