// definir classe
class Pessoa {
  private id: number;
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private documento: number;

  constructor(nome, sobrenome, idade, documento) {
    this.id = (Math.random() * 100000);
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.documento = documento;

  }

  setNome(nome) {
    this.nome = nome;
  }


  setSobrenome(sobrenome) {
      this.sobrenome = sobrenome
  }

  setIdade(idade) {
    this.idade = idade;
  }


  setDocuemnto(documento) {
    this.documento = documento;
  }


  getNome() {
    return this.nome;
  }

  getSobrenome() {
    return this.sobrenome
  }


  getIdade(){
    return this.idade;
  }


  getDocumento(){
    return this.documento;
  }
}



class Aluno{
  private id: number;
  private nome: string;
  private regitro: number;
  private curso: string;
  private instituicao: string;
  
  
  constructor(nome, registro, curso, instituicao) {
      this.id = (Math.random() * 100000);
      this.nome = nome;
      this.regitro = registro;
      this.curso = curso;
      this.instituicao = instituicao;
      
  }


  setNome(nome) { 
      this.nome = nome;
  }


  setRegistro(registro) { 
      this.regitro = registro;
  }


  setCurso(curso) { 
    this.curso = curso;
  }


  setInstituicao(instituicao) { 
    this.instituicao = instituicao;
  }  


  getNome() {
    return this.nome
  }


  getRegistro() {
    return this.regitro
  }


  getCurso() {
    return this.curso
  }
  

  getInstituicao() {
    return this.instituicao
  }
}



class Produto{
  private id: number;
  private nomeProduto: string;
  private marca: string;
  private valor: number;

  constructor(nome, marca, valor) {
    this.id = (Math.random() * 100000);
    this.nomeProduto = nome;
    this.marca = marca;
    this.valor = valor;
  }


  setNomeProduto(nomeProduto) {
    this.nomeProduto = nomeProduto;
  }



  setMarca(marca) {
    this.marca = marca;
  }


  setValor(valor) {
    this.valor = valor;
  }


  getNomeProduto(){
    return this.nomeProduto
  }


  getMarca() {
    return this.marca
  }


  getValor() {
    return this.valor
  }







}




class Carrinho{
  private id: number;
  private cor: string;
  private quantidadeProdutos: number;
  private cliente: string;

  constructor(cor, quantidadeProdutos, cliente) {
    this.id = (Math.random() * 100000);
    this.cor = cor;
    this.quantidadeProdutos = quantidadeProdutos;
    this.cliente = cliente;
  }


  setNomeProduto(cor) {
    this.cor = cor;
  }



  setMarca(quantidadeProdutos) {
    this.quantidadeProdutos = quantidadeProdutos;
  }


  setValor(cliente) {
    this.cliente = cliente;
  }


  getCor(){
    return this.cor
  }


  getQuantidadeProdutos() {
    return this.quantidadeProdutos
  }


  getCliente() {
    return this.cliente
  }






}


// criar objeto
const pessoa = new Pessoa('Nicolas',"Fernandes", 18, 1003523919);
const aluno = new Aluno("Nicolas", 7954, "Analise e Desenvolvimento de Sistemas", "UNISEP");
const produto = new Produto("Refrigerante", "Coca-Cola", 10);
const carrinho = new Carrinho("Azul", 4, "Gabriel");

console.log("Pessoa:")
console.log(pessoa.getNome())
console.log(pessoa.getSobrenome())
console.log(pessoa.getIdade())
console.log(pessoa.getDocumento())
console.log("Aluno:")
console.log(aluno.getNome())
console.log(aluno.getRegistro())
console.log(aluno.getCurso())
console.log(aluno.getInstituicao())
console.log("Produto:")
console.log(produto.getNomeProduto())
console.log(produto.getMarca())
console.log(produto.getValor())
console.log("Carrinho:")
console.log(carrinho.getCor())
console.log(carrinho.getQuantidadeProdutos())
console.log(carrinho.getCliente())