import './App.css';
import micon from './assets/micon.png';
import picon from './assets/picon.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import mr from "./assets/mr.jpg";
import pix from "./assets/pix.png";
import Teamp from "./team";
import { BsDiscord } from 'react-icons/bs';
import { FaTwitter} from 'react-icons/fa';
import { motion } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <div className='mhead'>
      <div className="head">
      <a href='https://twitter.com/reaversnft' target="_blank"><img src={micon} className='icon'/></a>
      <a href='https://twitter.com/solana' target="_blank"><img src={picon} className='icon'/></a>
      </div>
      <div className='mainbox'>
      <motion.div
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }}    // Animation state
        transition={{ duration: 1, delay:0.5 }}  >
      <h1 className='mheadt'>REAVERS</h1>
      </motion.div>
      <div className='three'>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Initial state
        animate={{ opacity: 1, x: 0 }}    // Animation state
        transition={{ duration: 1 }}  >
      <img src={p1} className='p1'/></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state
        animate={{ opacity: 1, y: 0 }}    // Animation state
        transition={{ duration: 1 }}  >
      <img src={p3} className='p2'/></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Initial state
        animate={{ opacity: 1, x: 0 }}    // Animation state
        transition={{ duration: 1 }}  >
      <img src={p2} className='p3'/></motion.div>
      </div>
      </div>
      </div>

      
      <div className='line'></div>
      <div className='spart'>
      <h1 className='minfo'>WHAT IS REAVERS?</h1>
      <p className='infop'>Reavers is an engaging idle game that revolves around the delicate balance of risk versus reward. This game empowers you with decision-making, offering various avenues to accumulate wealth, each with its unique pace and advantages. As you advance through levels, you'll have the opportunity to plunder bustling cities, raid lucrative docks, all while steering clear of potential prison time or the dangers of mutiny. The question remains: Do you possess the skills to successfully navigate the treacherous waters of the seven seas?"</p>
      
      
      
      <div className="tmaind">
      <div className="tnum">
      <div className="tdis">
      <h1 className="num">
      18K+
      </h1>
      <p className="ds">
      Followers On Twitter
      </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      20K+
      </h1>
      <p className="ds">
      Degens On Discord
        </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      10000
      </h1>
      <p className="ds">
      NFTs Will be Minted
        </p>
      </div>
      </div>
   </div>
   </div>

   <div className='thirdimg'>
    <div className='mmn'>
    Meet The Team
    </div>
    <div className="mainpd">
    
    <div className="mainpd1">
    <a href = "https://twitter.com/cryptomape"target="_blank" >
    <Teamp name = "MAPE" dis ="Founder & CEO" pfp = {mr}/>
    </a>

    <a href = "https://twitter.com/emploiceSOL" target="_blank">
    <Teamp name = "EMPLOICE" dis ="Founder & COO" pfp = {pix}/>
    </a>
    </div>


    <div className="mainpd1">
    
    </div>
    </div>
    <div className='abody'>
	<details open>
		<summary>
    WHAT IS $ARRR?
		</summary>
		<div className='stext'>
		$ARRR is central in Reavers and the entire eco-system. Everything you do in the game costs $ARRR. If a user spends $ARRR on any utility, it's forever burnt and removed from the supply.

		</div>
	</details>
	<details>
		<summary>
    HOW MUCH $ARRR EXISTS?
		</summary>
		<div className='stext'>
    $ARRR has a capped supply of 1.1B and there will never be enough for all users to be able to do everything in the game. The demand will always be higher than the supply.

		</div>
	</details>
	<details>
		<summary>
		HOW TO LOOT $ARRR
		</summary>
		<div className='stext'>
    The only way to obtain $ARRR will be through plunders in-game. Plundering on higher levels and layers emitts a higher yield.
		</div>
	</details>
</div>
</div>
    <div className='lastm' >
    <div className = "icond">
    <a href = "https://discord.com/invite/reavers" target="_blank" >
    <BsDiscord className='icontt'/>
    </a>
    <a href = "https://twitter.com/reaversnft" target="_blank">
    <FaTwitter className='icontt'/>
    </a>
    </div>
    <div className='lastb'>
    <p className='created'> created with ❤️ by </p><a href= "https://twitter.com/yeahbichscience" target="_blank"> 
    <p className='italics'>yeahbitchscience</p>
    </a>
    </div>
    </div>
    </div>
  );
}

export default App;
