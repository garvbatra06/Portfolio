import './Techstack.css'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from 'react-icons/fa'

// 👇 Define FramerIcon here
const FramerIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 2H19V9H12L19 16V22H5V15H12L5 8V2Z" />
  </svg>
)

const TechStack = () => {
  const stack = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FramerIcon />, name: 'Framer Motion' }, // 👈 works now
  ]

  return (
    <div className="tech-stack-section">
      <h2 className='heading'>Tech Stack</h2>
      <div className="tech-stack-grid">
        {stack.map((item, index) => (
          <div key={index} className="tech-icon">
          {item.icon}
          <span className="tooltip">{item.name}</span>
        </div>        
        ))}
      </div>
    </div>
  )
}

export default TechStack
