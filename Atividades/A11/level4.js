function init(robot) {
    console.log('Robot initializing...')
}

function loop(robot) {
    //Robot looping...
    if (400 < robot.info().x && robot.info().x < 500) {
        robot.jump(10)
    } else {
        robot.move(40)
    }
}