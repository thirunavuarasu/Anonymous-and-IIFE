(function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    const mid = merged.length / 2;
    const median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);
