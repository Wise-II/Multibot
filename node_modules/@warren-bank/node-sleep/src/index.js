var usage = 'usage: node-sleep <integer>  # milliseconds'

if (process.argv.length < 3) {
  throw new Error(usage)
}

var duration = parseInt( process.argv[2], 10 )

if (isNaN(duration)) {
  throw new Error(usage)
}

setTimeout(
  function(){
    process.exit(0)
  },
  duration
)
