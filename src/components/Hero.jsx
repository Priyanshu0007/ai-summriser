import {logo} from "../assets"
function Demo() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-40 object-contain'/>
            <button type='button' onClick={()=>{window.open("https://github.com/Priyanshu0007")}} className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black">GitHub</button>
        </nav>
        <h1 className='head_text'>Summarize Website With<br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAi GPT-4</span>
        </h1>
        <h2 className='desc'>Simplify your reading with Summy, an open -source article and website summarizer that tranform lengthy article into clear and concise summaries</h2>
    </header>
  )
}

export default Demo