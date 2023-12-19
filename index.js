
let vitorias = 100
let derrotas = 0
calcularRank(vitorias, derrotas)

function calcularRank(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel = rank(saldoVitorias)
    console.log("O Héroi tem saldo de " + saldoVitorias + " está no nivel de " + nivel)
}

function rank(saldoVitorias){
    if (saldoVitorias <= 10){
        return "Ferro"
    }else if (saldoVitorias <= 20){
        return "Bronze"
    }else if (saldoVitorias <= 50){
        return "Prata"
    }else if (saldoVitorias <= 80){
        return "Ouro"
    }else if (saldoVitorias <= 90){
        return "Diamante"
    }else if (saldoVitorias <= 100){
        return "Lendário"
    }else {
        return "Imortal"
    }
}