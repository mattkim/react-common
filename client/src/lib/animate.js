/**
 * Created by mattkim on 12/14/16.
 */
import Scroll from 'react-scroll';

var scroll = Scroll.animateScroll

function scrollToID(id) {
    // TODO: Might want to create our own scroller.
    scroll.scrollTo(document.querySelector(id).offsetTop)
}

// TODO: implement page-transitions.

export { scrollToID }