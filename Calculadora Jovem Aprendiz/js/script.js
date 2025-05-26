function calcularFeriasComVencidas (salarioBruto, mesesPosVencimento, mesesContrato) {
    const valorBase = mesesContrato - 12;
    const valorBaseFeriasProporcionais = (salarioBruto / 12) * valorBase;
    const tercoDasProporcionais = valorBaseFeriasProporcionais / 3;
    const feriasProporcinaisComTerco = valorBaseFeriasProporcionais + tercoDasProporcionais;
    
    const feriasVencidas = (salarioBruto + salarioBruto / 3);
    const feriasVencidasEProporcionais = feriasProporcinaisComTerco + feriasVencidas;
    return feriasVencidasEProporcionais;
}

function calcularFeriasSemVencidas (salarioBruto, mesesPosVencimento) {
    const valorBase = mesesPosVencimento - 12;
    const valorBaseProporcional =  (salarioBruto / 12) * valorBase;
    const tercoDasProporcionais = valorBaseProporcional / 3;
    return valorBaseProporcional + tercoDasProporcionais;
}

function calcularSaldoSalario (salarioBruto, diasTrabalhados) {
    const resultado = (salarioBruto / 30) * diasTrabalhados;
    return resultado;
}

function calcularDecimoTerceiro (salarioBruto, mesesTrabalhados) {
    const resultado = (salarioBruto / 12) * mesesTrabalhados;
    return resultado;
}

function calculoFgtsSemFerias (salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao) {
    const baseFgts = mesesContrato - 1;
    const baseFgtsBruto = (salarioBruto * baseFgts) * 0.02;
    

    const baseUltimoMes = (salarioBruto / 30) * diasTrabalhadosMesRescisao;
    const baseFgtsUltimoMes = baseUltimoMes * 0.02;
    const FGTS = baseFgtsBruto + baseFgtsUltimoMes;
    
    const base13Proporcional = valorDecimoTerceiro * 0.02;
    const FGTS13Salario = base13Proporcional;
    
    return FGTS + FGTS13Salario;

}

function calculoFgtsComFerias (salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao) {
    const baseFgts = mesesContrato - 1;
    const baseFgtsBruto = (salarioBruto * 0.02) * baseFgts;

    const baseUltimoMes = (salarioBruto / 30) * diasTrabalhadosMesRescisao;
    const baseFgtsUltimoMes = baseUltimoMes * 0.02;
    const baseFGTS13 = valorDecimoTerceiro * 0.02

    const tercoSalario = (salarioBruto / 3) * 0.02
    const FGTS = baseFgtsBruto + baseFgtsUltimoMes + baseFGTS13 + tercoSalario;
    
    return FGTS;
}


function calcularRescisao () {
    const feriasSim = document.getElementById('feriasSim').checked;
    const feriasNao = document.getElementById('feriasNao').checked;

    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value); 
    const diasTrabalhadosMesRescisao = parseFloat(document.getElementById('diasRescisaoInput').value);
    const mesesContrato = parseFloat(document.getElementById('mesesContrato').value);
    const meses13Salario = parseFloat(document.getElementById('13Salario').value);
    const mesesPosVencimento = parseInt(document.getElementById('mesesPosVencimento').value);
    const tipoDesligamento = document.getElementById("tipoDesligamento").value;

    var valorSaldoSalario = 0;
    let valorDecimoTerceiro = 0;
    let valorFerias = 0;
    let valorFGTS = 0;



    if (isNaN(salarioBruto) || isNaN(diasTrabalhadosMesRescisao) || isNaN(meses13Salario)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (tipoDesligamento === 'fimContrato') {
        if (feriasSim) {

            if(isNaN(mesesPosVencimento)) {
                alert("Por favor, preencha todos os campos corretamente.")
            }
            valorSaldoSalario = calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao);
            valorDecimoTerceiro = calcularDecimoTerceiro(salarioBruto, meses13Salario);
            valorFerias = calcularFeriasSemVencidas(salarioBruto, mesesContrato);
            valorFGTS = calculoFgtsComFerias(salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao);

            const valorBase = valorSaldoSalario + valorDecimoTerceiro + valorFerias
            const valorBaseDesconto = valorSaldoSalario + valorDecimoTerceiro 
            const valorDesconto = valorBaseDesconto * 0.075
            const valorFinal = valorBase - valorDesconto

           console.log("O valor da rescisao e", valorFinal, "O valor do FGTS e", valorFGTS)
        } else if (feriasNao) {
            valorSaldoSalario = calcularSaldoSalario(salarioBruto, diasTrabalhadosMesRescisao);
            valorDecimoTerceiro = calcularDecimoTerceiro(salarioBruto, meses13Salario);
            valorFerias = calcularFeriasComVencidas(salarioBruto, meses13Salario, mesesContrato)
            valorFGTS = calculoFgtsSemFerias(salarioBruto, mesesContrato, valorDecimoTerceiro, diasTrabalhadosMesRescisao);
            const valorBase = valorSaldoSalario + valorDecimoTerceiro + valorFerias
            const valorBaseDesconto = valorSaldoSalario + valorDecimoTerceiro 
            const valorDesconto = valorBaseDesconto * 0.075
            const valorFinal = valorBase - valorDesconto

            console.log("O valor da rescisao e", valorFinal, "O valor do FGTS e", valorFGTS)
        } else {
            alert("Por favor, selecione se possui ou não férias vencidas.")
        }
        
    } else if (tipoDesligamento === 'comJustaCausa') {
        alert("Codigo ainda nao implementado")
    } else if (tipoDesligamento === 'semJustaCausa') {
        alert("Codigo ainda nao implementado")
    } else {
        alert("Codigo ainda nao implementado")
    }
    
    const totalRescisao = valorSaldoSalario + valorDecimoTerceiro + valorFerias;
}

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
feriasSim.addEventListener('change', aparecerOpcoes);
feriasNao.addEventListener('change', aparecerOpcoes);
aparecerOpcoes(); 