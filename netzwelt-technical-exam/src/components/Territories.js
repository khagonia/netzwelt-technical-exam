import { useState } from "react";

const Territory = ({ territory }) => {

  const [isVisible, setIsVisible] = useState(false);
  const expand = () => { 
    setIsVisible(!isVisible);
  }

  return (
    <>
    { territory.children.length > 0 && <span className="caret">&#9660;</span>}
    <span onClick={expand}>{territory.name}</span>
    {isVisible && 
      <ul className="child">
        {territory.children?.map((child) => {
          return <li className="territory" key={child.id}><Territory territory={child} /></li>
        })}
      </ul>
    }
    </>
    
  )
}

export default Territory;