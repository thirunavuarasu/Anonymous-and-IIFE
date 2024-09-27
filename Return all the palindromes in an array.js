(function(arr) {
    const palindromes = arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
    console.log(palindromes);
})(['madam', 'hello', 'racecar', 'world']);
