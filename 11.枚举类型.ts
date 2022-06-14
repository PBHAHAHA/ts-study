// enum 关键字
enum Direction {
    Up = 33, 
    Down = 44, 
    Left,
    Right
}

function changeDirection(direction: Direction) {
    console.log(direction);
}

changeDirection(Direction.Down)
