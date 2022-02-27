
function Events(){
    const handleMOuse = ()=>{
        let getvalue = Math.random()
        console.log(getvalue)
      }
      
      return (
          <div onMouseOver={handleMOuse} className="App" style={{
                display: "flex",
                background: "red",
                width : "400px",
                height: "400px",
            }}>
             {/* {getvalue} */}
        </div>
      )
}

export default Events