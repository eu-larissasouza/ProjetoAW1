function init(robot) {
    console.log('Robot initializing...')
}

function loop(robot) {
    //Robot looping...
    if (
        (350 < robot.info().x && robot.info().x < 500) ||
        (550 < robot.info().x && robot.info().x < 700)
    ) {
        robot.jump(10)
    } else {
        robot.move(40)
    }
}