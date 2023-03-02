

//Background
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


function  newImage(url, left, bottom, z){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom +'px'
    object.style.zIndex = z
    document.body.append(object)
    return object
}


// ---- Images ----
//Green Character
newImage('assets/green-character.gif', 100, 100)

//Pine Tree
newImage('assets/pine-tree.png', 450, 100)

//Tree
newImage('assets/tree.png', 200, 300)

//Pillar
newImage('assets/pillar.png', 350, 100)

//Crate
newImage('assets/crate.png', 150, 200)

//Well
newImage('assets/well.png', 500, 300)

// ---- Items ----
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
    object.remove()
    })
}
//Sword, Shield, Staff
newItem('assets/sword.png', 500, 305)

newItem('assets/sheild.png', 165, 185)

newItem('assets/staff.png', 600, 100)