import './App.css';
import micon from './assets/micon.png';
import picon from './assets/picon.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import mike from "./assets/mike.png";
import mr from "./assets/mr.png";
import pix from "./assets/pix.png";
import deg from "./assets/deg.png";
import Teamp from "./team";
import me from "./assets/me.svg";
import mainf from "./assets/mainf";
import lastm from "./assets/lastm"
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="head">
      <a href='https://twitter.com/MNFSTLabs'><img src={micon} className='icon'/></a>
      <a href='https://twitter.com/0xPolygon'><img src={picon} className='icon'/></a>
      </div>
      <h1 className='mheadt'>RING RUNNERZ</h1>
      <div className='three'>
      <img src={p1} className='p1'/>
      <img src={p3} className='p2'/>
      <img src={p2} className='p3'/>
      </div>
      <div className='line'></div>
      <h1 className='minfo'>WHAT IS RING RUNNERZ?</h1>
      <p className='infop'>Ring Runnerz is a play-to-earn game within the ecosystem of MNFST Lab, an avant-garde in the NFT industry. Players will be rewarded with tokens for their dedication and accomplishments. Brace yourself for intense competition as prize pool competitions offer enticing rewards, including rare artifacts and exclusive bonuses that propel players to reach new heights. The Ring Runnerz offer a captivating on-chain gameplay experience, allowing players to stake assets, manipulate mechanics, and interact with smart contracts.</p>
    
      <section className="design-section">
      <div className="timeline">

        {/* The div below is used to fill space for dates */}
        <div className="timeline-empty">
        </div>

        {/* Timeline graphics */}
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        {/* Timeline component with HTML content */}
        <div className="timeline-component timeline-content">
          <h3 className='sea'>SEASON 1</h3>
          <p className='seap'>Season 1 lasts approximately 90 days and is the initial launch phase of Ring Runnerz. Token Distribution rewards players based on participation and achievements. Prize Pool Competitions offer valuable rewards and incentives for competitive gameplay.</p>
        </div>

        {/* Timeline component with CSS content */}
        <div className="timeline-component timeline-content">
          <h3 className='sea'>SEASON 2</h3>
          <p className='seap'>Season 2 also lasts approximately 90 days and builds upon Season 1. Art Updates and Expansion enhance the game's visuals and lore. Art Sizing is increased by 50% for more immersive graphics. Browser Game Development Continuation focuses on making the game accessible across platforms.</p>
        </div>

        {/* Another timeline graphics */}
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        {/* Additional empty space */}
        <div className="timeline-empty">
        </div>

        <div className="timeline-empty">
        </div>

        {/* Timeline graphics */}
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>

        {/* Timeline component with JavaScript content */}
        <div className="timeline-component timeline-content">
          <h3 className='sea'>SEASON 3</h3>
          <p className='seap'>The Takeoff...</p>
        </div>

      </div>
    </section>
    <div className='mmn'>
    Meet The Team
    </div>
    <div className="mainpd">
    
    <div className="mainpd1">
    <a href = "https://twitter.com/MrMintETH/" >
    <Teamp name = "MRMINT.ETH" dis ="Founder" pfp = {mr}/>
    </a>

    <a href = "https://twitter.com/pixxelznft" >
    <Teamp name = "PIXXELZ.ETH" dis ="Head of Marketing" pfp = {pix}/>
    </a>
    </div>

    <div className="mainpd1">
    <a href = "https://twitter.com/mikeejt" >
    <Teamp name = "MIKEEJT" dis ="Dev Lead" pfp = {mike}/>
    </a>
    
    
    <Teamp name = "DEGENNL" dis ="Prpject Manager" pfp = {deg}/>
    
    </div>
    </div>
    <img src= {mainf} className='mainf'/>
    <h2 className='minte'>Mint and Trade Exclusively on</h2>
    <a href='https://magiceden.io/launchpad/polygon/ring_runnerz'><img src= {me} className='me'/></a>
   
    <div className='lastm' >
    <div className = "icond">
    <a href = "https://discord.gg/trippinapetribe" target="_blank" >
    <FaDiscord className='icont'/>
    </a>
    <a href = "https://twitter.com/TrippinApeNFT" target="_blank">
    <FaTwitter className='icont'/>
    </a>
    </div>
    <div className='lastb'>
    <p className='created'> created with ❤️ by </p><a href= "https://twitter.com/yeahbichscience"> 
    <p className='italics'>yeahbitchscience</p>
    </a>
    </div>
    </div>
    </div>
  );
}

export default App;
