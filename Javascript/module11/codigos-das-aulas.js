/* Aula 01 - Modulo 11 
  function getScore(score) {
  if (score >= 90) {
    return score = "A";
  } else if (score >= 80 && score <= 89) {
    return score = "B";
  } else if (score >= 70 && score <= 79) {
    return score = "C";
  } else if (score >= 60 && score <= 69) {
    return score = "D";
  } else {
    return score = "F";
  } 
}

console.log(getScore(60));
*/
  
/* Aula 02 - Modulo 11 
  let family = {
  incomes: [
    50,70,64
  ],
  expenses: [
    60,95, 128
  ]
}

function sum(array) {
  let total = 0;

  for(let value in array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);
  
  const total = calculateIncomes - calculateExpenses;

  const approved = total >= 0;

  let balanceStatus = 'Negativo'; 
  
  if(approved) {
    balanceStatus = 'Positivo';
  }

  console.log(`Seu saldo é ${balanceStatus}: R$${total.toFixed(2)}`);
}

calculateBalance();
*/
  
/* Aula 03 - Modulo 11 
  function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado');
  }

  let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9;
  let degreeSign = 'C';
  
  if(celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = 'F';
  }

  return formula(updatedDegree) + degreeSign;
} 

try {
  console.log(transformDegree('10C'));
  console.log(transformDegree('50F'));
  console.log(transformDegree('50Z'));
} catch (err) {
  console.log(err);
}
*/
  
/* Aula 04 - Modulo 11 
  const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title:"O homem mais rico da Babilônia",
        author:"George S. Clason",
      },
      {
        title:"Pai rico, pai pobre",
        author:"Robert T. Kiyosaki e Sharon L. Leecter",
      },
    ],
  },
  
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title:"Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title:"Os 7 hábitos das pessoas altamente eficazes",
        author:"Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

console.log(totalCategories);

for(let category of booksByCategory){
  console.log(`Total de livros de categoria: ${category.category}`);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];
  
  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
    console.log(`Total de autores: ${authors.length}`)
  }
}

countAuthors();

function BooksOfAuthor(author) {
  let books = [];
  
  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author) {
        books.push(book.title);
      }
    }
    console.log(`Livros do autor ${author}: ${books.join(', ')}`)
  }
}

BooksOfAuthor('George S. Clason');
*/
