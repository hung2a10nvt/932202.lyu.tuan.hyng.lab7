function addShape(type) {
  const count = parseInt(document.getElementById("numbox").value) || 1;
  const container = document.getElementById("output");

  for (let i = 0; i < count; ++i) {
    const shape = document.createElement("div");
    shape.classList.add("shape", type);

    const size = Math.random() * (100 - 20) + 20;

    if (type === "triangle") {
      shape.style.borderLeftWidth = `${size / 2}px`;
      shape.style.borderRightWidth = `${size / 2}px`;
      shape.style.borderBottomWidth = `${size}px`;
      shape.style.width = "0";
      shape.style.height = "0";
    } else {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    }

    const x = Math.random() * (container.offsetWidth - size);
    const y = Math.random() * (container.offsetHeight - size);
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;

    shape.onclick = function () {
      shape.classList.toggle("selected");
    };

    shape.ondblclick = function () {
      container.removeChild(shape);
    };

    container.appendChild(shape);
  }
}
