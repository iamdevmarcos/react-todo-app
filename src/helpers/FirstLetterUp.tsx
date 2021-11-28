export const FirstLetterUp = (text: string) => {
    const firstLetter = text.charAt(0).toUpperCase();
    return `${firstLetter}${text.substr(1)}`;
}