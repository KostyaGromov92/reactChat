((wsUrl) => {
  let ws;

  ws = new WebSocket(wsUrl);
  ws.onopen = () => {
    console.log('Ws open');
  };

  ws.onmessage = (message) => {

    const messageObj = JSON.parse(message.data);

    switch(messageObj.type) {
      case "connected_new_user":
        break;
    }

    console.log(message.data);
  };

  let countReconect = 0;

  const emit = (message) => {

    if(countReconect > 5) return;

    if(ws.readyState === ws.CONNECTING) {
      setTimeout(() => {
        emit(message);
        countReconect++;
      }, 500);
      return
    }
    ws.send(message);
    countReconect = 0;
  };


  return {emit};

})('ws://localhost:3000');