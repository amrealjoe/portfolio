function capitalizeFirstLetter(word) {
	const firstLetter = word.charAt(0).toUpperCase()
	const OtherLetters = word.substr(1);
	const capitalizedFirstLetter = firstLetter + OtherLetters;
	return capitalizedFirstLetter
}

export default capitalizeFirstLetter