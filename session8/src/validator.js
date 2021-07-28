const CHECK_EMPTY = (event) => {
    if (event.target.value == '' || event.target.value == null){
        event.target.classList.add('is-invalid')
        return false
    }

    event.target.classList.remove('is-invalid')
    return true
}