function  newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom +'px'
    document.body.append(object)
    return object
}


// ---- Images ----
//Green Character
newImage('assets/green-character.gif', 100, 100)

//Pine Tree
newImage('assets/pine-tree.png', 450, 200)

//Tree
newImage('assets/tree.png', 200, 300)

//Pillar
newImage('assets/pillar.png', 350, 100)

//Crate
newImage('assets/crate.png', 150, 200)

//Well
newImage('assets/well.png', 500, 425)

// ---- Items ----
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
    object.remove()
    })
}
//Sword
newItem('assets/sword.png', 500, 405)

newItem('assets/sheild.png', 165, 185)

newItem('assets/staff.png', 600, 100)


