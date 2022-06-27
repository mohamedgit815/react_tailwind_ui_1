
export default function Home() {
  const _uiNavBar = "mx-3 hover:text-pink-500 active:text-teal-600";
  const _constIcon = "flex flex-col items-center space-x-3";


  return (
    <div className="font-mono">

      <nav className="md:flex items-center justify-around bg-gray-200 py-2 px-1">

        <div>
        <img src="/images/5.png" width="100px" height="100px"/>
        </div>

        <div className="justify-around">
          <ul>
              <a href="" className={_uiNavBar}>Home</a>
              <a href="" className={_uiNavBar}>Service</a>
              <a href="" className={_uiNavBar}>Clients</a>
              <a href="" className={_uiNavBar}>News</a>
              <a href="" className={_uiNavBar}>Contacts</a>
          </ul>
        </div>


        <div>
          <button className="btncss">SignUp</button>
        </div>
      </nav>


      <p className="h-24 "></p>


      <header className="flex items-center justify-center w-full h-96 ">

        <div className="w-1/3">
          <img src="/images/1.png" alt="" />
        </div>

        <div className="space-y-3 px-20">
           <h2 className="text-3xl">Multipurpose landing template</h2>
           <h1 className="text-6xl font-bold text-primary">Beautifully</h1>
           <h1 className="text-6xl font-bold text-primary ">simple, code.</h1>
           <p className="text-2xl tracking-wider">Codelander is a beautifully simple,<br/> clean and lightweight landing page <br/> template for all types of businesses, <br/>with bold and bright colours.</p>
           <button className="btncss">Learn More</button>
        </div>
      </header>


      <section className="flex justify-around items-center py-12">
        <section className={_constIcon}>
          <img src="/images/2.png"/>
          <article className="text-2xl">Strategy</article>
          <article>We'll work with you to <br/> develop the right strategy</article>
        </section>

        <section className={_constIcon}>
          <img src="/images/7.png"/>
          <article className="text-2xl">Automation</article>
          <article>Work synchronization <br/> and automated services</article>
        </section>

        <section className={_constIcon}>
          <img src="/images/3.png"/>
          <article className="text-2xl">Deployment</article>
          <article>Dedicated servers to deploy <br/> and test applications</article>
        </section>

        <section className={_constIcon}>
          <img src="/images/8.png"/>
          <article className="text-2xl">Education</article>
          <article>Stay informed on all our tools <br/> and technologies</article>
        </section>
      </section>


      <footer className="md:bg-primary md:h-96 md:w-full md:flex md:items-center md:justify-around">

        <div className="text-white">
           <div className="text-white text-4xl">
           Code.
           </div>
           <p>A beautiful landing page <br/> template by Codefest.</p>
        </div>


        <div className="text-white">
           <div className="text-white text-4xl">
           About
           </div>
           <p>We like to do business <br/> at Codelander HQ to our <br/> clients'  satisfaction</p>
        </div>


        <div className="text-white">
           <div className="text-white text-4xl">
           ContactUs
           </div>
           <p>123 Business Centre <br/>
            London SW1A 1AA <br/> 0123456789 <br/> mail@domain.com</p>
        </div>


        <div className="text-white">
           <div className="text-white text-4xl">
            Socails
           </div>
           <a href="#">Facebook <br/> Instgram <br/> WhatsApp <br/> Twitter</a>
        </div>

      </footer>

    </div>
  )
}
