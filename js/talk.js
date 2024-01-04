new TypeIt("#lxqdabengdan", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
.type("DJ && LXQ")
.pause(2000)
.delete(null, {
    delay: 500
})
.type("D_L 恋 爱 日 记")
.pause(3000)
.go();

new TypeIt('#talkToLXQ', {
lifeLike: true,
cursorSpeed: 1000,
waitUntilVisible: true,
speed: 100
}).go();