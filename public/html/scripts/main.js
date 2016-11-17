  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDngbormjs_T1QsW5MKRmDR0jp7EKSsM08",
    authDomain: "teste-ab-50c64.firebaseapp.com",
    databaseURL: "https://teste-ab-50c64.firebaseio.com",
    storageBucket: "teste-ab-50c64.appspot.com",
    messagingSenderId: "329492238186"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}