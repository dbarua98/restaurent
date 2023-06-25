import React, { useState } from 'react'

const Section = ({title,description ,isVisible,setIsVisible})=>{
  
  return(
    <div className='border border-black p-2 m-2'>
      <h3 className='font-bold text-xl '>{title}</h3>
      {
        isVisible?<button onClick={()=>setIsVisible(false)} className='cursor-pointer underline'>Hide</button>:
        <button onClick={()=>setIsVisible(true)} className='cursor-pointer underline'>Show</button>
      }
      
      
      {isVisible && <p>{description}</p>}
    </div>
  )
}


const Instamart = () => {
  const [visibleSection,setVisibleSection]=useState("about");
  return (
    <div>
      <h1 className='font-bold p-2 m-2 text-3xl'>Instamart</h1>
      <Section title={"About Instamart"}
        description={"This is about section "}
        isVisible={visibleSection=="about"}
        setIsVisible={()=>setVisibleSection("about")
       }
      />
      <Section title={"Team Instamart"}
        description={"This is Team section "}
        isVisible={visibleSection=="team"}
        setIsVisible={()=>setVisibleSection("team")
       } 
      />
      <Section title={"Careeers Instamart"}
        description={"This is Carreers section "}
        isVisible={visibleSection=="career"}
        setIsVisible={()=>setVisibleSection("career")
       }
      />
    </div>
  )
}

export default Instamart
