import { motion, animatePresence, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="App">
        <motion.div transition={{layout:{duration:1, type:'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className="card" style={{borderRadius:"1rem",boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}} >
           <motion.h2 layout="position">Framer Motion</motion.h2>
          
           {isOpen && (
           <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}} className='expand' >
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
           </motion.div>
           )}
          
           
        </motion.div>
    </div>
  );
}

export default App;
