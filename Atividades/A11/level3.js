function init(robot) {
    console.log('Robot initializing...')
    robot.jumpProx = true
}

function loop(robot) {
    //Robot looping...
    if (robot.jumpProx) {
        robot.jump(10)
        robot.jumpProx = false
    } else {
        robot.move(40)
        robot.jumpProx = true
    }
}