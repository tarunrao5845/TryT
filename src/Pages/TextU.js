
import React , {useState} from 'react'

const TextU = () => {
    const handleupclick = ()=>{
        let newtext = text.toUpperCase()
        settext(newtext)
    
    }
    const handledownclick = ()=>{
        let newtext = text.toLowerCase()
        settext(newtext)
    
    }
    const handleclick = ()=>{
        console.log("length is clicked")
        let newtext = text.length
        settext(newtext)
    
    }
    
    
    const handleOnChange = (event)=>{
        settext(event.target.value)    }
    
    
    
    
    const [text, settext] = useState('enter text here');
    
    
  return (
    <>
    <div className="container my-5">
<div className="mb-3">
<h1 style={{color:"#6415ff"}} className="text-center">TextU</h1> 

<textarea style={{color:"#6415ff"}} className="form-control" id="exampleFormControlTextarea1"   onChange={handleOnChange} value={text} rows="8"></textarea>
<br/>
</div>
<div className=' d-flex justify-content-center'>
<button type='button' className='btn btn-primary mx-2'  onClick={handleupclick} >To Upper Case</button> 
<button type='button' className='btn btn-success' onClick={handledownclick} >To Lower Case</button>
<button type='button' className='btn btn-danger mx-2'onClick={handleclick} >Text Length </button>
</div>



</div>  
    </>
  )
}

export default TextU
