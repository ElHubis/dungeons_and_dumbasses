const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

for (const char of document.querySelectorAll(".char")) {
    char.onmousemove = e => handleOnMouseMove(e);

}

const profiles = document.querySelectorAll(".char")
const colors = [
    "rgba(24, 33, 215, 0.3)",
    "rgba(170, 6, 179, 0.3),",
    "rgba(179, 6, 93, 0.3)",
    "rgba(12, 141, 20, 0.3)",
]

for (let index = 0; index < profiles.length; index++) {
    element.style.background = `radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), ${colors[index]}, transparent 40%)`
}