import {useState, useRef} from 'react'

// useRef save data if Rerendered

function UseRef(){
    const test = useRef(1) 
    console.log("Rendered", test)
    const [data, setData] = useState(1)

    //Input handle
    const inputRef = useRef(null)

      return (
          <>
          <div>
          <button onClick={()=>{
              test.current = test.current +1
              console.log('Currrent', test.current)
          }} >Increase</button>
          <button onClick={()=>{
              setData(data+1)
          }}>Rerender</button>
          </div>
          

          <div>
              <input ref={inputRef} />
              <button onClick={()=>{
                  console.log(inputRef.current.value)
              }}>
                  get Input
              </button>

          </div>

          <div style={{
                display: "flex",
                background: "Chartreuse",
                width : "400px",
                height: "400px",
            }}>
             {/* {getvalue} */}
            </div>

          <div style={{
                display: "flex",
                background: "coral",
                width : "400px",
                height: "400px",
            }}>
            
            </div>
          <div  style={{
                display: "flex",
                background: "red",
                width : "400px",
                height: "400px",
            }}>
            </div>
            <div style={{
                display: "flex",
                background: "coral",
                width : "400px",
                height: "400px",
            }}>
            
            </div>
           
           <butto onClick={()=>{
               inputRef.current.scrollIntoView({
                   behaviour : "smooth"
               })  
           }} >
               Scroll up
           </butto>

          </>
      )
}

export default UseRef