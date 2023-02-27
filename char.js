const handleOnMouseMove = e =>{
    const { currentTarget: target} = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX -rect.left,
        y = e.clientY -rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

for(const one of document.querySelectorAll(".one")){
    one.onmousemove = e => handleOnMouseMove(e);

}

for(const two of document.querySelectorAll(".two")){
    two.onmousemove = e => handleOnMouseMove(e);

}

for(const three of document.querySelectorAll(".three")){
    three.onmousemove = e => handleOnMouseMove(e);

}

for(const four of document.querySelectorAll(".four")){
    four.onmousemove = e => handleOnMouseMove(e);

}