'use client'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";


const page = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // console.log(isOpen);

  const faqArr = [
    {
      ques: "Can I register two players under the same email address?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "Do I need an online player profile to get recruited?",
      ans: "Yes, you do need an online player profile to get recruited. An online profile is essential in today’s digital age, as it allows college coaches to easily access and evaluate your athletic achievements, skills, and academic accomplishments. This centralized platform ensures that you are visible and accessible to coaches, helping them quickly determine your potential and fit for their program. An online presence is crucial for standing out in the competitive recruiting landscape and significantly increases your chances of being noticed and recruited by college teams."
    },
    {
      ques: "What does the Diamond Sports Recruiting online player profile include?",
      ans: "You can view our Custom Online Player Profile at https://www.diamondsportsrecruiting.com/player_profile_demo"
    },
    {
      ques: "How is the Diamond College Fit Finder different from other tools that help find a college fit?",
      ans: "The Diamond College Fit Finder stands out from other college fit tools by leveraging advanced predictive analytics to provide a comprehensive and personalized match. Unlike traditional tools, our Fit Finder uses athletic inputs, such as your position and graduation year, to align you with the specific needs of each school's roster. Additionally, we consider your academic needs and goals to generate a holistic fit score, ranging from 1% to 100%, based on both athletic and academic inputs. This dual approach ensures you find the best possible match, maximizing your potential for success both on the field and in the classroom."
    },
    {
      ques: "What % of softball and baseball athletes get athletic scholarships?",
      ans: "Softball ~1.6% & Baseball ~2.0% receive athletic scholarships to play at the collegiate level.Given the competitive nature of securing an athletic scholarship, it's crucial to excel both on the field and in the classroom. Selecting a recruiting service like Diamond Sports Recruiting can significantly enhance your chances. Diamond Sports Recruiting provides personalized support, helping you create a standout online player profile, connecting you with college coaches, and ensuring you are strategically positioned to maximize your visibility and opportunities for recruitment."
    },
    {
      ques: "Do you offer recruiting services for all sports?",
      ans: "No, we focus solely on baseball and softball athletes. Unlike other recruiting services that cover a broad range of sports, our specialized approach ensures that we provide the most tailored and effective support for baseball and softball players. This dedicated focus allows us to offer expert guidance and resources specifically designed to meet the unique needs of athletes in these sports."
    },
    {
      ques: "Can you help with creating highlight videos and other recruiting materials?",
      ans: "Yes, Diamond Sports Recruiting assists in creating professional highlight videos and other essential recruiting materials to showcase your talents effectively to college coaches. Please contact us for a personalized quote at support@diamondsportsrecruiting.com"
    },
    {
      ques: "What makes your recruiting services different from others?",
      ans: "Unlike other services, Diamond Sports Recruiting specializes solely in Baseball and Softball, providing expert, tailored support and leveraging predictive analytics for precise athlete-to-college matching."
    },
    {
      ques: "What age or grade should athletes start using your recruiting services?",
      ans: "Athletes can benefit from starting our services as early as freshman year in high school to maximize exposure and preparation time, but it’s never too late to begin your recruiting journey with Diamond Sports Recruiting. Please remember, for Softball, NCAA Division I rules prevent coaches from having recruiting contact with prospects until September 1 of their junior year. For Baseball, NCAA Division I rules prevent coaches from having recruiting contact with prospects until August 1 of their junior year. Keep in mind these rules are strictly for college coaches, student-athletes have no communication rules and should be continuing to reach out to college coaches!"
    },
    {
      ques: "What is the process for getting started with your recruiting services?",
      ans: "Getting started with Diamond Sports Recruiting is easy. Simply visit our Pricing page, create your player profile, and our team will guide you through the next steps to begin your personalized recruiting journey."
    },

  ]



  return (
    <>
      <div className=''>
        {/* <div className='bg-[#012555] p-10 pt-20 max-md:p-10 text-white'>
          <div className='max-w-screen-2xl mx-auto max-md:text-center'>
            <h1 className='text-6xl font-semibold max-md:text-3xl'>Are you serious</h1>
            <h3 className='text-3xl font-semibold mt-5 max-md:text-xl max-md:mt-2'>About your future?</h3>
            <h4 className=' font-medium mt-2 max-md:text-xs'>Your recruritment starts here</h4>
           <button className='mt-6 bg-white hover:bg-[#ffffffad] transition-all text-[#012555] p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Join Today</button>
          </div>
        </div> */}


        <div>
          <div className='w-fit mx-auto my-14 max-md:mt-8'>
            <h2 className='text-3xl font-bold text-center max-sm:text-xl text-[#012555]'>Frequently Asked Questions</h2>
            <hr className='border-4 border-red-600 w-[10%] max-sm:border-2'/>
          </div>
        </div>


        <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-20'>
          {faqArr.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => toggleOpen(index)}
                className={`flex items-center justify-between border-2 mt-4 border-[#012555] rounded-2xl p-4 px-6 text-lg max-sm:text-sm font-medium cursor-pointer transition-all ${openIndex === index ? "rounded-b-none bg-[#012555] border-none text-white" : ""}`}
              >
                <p>{item.ques}</p>
                <FaChevronDown className={`transition-all duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              <div
                className={`transition-all overflow-hidden -mt-5 items-center justify-between rounded-t-none rounded-2xl text-lg max-sm:text-xs p-4 px-6 font-medium cursor-pointer ${openIndex === index ? "bg-[#A2CFFE] opacity-100 h-auto mt-0" : "h-0 opacity-0 bg-none"}`}
              >
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page