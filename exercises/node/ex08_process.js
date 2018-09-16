// console.log(process.argv)

function hasParam(param) {
  return process.argv.indexOf(param) !== -1;
}

if(hasParam('--prd')) {
  console.log('Prod!')
} else if (hasParam('--hml')) {
  console.log('Homolog!')
} else {
  console.log('Dev!')
}