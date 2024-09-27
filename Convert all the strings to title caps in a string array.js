(function(arr) {
    const titleCased = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCased);
})(['hello', 'world', 'javascript']);
