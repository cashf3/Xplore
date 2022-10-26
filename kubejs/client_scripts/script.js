// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
  event.hide('minecraft:bedrock')
  
})
