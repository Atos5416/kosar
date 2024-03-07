function adPont(csapat, pontok) {
    var pontSpan = document.getElementById(csapat + 'Pont');
    var jelenlegiPontok = parseInt(pontSpan.innerText);
    var ujPontok = jelenlegiPontok + pontok;
    pontSpan.innerText = ujPontok;
  }
  
  function resetPontok() {
    document.getElementById('csapat1Pont').innerText = '0';
    document.getElementById('csapat2Pont').innerText = '0';
  }
  