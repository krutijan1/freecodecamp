function fearNotLetter(str) {
    let missingLetter = undefined;

    for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); ++i) {
        const expectedLetter = String.fromCharCode(i);

        if (!str.includes(expectedLetter)) {
            missingLetter = expectedLetter;
            break;
        }
    }

    return missingLetter;
}

fearNotLetter("abce");
