function init(robot) {
    console.log('Robot initializing...')
}

function loop(robot) {
    //Robot looping...
    robot.move(40)
    if (robot.info().coins % 2 == 1) {
        robot.action.amount = -40
    }
}