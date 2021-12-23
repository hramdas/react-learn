import List from './List'

function MobileOs(){
    const mobOs = ["Android", "Blackberry", "iPhone", "Windows Phone"]
    return(
        <List title = "Mobile Operating System" arr = {mobOs} />
    )
}

export default MobileOs