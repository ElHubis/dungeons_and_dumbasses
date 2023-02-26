const handleOnMouseMove = e =>{
    const { currentTarget: target} = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX -rect.left,
        y = e.clientY -rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

for(const char of document.querySelectorAll(".char")){
    char.onmousemove = e => handleOnMouseMove(e);
}