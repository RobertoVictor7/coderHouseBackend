class Produto {

  constructor(title, description, price, thumbnail, code, stock) { // construtor de produto 

    this.title = title // nome do produto
    this.description = description // descrição 
    this.price = price // preço
    this.thumbnail = thumbnail // path da imagem do produto
    this.code = code // código identificador
    this.stock = stock // quantidade em estoque
    this.id = 0
  }
}

class ProductManager {
    constructor() {
    this.produtos = [] // array para armazenamento dos produtos cadastrador
    this.codes = [] // array para armazenamento dos códigos dos produtos para comparar se já existe ou não
  }

  addProduct(produto) {
    if (!produto.title || !produto.description || !produto.price || !produto.thumbnail || !produto.code || !produto.stock) { // verificação se algum dos atributos do produto não foram preenchidos
        console.log("Todas as informações precisam ser preenchidas")
    } else if (this.codes.includes(produto.code)) { // verificação se o código do produto já existe no array de códigos
        console.log("Código de produto já existente, por favor preencha corretamente")
    } else {
        this.produtos.push(produto) // inserção do produto no array
        this.codes.push(produto.code) // inserção do código no array
        this.produtos.map(() => {
          produto.id++ //contador aumenta dinamicamente conforme produtos são adicionados ao array
        })
       
        console.log(produto)
    }
  }

  getProductById(id) { // recebe o ID do produto como parametro
    const itemsId = this.produtos.map((item) => {
      return item.id // faz um map de todos os produtos pegando apenas seu ID 
    })

    if (!itemsId.includes(id)) { // faz a validação se ID passado como parametro está dentro dos nossos ids registrados
      console.log('Produto não encontrado') // console.log negativo
    } else {
      console.log('o produto selecionado foi:')
      const productGet = this.produtos.filter((item) => {
        return item.id === id // escolhe o produto com ID igual para mostrar no ultimo console.log
      })

      console.log(productGet)
    }
  }


}

const gerenciadorProdutos = new ProductManager();

const produto1 = new Produto("Camiseta"); // produto incompleto
const produto2 = new Produto("Calça", "uma calça qualquer", 25.0, "./path/para/thumb", "001", 5); // produto corretamente preenchido
const produto3 = new Produto("Bermuda", "uma Bermuda qualquer", 40.0, "./path/para/thumb", "001", 10); // produto corretamente preenchido porém com codigo duplicado
const produto4 = new Produto("Shorts", "um shorts qualquer", 30.0, "./path/para/thumb", "002", 7); // produto corretamente preenchido para demonstrar funcionamento de ID de incremento automatico

gerenciadorProdutos.addProduct(produto1);
gerenciadorProdutos.addProduct(produto2);
gerenciadorProdutos.addProduct(produto3);
gerenciadorProdutos.addProduct(produto4);
gerenciadorProdutos.getProductById(3) // id de produto nao existente
gerenciadorProdutos.getProductById(1) // id existente retornando produto correto


