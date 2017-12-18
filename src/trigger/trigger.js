let mouseEventInit = {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 0,
    relatedTarget: null,
    region: null
};

let KeyboardEventInit = {
    key: '',
    code: '',
    location: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    repeat: false,
    isComposing: false,
    charCode: 0,
    keyCode: 0,
    which: 0
};

let mouseEventMap = [
    'click',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'wheel'
];

let keyboardEventMap = [
    'keydown',
    'keypress',
    'keyup'
];

let eventTypeMap = (type) => {
    let enevtSource = {
        mouse: false,
        keyboard: false
    };
    enevtSource.mouse = mouseEventMap.includes(type);
    enevtSource.keyboard = keyboardEventMap.includes(type);
    return enevtSource;
};

let trigger = (element, eventType) => {
    let event = null;
    if (eventTypeMap(eventType).mouse) {
        event = new MouseEvent(eventType, mouseEventInit);
    } else if (eventTypeMap(eventType).keyboard) {
        event = new KeyboardEvent(eventType, KeyboardEventInit);
    } else {
        let errorMsg = `触发事件类型错误，非'keyboardEvent'或'mouseEvent'事件`;
        throw new TypeError(errorMsg);
    }
    element.dispatchEvent(event);
};

export default trigger;