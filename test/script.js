function adPont(csapat) {
    var pontSpan = document.getElementById(csapat + 'Pont');
    var pontok = parseInt(pontSpan.innerText);
    pontok++;
    pontSpan.innerText = pontok;
  }
  