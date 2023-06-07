module.exports =class Transfer{
  constructor(UsuarioDoEnvio,recebedor,valor,dataDeCriação=new Date()){
    this.UsuarioDoEnvio= UsuarioDoEnvio
    this.recebedor=recebedor
    this.valor=valor
    this.dataDeCriação=dataDeCriação
  }
}

