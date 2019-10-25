
function connection(ws){
  console.log('Server Connect');
  const send = (message) => ws.send(JSON.stringify(message));
  

  send({'KOF_8081':[0,true]})
  ws.on("message", function(message) {
    message = JSON.parse(message)
    const [key,value] = Object.entries(message)[0];
    console.log('Received Message');
    console.log(message);
    if(key === 'KOF_0001'){
      send({KOF_0001:[0,true]})
    }
    if(key === 'KOF_0002'){
      send({KOF_0002:[0,false]})
    }
    if(key === 'KOF_0003'){
      setTimeout(() => {
        send({KOF_0000:[1,true]})
        send({KOF_1000:[1,true]})
      }, 2000);
    }
  });
}

exports.connection = connection;