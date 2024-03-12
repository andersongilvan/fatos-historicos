const express = require("express");
const app = express();
const service = require("./service/service");

app.get("/", (req, res) => {
  let ano = req.query.ano;

  if(service.validarAno(ano))
  {
    if(ano >= 1920 && ano <= 2020)
    {
      let eventos = service.buscarEvento(ano)
      
      res.json({evento: eventos})
    }else
    {
      let json = {mensagem:'O ano tem que ser maior ou igual à 1920 e menor ou igual à 2020'}
      res.json(json)
    }
  }else
  {
    res.status(400).json({mensagem:'Ano não encontrado'})
  }
});

let port = 5051;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
