let G = {
    serverHost : null
}

if(process.env.NODE_ENV === 'development'){
    G.serverHost = 'http://localhost:7000';
  }else if(process.env.NODE_ENV === 'production'){
    G.serverHost = 'https://hackbug.herokuapp.com';
  }

export default G;