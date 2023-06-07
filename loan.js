module.exports= class Loan{
 static #juros= 1.03

 constructor(value,installments){
  this.value= value
  this.installments=[]
  for(let i = 1; i<= installments;i++){
    this.installments.push(new Installment((value * Loan.#juros)/ Installment),i)
  }
  this.createdAt= new Date()
 }
 static get juros(){
  return Loan.#juros
 }

 static set setarJuros(newFeePercentage){
  Loan.#juros= 1 + (newFeePercentage / 100)
}
}