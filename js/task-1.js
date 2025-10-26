const itemAmount = document.getElementById('categories').getElementsByClassName('item')

console.log(itemAmount)
console.log(`Number of categories: ${itemAmount.length}`)

Array.from(itemAmount).forEach(element => {
    const heading = element.querySelector('h2')
    const items = element.getElementsByTagName('li')
    console.log(`Category: ${heading.textContent}`)
    console.log(`Elements: ${items.length}`)
})
