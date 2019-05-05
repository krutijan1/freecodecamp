function pairElement(str) {
    const complements = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'T': 'A'
    };
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        result.push([letter, complements[letter]]);
    }
    return result;
}

pairElement("GCG");
