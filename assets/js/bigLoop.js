let j = 0;

for(var i= 0; i <= 1e8; i++) {
  j = i;

  if(i % 1e6 === 0) {
    postMessage("Progress: " + i);
  }
}

postMessage(j);
