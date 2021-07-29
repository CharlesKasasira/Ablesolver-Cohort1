const CHECK_EMPTY = (event, length = 8) => {
    const ELEMENT = event.target
    if (ELEMENT.value == '' || ELEMENT.value == null){
        ELEMENT.classList.add('is-invalid')
        return false
    }

    if (ELEMENT.value.length < length){
        ELEMENT.classList.add('is-invalid')
        return false
    }

    ELEMENT.classList.remove('is-invalid')
    return true
}