function CobrasEscadas() {}

var pos1 = 1, pos2 = 1, jogadorDaVez = 1, vencedor = null;

var escadas = []; // vetor com posição das escadas
escadas[2]  = 38;
escadas[7]  = 14;
escadas[8]  = 31;
escadas[15] = 26;
escadas[21] = 42;
escadas[28] = 84;
escadas[36] = 44;
escadas[51] = 67;
escadas[71] = 91;
escadas[78] = 98;
escadas[87] = 94;

var cobras = []; // vetor com posição das cobras
cobras[16] = 6;
cobras[46] = 25;
cobras[49] = 11;
cobras[62] = 19;
cobras[64] = 60;
cobras[74] = 53;
cobras[89] = 72;
cobras[92] = 88;
cobras[95] = 75;
cobras[99] = 80;

CobrasEscadas.jogar = function (dado1, dado2){
  if (vencedor != null){
    alert("O jogo acabou!")
  }else{
    alert("dados: " + (dado1 + dado2))
    var movimentos = dado1 + dado2;
    switch (jogadorDaVez){
      case 1:{
        if (pos1 + movimentos > 100){
          pos1 = 100 - ((pos1 + movimentos) - 100);
          movimentos = 0;
        }
        if (pos1 + movimentos === 100){
          pos1 = 100;
          vencedor = 1;
          alert("Jogador 1 venceu!")
          break;
        }
        if (cobras[pos1 + movimentos] != null){
          pos1 = cobras[pos1 + movimentos];
          atualizaPagina(null, pos1, pos2);
        }else{
          if (escadas[pos1 + movimentos] != null){
            pos1 = escadas[pos1 + movimentos];
            atualizaPagina(null, pos1, pos2);
          }else{
            pos1 += movimentos;
            atualizaPagina(null, pos1, pos2);
          }
        }
        if (dado2 !== dado1){
          jogadorDaVez = 2;
          atualizaPagina(2, pos1, pos2);
        }
        alert("Jogador 1 está na casa " + pos1)
        break;
      }
      case 2:{
        if (pos2 + movimentos > 100){
          pos2 = 100 - ((pos2 + movimentos) - 100);
          movimentos = 0;
        }
        if (pos2 + movimentos === 100){
          pos2 = 100;
          vencedor = 2;
          alert("Jogador 2 venceu!")
          break;
        }
        if (cobras[pos2 + movimentos] != null){
          pos2 = cobras[pos2 + movimentos];
          atualizaPagina(null, pos1, pos2);
        }else{
          if (escadas[pos2 + movimentos] != null){
            pos2 = escadas[pos2 + movimentos];
            atualizaPagina(null, pos1, pos2);
          }else{
            pos2 += movimentos;
            atualizaPagina(null, pos1, pos2);
          }
        }
        if (dado2 !== dado1){
          jogadorDaVez = 1;
          atualizaPagina(1, pos1, pos2);
        }
        alert("Jogador 2 está na casa " + pos2)
        break;
      }
    }
  }
};

