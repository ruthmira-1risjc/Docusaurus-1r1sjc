---
id: doc2
title: O que são Classses em Python?
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Classes (Class) 

**Uma classe em Python é uma estrutura que define um tipo de objeto, com seus próprios atributos e métodos.** 

~~~~python
class Pessoa:
    pass
~~~~

Classes proporcionam uma forma de organizar dados e funcionalidades juntos. Criar uma nova classe cria um novo “tipo” de objeto, permitindo que novas “instâncias” desse tipo sejam produzidas. Cada instância da classe pode ter atributos anexados a ela, para manter seu estado. Instâncias da classe também podem ter métodos (definidos pela classe) para modificar seu estado.

## Objetos
**Um objeto é uma instância de uma classe, com seu próprio conjunto de valores únicos para os atributos definidos na classe.**
 
Isso significa que ele herda todos os métodos e propriedades definidos na classe. Diferentes objetos podem ter diferentes estados, mas todos seguirão o mesmo conjunto de regras estabelecido pela classe.

Uma vez definida a classe, podemos criar objetos a partir dela:

~~~~python 
pessoa1 = Pessoa()
~~~~


### Objetos instância
No exemplo abaixo, criamos uma instância da classe Pessoa e a atribuímos à variável pessoa1.

~~~~python
class Pessoa:
    pass

    pessoa1 = Pessoa()
~~~~

Dessa forma podemos acessar e manipular esta instância.

## Atributos (variáveis)

**Um atributo é uma variável que armazena algum valor relacionado ao objeto.**

Um _atributo_ para qualquer nome depois de um ponto. Na expressão `pessoa1.name`, por exemplo, `name` é um atributo do objeto `pessoa1`.


"Para atibuir um valor, podemos fazer da seginte maneira = `pessoa1.name = "João"`."

"Para deletar um valor usamos `del pessoa1.name` isso removerá o atributo `name` do objeto referenciado por `pessoa1`."

é possível acessar e modificar os atributos de uma instância da seguinte forma:

~~~~python
class Pessoa:
    name = "João"
    sobrenome = Almeida

pessoa1 = Pessoa()
print(pessoa1.name)  # Saída: João

pessoa1.name = "Maria"
print(pessoa1.aame)  # Saída: Maria
~~~~

Assim acessamos o atributo `name` da instância `pessoa1` e o modificamos para `Maria”`.

## Método (funções)
**Um método é uma função que realiza alguma ação sobre o objeto ou com os seus atributos.**

Um método é uma função que “pertence” a um `objeto instância`. Em Python, o termo método não é aplicado exclusivamente a instâncias de classes definidas pelo usuário: outros tipos de objetos também podem ter métodos. Por exemplo, listas possuem os métodos append, insert, remove, sort, entre outros.


Vamos adicionar o método `falar` à classe Pessoa.
O método vai receber dois parâmetros parâmetros: `self e mensagem`.

O parâmetro `self` é uma referência à própria `instância (objeto)` da classe, permitindo o acesso aos `atributos` e `métodos` dessa instância.

Podemos chamar o método falar da seguinte forma:

~~~~python
class Pessoa:
    
    def __init__(self, name, sobrenome):
        self.name = "João"
        self.sobrenome ="Almeida"
    
    def falar(self, mensagem):
        print(f"{self.name} {self.sobrenome} diz: {mensagem}")

pessoa1 = Pessoa(name=Any,sobrenome=Any)
pessoa1.falar("Olá!")  # Saída: João Almeida diz: Olá!
~~~~

## Construtores

A tarefa dos construtores é inicializar (atribuir valores) aos membros de dados da classe quando um objeto da classe é criado. Em Python, o método __init __() é chamado de construtor e é sempre chamado quando um objeto é criado.

### Sintaxe:
~~~~python
class Pessoa:
    def __init__(self) -> None:
        pass
~~~~

É possível atribuir `valores` para `intancia (objeto)` da seguinte maneira:

~~~~python
class Pessoa:
    def __init__(self, name, sobrenome):
        self.name = name
        self.sobrenome = sobrenome

pessoa1 = Pessoa("João", "Almeida")
print(pessoa1.name)
print(pessoa1.sobrenome)
~~~~


### **Tipos de construtores:**

 **Construtor padrão:** O construtor padrão é um construtor simples que não aceita nenhum argumento. Sua definição tem apenas um argumento que é uma referência à instância sendo construída.

~~~~python
class GeekforGeeks: 
  
    
    def __init__(self): 
        self.geek = "GeekforGeeks"
  
    
    def print_Geek(self): 
        print(self.geek) 
  
  
obj = GeekforGeeks() 
obj.print_Geek() 

resultado = GeekforGeeks
~~~~

**Construtor parametrizado:** o construtor com parâmetros é conhecido como construtor parametrizado. O construtor parametrizado toma seu primeiro argumento como uma referência à instância que está sendo construída, conhecida como self, e o resto dos argumentos são fornecidos pelo programador.

~~~~python
class Addition: 
    first = 0
    second = 0
    answer = 0
      
    
    def __init__(self, f, s): 
        self.first = f 
        self.second = s 
      
    def display(self): 
        print("First number = " + str(self.first)) 
        print("Second number = " + str(self.second)) 
        print("Addition of two numbers = " + str(self.answer)) 
  
    def calculate(self): 
        self.answer = self.first + self.second 
obj = Addition(1000, 2000) 
obj.calculate() 
obj.display() 

resultado na tela
Primeiro número =1000
Segundo néumro = 2000
Adição de dos números = 3000
~~~~

## Herança de Classe

`Herança` é um conceito que permite criar classes novas a partir de classes já existentes. 
A classe nova, chamada de classe derivada ou `subclasse`, recebe todos os atributos e métodos da classe original, chamada de classe base.

Vamos definir uma subclasse a partir da classe `Pessoa`:

~~~python
# Classe base
class Pessoa:
    
    def __init__(self, name, sobrenome):
        self.name = name
        self.sobrenome = sobrenome
    
    def falar(self, mensagem):
        print(f"{self.name} {self.sobrenome} diz: {mensagem}")

#Subclasse da Pessoa
class Estudante(Pessoa):
    def __init__(self, name, sobrenome, matricula):
        super().__init__(name, sobrenome)
        self.matricula = matricula

#Criar uma instância da subclasse
estudante1 = Estudante("Maria", "Silva", "12345")

#Acessar os atributos e métodos da instância
print(estudante1.name)  
print(estudante1.sobrenome)  
print(estudante1.matricula)  
estudante1.falar("Olá!")
~~~
