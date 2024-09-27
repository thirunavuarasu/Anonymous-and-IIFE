(function(arr) {
    const unique = arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
    console.log(unique);
})([1, 2, 2, 3, 4, 4, 5]);
