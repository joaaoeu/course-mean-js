process.stdout.write('Are you ok? ')

process.stdin.on('data', function(data) {
  process.stdout.write(`Your answer was ${data.toString()}Thank you!\n`)
  process.exit()
})