import { Camera } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion } from "motion/react"

function App() {
  return (
    <>
      <Button>qwe </Button>
      <Camera color="red" size={48}></Camera>
      <motion.ul className="w-20 h-2 border-2 border-black" animate={{ rotate: 360 }} />
    </>
  );
}

export default App;
