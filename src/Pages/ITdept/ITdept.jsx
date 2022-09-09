import React from 'react'
import './it-styles.css'
import ITIntake from './IT-intake'
import { Link } from 'react-router-dom'

export default function ITdept() {
  return (
    <div className='ITpagecontainer'>
      <div class="IT-HOD">
     <p class="HOD">HOD of IT DEPARTMENT</p>
      <img src="https://www.sreenidhi.edu.in/staff%20photos/10000072.jpg" alt='img'/>
      <p>Dr.Sunil Bhutada</p>
      </div>
      <div class="IT-VISION">VISION
      <p>
       To achieve excellence in Engineering Science and Technology and to produce professionally competent, socially sensitive, skilled intellectual IT professionals to meet the current and future challenges of the modern computing industry in the global scenario.
     </p>
      </div>
      <div class="IT-mission">MISSION
      <p>
      
         To be committed in providing quality education in professional core and multidisplinary areas with continuous upgradation and to prepare IT graduates succeed in industry as an individual and as a team.
         
         To inspire and encourage the graduates to use modern tools, design and create novelty based products supporting technology innovation to meet the needs of industry and society.
  
         To continuously engage in research and projects development, to instill leadership and planning for the effective and strategic use of emerging technologies to  attain sustainability.
       
      </p>

      </div>
      <div class="IT-PEOs">PEOs
      <p> 
        PEO 1: Graduates will attain a strong foundation in Basic Sciences, Engineering Sciences and fundamentals of mathematics through which they acquire knowledge and abilities to analyze, design and develop solutions using Modern tools which will help them to be employable.

         PEO 2: Graduates will develop an ability to work in a team/ lead a team with effective communication skills, knowledge of project management, finance and entrepreneurial abilities.

         PEO 3: Graduates shall acquire skills to conduct investigation of complex problems to propose appropriate solutions and develop attitude for lifelong learning which will empower them to pursue higher studies, Research and Development.

         PEO 4: Graduates will be aware of the engineering professional ethics, impact of engineering profession on the society, need for environmental protection and sustainable development in the present and future scenario.
 
      </p>
      </div>
      <div class="IT-POs">POs
          <p>
          engineering knowledge: Apply the knowledge of Engineering Mathematics, Basic Sciences, Engineering Fundamentals, and Engineering Specialization to the solution of complex Information Science and Engineering problems.
     Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems of Information Science and Engineering reaching substantiated conclusions using first principles of Engineering Mathematics and Engineering Sciences.
Design/development of solutions: Design solutions for complex Information Science problems and design system components or processes of Information Science and Engineering that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions in Information Science and Engineering.
Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations in Information Science and Engineering.
The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice in Information Science and Engineering.
Environment and sustainability: Understand the impact of the professional engineering solutions in Information Science and Engineering in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the Information Science and Engineering practice.
Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
Communication: Communicate effectively on complex Information Science engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change
          </p>
      </div>
      
      <div class="IT-outcomes">OUTCOMES
      <p></p>
      </div>
      <ITIntake />
      <Link to='/Departments/IT/Faculty'>IT Faculty</Link>
     
    </div>


  )

}
