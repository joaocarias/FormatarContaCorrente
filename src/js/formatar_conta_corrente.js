function getCodigoDaTecla(teclaSelecionada) {
    if (teclaSelecionada.srcElement) {
        return teclaSelecionada.keyCode;
    } else if (teclaSelecionada.target) {
        return teclaSelecionada.which;
    }
}

function ValidarTecla(codigoTecla) {
    if (codigoTecla == 8 || codigoTecla == 88 || codigoTecla >= 48 && codigoTecla <= 57 || codigoTecla >= 96 && codigoTecla <= 105 || codigoTecla == 120) {
        return true;
    } else {
        return false;
    }
}

function FormatarContaCorrente(campo, tamanhoMaximo, posicao, teclaSelecionada) {
    var codigoTecla = this.getCodigoDaTecla(teclaSelecionada);

    if (codigoTecla == 0 || codigoTecla == 8) {
        return true;
    }

    if (this.ValidarTecla(codigoTecla)) {
        vr = campo.value;
        vr = vr.replace("-", "");

        tam = vr.length;
        if (tam < tamanhoMaximo && codigoTecla != 8) {
            tam = vr.length + 1;
        }
        if (codigoTecla == 8) {
            tam = tam - 1;
        }

        if (tam <= 2) {
            campo.value = vr;
        }
        if (tam > posicao && tam <= tamanhoMaximo) {
            campo.value = vr.substr(0, tam - posicao) + "-" + vr.substr(tam - posicao, tam);
        }
    } else {
        return false;
    }
}