const isIn = <T>(source:Array<T>, item:T) => source.find(x => x === item) !== undefined
const isVisible = (elem: HTMLElement) => {
    return elem.offsetWidth > 0 && elem.offsetHeight > 0;
};

export const isClickable : (e:HTMLElement) => boolean = e => {
    const TARGET_TAGS = ['a', 'button', 'input', 'textarea', 'select'];
    return 'offsetWidth' in e // Checking if Element is HTMLElement (aliased Elem)
        && 'nodeName' in e
        && isVisible(<HTMLElement>e)
        && (isIn(TARGET_TAGS, e.nodeName) || getComputedStyle(e).cursor !== 'auto')
}
