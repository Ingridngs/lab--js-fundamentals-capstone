
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */


function toCamelCase(param){
	let stringOne = text.toLowerCase().split(" ")	

	for (let i = 0; i < stringOne.length; i++ ) {
		const letters= stringOne[i].split("");
		letters[0] = letters [0].toUpperCase;
		stringOne[i] = letters.join("")
		
		
		}
	}
return stringOne.join ("")
}








//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
