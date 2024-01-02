function areAnagrams(str1, str2) {
    // Remove any non-alphabet character using regex and convert to lowercase
    const normalize = str => str.replace(/[^A-Za-z]+/g, '').toLowerCase();

    // Sort the strings and compare them
    const normalizedStr1 = normalize(str1).split('').sort().join('');
    const normalizedStr2 = normalize(str2).split('').sort().join('');

    return normalizedStr1 === normalizedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "bye")); // false
