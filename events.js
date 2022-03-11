// * developer.mozilla.org/ko/docs/Web/Events

const colors = ["#DCFF00", "#49DD00", "#1CED96", "#A9A9F0", "#6666E2"];

const heading = document.querySelector("h1");

// * network events
const networkEventHandler = {
  handleOnline: () => {
    alert("WIFI Yes");
  },
  handleOffline: () => {
    alert("No WIFI");
  },
};

// * focus events
const focusEventHandler = {
  handleFocus: () => {},
  handleBlur: () => {},
};

// * web socket events
const webSocketEventHandler = {
  handleOpen: () => {},
  handleMessage: () => {},
  handleError: () => {},
  handleClose: () => {},
};

// * form events
const formEventHandler = {
  handleReset: () => {},
  handleSubmit: () => {},
};

// * mouse events
const mouseEventHandler = {
  handleMouseEnter: () => {
    heading.innerText = "Mouse Enter";
  },
  handleMouseOver: () => {
    heading.innerText = "Mouse Over";
  },
  handleMouseOut: () => {
    heading.innerText = "Mouse Out";
  },
  handleMouseClick: () => {
    heading.innerText = "Mouse Click";
  },
};

// * view events
const viewEventHandler = {
  handleResize: () => {
    document.body.style.backgroundColor = colors[0];
  },
};

// * clipboard events
const clipboardEventHandler = {
  handleCopy: () => {
    alert("copied!");
  },
};

heading.onclick = mouseEventHandler.handleMouseClick;
heading.addEventListener("mouseenter", mouseEventHandler.handleMouseEnter);
window.addEventListener("resize", viewEventHandler.handleResize);
heading.addEventListener("copy", clipboardEventHandler.handleCopy);
window.addEventListener("offline", networkEventHandler.handleOffline);
window.addEventListener("online", networkEventHandler.handleOnline);
