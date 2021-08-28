function init(robot) {
    console.log('Robot initializing...')
    robot.iterationsAfterCoin = 0
}

function loop(robot) {
    //Robot looping...
    if (robot.iterationsAfterCoin > 4) {
        robot.jump(10)
    }
    if (robot.info().coins > 0) {
        robot.iterationsAfterCoin++
    }
}