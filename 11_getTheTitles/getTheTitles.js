const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(array) {
    const final = [];
    array.forEach(book=>{
        final.push(Object.values(book)[0]);
    });
    return final;
};

// Do not edit below this line
module.exports = getTheTitles;
