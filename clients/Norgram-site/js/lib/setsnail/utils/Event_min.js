function Event(){}function MouseEvent(){}function KeyboardEvent(){}function TouchEvent(){}function MutationEvent(){}function MessageEvent(){}function MediaEvent(){}function MouseAndTouchEvent(){}Event.RESIZE="resize",Event.LOAD="load",Event.SCROLL="scroll",Event.SELECT="select",Event.SUBMIT="submit",Event.HASHCHANGE="hashchange",Event.BLUR="blur",Event.CHANGE="change",Event.ABORT="abort",Event.UNLOAD="unload",Event.BEFOREUNLOAD="beforeunload",Event.LOAD="load",Event.ERROR="error",Event.CONTEXTMENU="contextmenu",Event.COPY="copy",Event.PASTE="paste",Event.READY_STATE_CHANGE="readystatechange",Event.RESET="reset",MouseEvent.CLICK="click",MouseEvent.MOUSE_DOWN="mousedown",MouseEvent.MOUSE_MOVE="mousemove",MouseEvent.MOUSE_UP="mouseup",MouseEvent.RIGHT_CLICK="rightclick",MouseEvent.MOUSE_OVER="mouseover",MouseEvent.MOUSE_OUT="mouseout",MouseEvent.DOUBLE_CLICK="dblclick",MouseEvent.FOCUS="focus",MouseEvent.MOUSE_ENTER="mouseenter",MouseEvent.MOUSE_LEAVE="mouseleave",MouseEvent.ROLL_OVER="mouseenter",MouseEvent.ROLL_OUT="mouseleave",MouseEvent.DRAG_END="dragend",MouseEvent.DRAG_ENTER="dragenter",MouseEvent.DRAG_LEAVE="dragleave",MouseEvent.DRAG_OVER="dragover",MouseEvent.DRAG_START="dragstart",MouseEvent.DROP="drop",MouseEvent.MOUSE_WHEEL="mousewheel",KeyboardEvent.KEY_DOWN="keydown",KeyboardEvent.KEY_UP="keyup",KeyboardEvent.KEY_PRESS="keypress",TouchEvent.TOUCH_START="touchstart",TouchEvent.TOUCH_MOVE="touchmove",TouchEvent.TOUCH_END="touchend",TouchEvent.TOUCH_CANCEL="touchcancel",1==BrowserDetect.TABLET||1==BrowserDetect.MOBILE?(MouseAndTouchEvent.MOUSE_DOWN=TouchEvent.TOUCH_START,MouseAndTouchEvent.MOUSE_MOVE=TouchEvent.TOUCH_MOVE,MouseAndTouchEvent.MOUSE_UP=TouchEvent.TOUCH_END):(MouseAndTouchEvent.MOUSE_DOWN=MouseEvent.MOUSE_DOWN,MouseAndTouchEvent.MOUSE_MOVE=MouseEvent.MOUSE_MOVE,MouseAndTouchEvent.MOUSE_UP=MouseEvent.MOUSE_UP),MessageEvent.MESSAGE="message",MediaEvent.TIME_UPDATE="timeupdate";