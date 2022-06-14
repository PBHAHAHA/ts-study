let p = {x: 1, y: 2}

function formatPoint(point: typeof p) {
    console.dir(typeof p)
}

formatPoint(p)

let num: typeof p.x