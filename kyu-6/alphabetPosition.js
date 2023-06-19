// kata: https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  return text.toLowerCase().split("").filter(c=> /[a-z]/.test(c)).map(c=> c.charCodeAt(0)-96).join(" ")
}