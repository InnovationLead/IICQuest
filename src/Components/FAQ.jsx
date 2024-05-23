import Accordion from './Accordion'
import ShinyButton from './Fragments/ShinyButton';

const FAQ = () => {
  return (
    <div id='faq'>
      <h2 className='text-6xl mt-36 font-oswald text-center'>FAQs</h2>
      <div className="p-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg font-sans mt-6">
        <div className="flex flex-col  gap-6">
          <Accordion
            title="Why should I participate in IICQuest ?"
            answer="By participating in IICQuest, you can apply your knowledge in a practical setting, work collaboratively in a team, and come up with innovative solutions. It’s a unique learning experience that broadens your understanding of different domains."
          />
          <Accordion title="What are the requirements for participation ?"
            answer="To be eligible for participation in IICQuest, participants must be currently enrolled in a Bachelor’s degree program. The event is open only to colleges from Province-1. Each eligible college is allowed to send one team for participation. The team should comprise of 3 to 4 members." />
          <Accordion
            title="How to register in IICQuest ?"
            answer="To register for IICQuest, colleges are required to complete the registration form available on the event’s website. A registration fee of Rs. 5000 is applicable. Once the form and payment are submitted, your college will be successfully registered for IICQuest."
          />
        </div>

        <div className="flex flex-col gap-6">
          <Accordion
            title="What are the facilities provided by IIC ?"
            answer="All lodging and food expenses for the participating members are covered by the college. However, participants are responsible for their own transportation to and from the college."
          />
          <Accordion
            title="What should I Bring in Hackathon?"
            answer="Participants are advised to bring their personal belongings that are generally required for day-to-day use. This includes items like toothpaste, a toothbrush, and any other personal hygiene products you may need. If you are on medication, please remember to bring your medicine."
          />


        </div>

      </div>
      <div className="handbook flex justify-center mt-12">
        <a href="./doc/IIC Quest Handbook.pdf" target='_blank' class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-purple-600  rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#c8ccf4]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black text-2xl">HAND BOOK</span>
        </a>

      </div>
    </div>
  );
};

export default FAQ;