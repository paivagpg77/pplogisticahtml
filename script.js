function mostrarAba(id) {
    document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}

// Simulação de banco de dados em memória (substituir por back-end real)
let funcionarios = [];

// Cadastro
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;
    const sexo = document.getElementById('sexo').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const cargo = document.getElementById('cargo').value.trim();

    if (!nome || !dia || !mes || !ano || !sexo || !cpf || !cargo) {
        document.getElementById('msgCadastro').textContent = "Preencha todos os campos!";
        return;
    }

    const nascimento = new Date(ano, mes - 1, dia);
    const idade = new Date().getFullYear() - nascimento.getFullYear();

    funcionarios.push({ nome, nascimento: nascimento.toLocaleDateString(), idade, sexo, cpf, cargo });
    document.getElementById('msgCadastro').textContent = `Funcionário ${nome} cadastrado com sucesso!`;
    atualizarLista();
    this.reset();
});

// Listar
function atualizarLista() {
    const div = document.getElementById('listaFuncionarios');
    div.innerHTML = '';
    funcionarios.forEach(f => {
        div.innerHTML += `<div>${f.nome} — ${f.cargo} | ${f.idade} anos | CPF: ${f.cpf}</div>`;
    });
}

// Buscar
function buscarFuncionario() {
    const nome = document.getElementById('nomeBusca').value.trim().toLowerCase();
    const res = funcionarios.find(f => f.nome.toLowerCase() === nome);
    document.getElementById('resultadoBusca').textContent = res ? JSON.stringify(res, null, 2) : "Funcionário não encontrado.";
}

// Locar Caminhão
function locarCaminhao() {
    const nome = document.getElementById('nomeMotorista').value.trim();
    const carga = document.getElementById('tipoCarga').value;
    const num = document.getElementById('numCaminhao').value.trim();

    const f = funcionarios.find(f => f.nome.toLowerCase() === nome.toLowerCase());
    if (!f) {
        document.getElementById('msgLocacao').textContent = "Motorista não encontrado!";
        return;
    }

    if (!f.cargo.toLowerCase().startsWith("motorista")) {
        document.getElementById('msgLocacao').textContent = "Funcionário não é motorista!";
        return;
    }

    // Aqui você poderia validar permissões reais por carga
    document.getElementById('msgLocacao').textContent = `Caminhão ${num} locado para ${f.nome} (carga: ${carga}).`;
}
