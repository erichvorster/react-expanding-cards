import {motion} from 'framer-motion';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
        <motion.div className="card">
           <motion.h2>Framer Motion</motion.h2>
           <motion.div>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
           </motion.div>
        </motion.div>
    </div>
  );
}

export default App;
