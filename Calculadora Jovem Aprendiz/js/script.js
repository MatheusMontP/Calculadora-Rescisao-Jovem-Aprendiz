//Funcoes responsaveis por calcular as ferias dos diferentes tipos de rescisao
function calcularFerias_AprendizSemFerias_FimContrato (salarioBruto, mesesContrato) {
    const mesesProporcionais = mesesContrato - 12;
    const valorFeriasProporcionais = (salarioBruto / 12) * mesesProporcionais;
    const tercoDasProporcionais = valorFeriasProporcionais / 3;
    const feriasProporcinaisComTerco = valorFeriasProporcionais + tercoDasProporcionais;
    
    const feriasVencidasComTerco = (salarioBruto + salarioBruto / 3);

    const valorFerias = feriasProporcinaisComTerco + feriasVencidasComTerco;
    return valorFerias;
}
function calcularFerias_AprendizSemFerias_SemJustaCausaPedidoDemissao (salarioBruto, mesesRestantes) {
    const mesesProporcionais = mesesRestantes - 12;
    const valorFeriasProporcionais = (salarioBruto / 12) * mesesProporcionais;
    const tercoDasProporcionais = valorFeriasProporcionais / 3;
    const feriasProporcinaisComTerco = valorFeriasProporcionais + tercoDasProporcionais;
    
    const feriasVencidasComTerco = (salarioBruto + salarioBruto / 3);
    
    const valorFerias = feriasProporcinaisComTerco + feriasVencidasComTerco;
    return valorFerias;
}
function calcularFerias_AprendizComFerias_FimContrato (salarioBruto, mesesContrato) {
    const mesesProporcionais = mesesContrato - 12;
    const valorFeriasProporcionais =  (salarioBruto / 12) * mesesProporcionais;
    const tercoDasProporcionais = valorFeriasProporcionais / 3;
    
    const valorFerias = valorFeriasProporcionais + tercoDasProporcionais;
    return valorFerias;
}
function calcularFerias_AprendizComFerias_SemJustaCausaPedidoDemissao (salarioBruto, mesesRestantes) {
    if (mesesRestantes <= 12) {
        let valor = 0
        return valor;
    } else {
        const mesesProporcionais = mesesRestantes - 12;
        const valorFeriasProporcionais =  (salarioBruto / 12) * mesesProporcionais;
        
        const tercoDasProporcionais = valorFeriasProporcionais / 3;

        const valorFerias = valorFeriasProporcionais + tercoDasProporcionais;
        return valorFerias;
    }
}
function calcularFerias_AprendizComFerias_ComJustaCausa (salarioBruto, mesesRestantes) {
    if (mesesRestantes <= 11) {
        let valor = 0
        return valor;
    } else {
        const descontoBase = salarioBruto / 3;
        const valorFinal = salarioBruto + descontoBase;
        return valorFinal;
    }
}

//Funcao responsavel por calcular o saldo salario
function calcularSaldoSalario (salarioBruto, diasTrabalhados) {
    const saldoSalario = (salarioBruto / 30) * diasTrabalhados;
    return saldoSalario;
}

//Funcao responsavel por calcular o decimo terceiro proporcional
function calcularDecimoTerceiroProporcional (salarioBruto, mesesTrabalhados) {
    const resultado = (salarioBruto / 12) * mesesTrabalhados;
    return resultado;
}

//Funcoes responsaveis por calcular o FGTS dos diferentes tipos de rescisao
function calcularFGTS_AprendizSemFerias_FimContrato (salarioBruto, mesesContrato, valorDecimoTerceiro) {
    const valorFGTSBruto = (salarioBruto * mesesContrato) * 0.02;
    
    const valorFGTS13Salario = valorDecimoTerceiro * 0.02;

    const valorFGTS = valorFGTSBruto + valorFGTS13Salario;
    return valorFGTS;

}
function calcularFGTS_AprendizComFerias_SemJustaCausa (salarioBruto, mesesRestantes, valorDecimoTerceiro) {
    const valorFGTSBruto = (salarioBruto * mesesRestantes) * 0.02;

    const valorFGTS13Salario = valorDecimoTerceiro * 0.02;

    const valorFGTS = valorFGTSBruto + valorFGTS13Salario;
    return valorFGTS
}
function calcularFGTS_AprendizSeemFerias_SemJustaCausa (salarioBruto, mesesRestantes, valorDecimoTerceiro) {
    const valorFGTSBruto = (salarioBruto * mesesRestantes) * 0.02;
    
    const valorFGTSFerias = (salarioBruto + salarioBruto / 3) * 0.02;

    const valorFGTS13Salario = valorDecimoTerceiro * 0.02;

    const valorFGTS = valorFGTSBruto + valorFGTS13Salario + valorFGTSFerias;
    return valorFGTS;
}
function calculoFgtsComFerias (salarioBruto, mesesContrato, valorDecimoTerceiro) {
    const valorFGTSBruto = (salarioBruto * 0.02) * mesesContrato;
    
    const valorFGTS13Salario = valorDecimoTerceiro * 0.02

    const valorFGTSFerias = (salarioBruto + salarioBruto / 3) * 0.02

    const valorFGTS = valorFGTSBruto + valorFGTS13Salario + valorFGTSFerias;
    return valorFGTS;
}

// Funcao responsavel por calcular a indenizacao
function indenizacaoComFerias (salarioBruto, mesesContrato, mesesRestantes) {
    if (mesesContrato < mesesRestantes) {
        alert("O total de meses trabalhados não pode ser maior que o total de meses do contrato.")
    } else {
        const totalRestante = mesesContrato - mesesRestantes
        const valorIndenizacao = (salarioBruto * totalRestante) / 2;
        return valorIndenizacao;
    }
}

//Funcao principal do site
function calcularRescisao () {
    const tipoDesligamentoSelect = document.getElementById('tipoDesligamento');
    const feriasSim = document.getElementById('feriasSim').checked;
    const feriasNao = document.getElementById('feriasNao').checked;

    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value); 
    const diasTrabalhadosMesRescisao = parseFloat(document.getElementById('diasRescisaoInput').value);
    const mesesContrato = parseFloat(document.getElementById('mesesContrato').value);
    const meses13Salario = parseFloat(document.getElementById('13Salario').value);
    const mesesPosVencimento = parseInt(document.getElementById('mesesPosVencimento').value);
    const mesesRestantes = parseFloat(document.getElementById("mesesTrabalhados").value);
    const tipoDesligamento = document.getElementById("tipoDesligamento").value;

    var valorSaldoSalario = 0;
    let valorDecimoTerceiro = 0;
    let valorFerias = 0;
    let valorFGTS = 0;

    if (isNaN(salarioBruto) || isNaN(diasTrabalhadosMesRescisao) || isNaN(meses13Salario) || isNaN(mesesContrato)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    if (meses13Salario < 0 || meses13Salario > 12) {
        alert("MESES TRABALHADOS NO ÚLTIMO ANO: apenas números de 0 a 12.");
        return;
    }
   if (diasTrabalhadosMesRescisao < 0 || diasTrabalhadosMesRescisao > 31) {
        alert("DIAS TRABALHADOS NO MÊS DA RESCISÃO: apenas números de 0 a 31.");
        return;
    }
    if (mesesContrato < 0 || mesesContrato > 24) {
        alert("DURAÇÃO DO CONTRATO: apenas números de 0 a 24.");
        return;
    }
    if (tipoDesligamento === 'fimContrato') {
        if (feriasSim) {
            if(isNaN(mesesContrato)) {
                alert("Por favor, preencha todos os campos corretamente.")
            }
            if (mesesContrato < 0 || mesesContrato > 24) {
                alert("MESES TRABALHADOS APÓS O PRIMEIRO ANO DE CONTRATO: apenas números de 0 a 12.");
                return;
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(3));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizComFerias_FimContrato(salarioBruto, mesesContrato).toFixed(2));
            valorFGTS = parseFloat(calculoFgtsComFerias(salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao).toFixed(2));
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));

            let valorIndenizacao = 0
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;
        } else if (feriasNao) {
            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizSemFerias_FimContrato(salarioBruto, mesesContrato).toFixed(2));
            valorFGTS = parseFloat(calcularFGTS_AprendizSemFerias_FimContrato(salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao).toFixed(2));
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));
            let valorIndenizacao = 0

            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;
        } else {
            alert("Por favor, selecione se possui ou não férias vencidas.")
        }
        
    } else if (tipoDesligamento === 'semJustaCausa') {
        if(feriasSim) {
            if (isNaN(mesesRestantes)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesRestantes < 0 || mesesRestantes > 24) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizComFerias_SemJustaCausaPedidoDemissao(salarioBruto, mesesRestantes).toFixed(2));
            valorFGTS = parseFloat(calcularFGTS_AprendizSeemFerias_SemJustaCausa(salarioBruto, mesesRestantes, valorDecimoTerceiro).toFixed(2));
            valorIndenizacao = parseFloat(indenizacaoComFerias(salarioBruto, mesesContrato, mesesRestantes).toFixed(2))
            
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias + valorIndenizacao).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));
            let valorFinalIndenizacao = parseFloat((valorFinal).toFixed(2));
            
            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinalIndenizacao;
        } else if (feriasNao) {
            if (isNaN(mesesRestantes)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesRestantes < 0 || mesesRestantes > 24) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizSemFerias_SemJustaCausaPedidoDemissao(salarioBruto, mesesRestantes).toFixed(2));
            valorFGTS = parseFloat(calcularFGTS_AprendizComFerias_SemJustaCausa(salarioBruto, mesesRestantes, valorDecimoTerceiro, diasTrabalhadosMesRescisao).toFixed(2));
            valorIndenizacao = parseFloat(indenizacaoComFerias(salarioBruto, mesesContrato, mesesRestantes).toFixed(2))

            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias + valorIndenizacao).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));
            let valorFinalIndenizacao = parseFloat((valorFinal).toFixed(2));

            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinalIndenizacao;
        } else {
            alert("Por favor, selecione se possui ou não férias vencidas.");
        }
        
    } else if (tipoDesligamento === 'comJustaCausa') {
        if (feriasSim) {
            if (isNaN(mesesRestantes)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesRestantes < 0 || mesesRestantes > 24) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }
            if (mesesRestantes > mesesContrato) {
                alert("MESES TRABALHADOS: não pode ser maior que a duração do contrato.")
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = 0;
            valorFerias = 0;
            valorFGTS = 0;
            valorIndenizacao = 0;
            
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias + valorIndenizacao).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));
            
            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;
        } else if (feriasNao) {
            if (isNaN(mesesRestantes)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesRestantes < 0 || mesesRestantes > 24) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }
            if (mesesRestantes > mesesContrato) {
                alert("MESES TRABALHADOS: não pode ser maior que a duração do contrato.")
            }
            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = 0;
            valorFerias = parseFloat(calcularFerias_AprendizComFerias_ComJustaCausa(salarioBruto, mesesRestantes).toFixed(2));
            valorFGTS = 0;
            valorIndenizacao = 0;
            
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias + valorIndenizacao).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));

            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;
        } else {
            alert("Por favor, selecione se possui ou não férias vencidas.");
        }
    } else if (tipoDesligamento === 'pedidoDemissao') {
        if (feriasSim) {
            if (isNaN(mesesPosVencimento)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesPosVencimento < 0 || mesesPosVencimento > 12) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }

            if (mesesRestantes > mesesContrato) {
                alert("MESES TRABALHADOS: não pode ser maior que a duração do contrato.")
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizComFerias_SemJustaCausaPedidoDemissao(salarioBruto, mesesRestantes).toFixed(2));
            valorFGTS = 0;
            valorIndenizacao = 0
            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));
            
            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;

        } else if (feriasNao) {
            if (isNaN(mesesRestantes)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            if (mesesRestantes < 0 || mesesRestantes > 24) {
                alert("MESES TRABALHADOS: apenas números de 0 a 24.");
                return;
            }

            if (mesesRestantes > mesesContrato) {
                alert("MESES TRABALHADOS: não pode ser maior que a duração do contrato.")
            }

            valorSaldoSalario = parseFloat(calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao).toFixed(2));
            valorDecimoTerceiro = parseFloat(calcularDecimoTerceiroProporcional(salarioBruto, meses13Salario).toFixed(2));
            valorFerias = parseFloat(calcularFerias_AprendizSemFerias_SemJustaCausaPedidoDemissao(salarioBruto, mesesRestantes).toFixed(2));
            valorFGTS = 0;
            valorIndenizacao = 0;

            let valorBase = parseFloat((valorSaldoSalario + valorDecimoTerceiro + valorFerias).toFixed(2));
            let valorBaseDesconto = parseFloat((valorSaldoSalario + valorDecimoTerceiro).toFixed(2));
            let valorDesconto = parseFloat((valorBaseDesconto * 0.075).toFixed(2));
            let valorFinal = parseFloat((valorBase - valorDesconto).toFixed(2));

            document.getElementById('resSaldoSalario').textContent = valorSaldoSalario;
            document.getElementById('resDecimoTerceiro').textContent = valorDecimoTerceiro;
            document.getElementById('resFerias').textContent = valorFerias;resIndenizacao
            document.getElementById('resIndenizacao').textContent = valorIndenizacao;
            document.getElementById('resValorBase').textContent = valorBase;
            document.getElementById('resFGTS').textContent = valorFGTS;
            document.getElementById('resDesconto').textContent = valorDesconto;
            document.getElementById('resValorFinal').textContent = valorFinal;
        } else {
            alert("Por favor, selecione se possui ou não férias vencidas.");
        }
    } else {
        alert("Por favor, selecione um tipo de desligamento");
    }
    
    const totalRescisao = valorSaldoSalario + valorDecimoTerceiro + valorFerias;
}

//Funcoes para aparecer campos opicionais
function aparecerOpcoes () {
    const feriasSim = document.getElementById('feriasSim');
    const feriasNao = document.getElementById('feriasNao');
    const feriasGrupo = document.getElementById('qntdFeriasGrupo');
    const qntdFerias = document.getElementById('mesesPosVencimento'); 

    if (feriasSim.checked) {
        feriasGrupo.style.display = "block";
        qntdFerias.focus();
    } else {
        feriasGrupo.style.display = "none";
        qntdFerias.value = ''; 
    }
}
function controlarVisibilidades() {
    const tipoDesligamentoSelect = document.getElementById('tipoDesligamento');
    const grupoMesesTrabalhados = document.getElementById('grupoMesesTrabalhados');
    const inputMesesTrabalhados = document.getElementById('mesesTrabalhados')

    if (tipoDesligamentoSelect.value === "semJustaCausa" || tipoDesligamentoSelect.value === "comJustaCausa" || tipoDesligamentoSelect.value === "pedidoDemissao") {
        grupoMesesTrabalhados.style.display = 'block';
        inputMesesTrabalhados.focus();
    } else {
        grupoMesesTrabalhados.style.display = 'none';
        inputMesesTrabalhados.value = '';
    }
}

const tipoDesligamento = document.getElementById('tipoDesligamento');
tipoDesligamento.addEventListener('change', controlarVisibilidades);
controlarVisibilidades();

const feriasSim = document.getElementById('feriasSim');
feriasSim.addEventListener('change', aparecerOpcoes);
const feriasNao = document.getElementById('feriasNao'); 
feriasNao.addEventListener('change', aparecerOpcoes);

aparecerOpcoes();
