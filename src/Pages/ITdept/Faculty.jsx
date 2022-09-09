import React from 'react'
import FacultyEntry from '../../Components/Faculty-entry/Faculty-entry'

export default function Faculty({name,designation,img}) {
  return (
    <div>Faculty
           <FacultyEntry name='Dr Sunil Bhutada' designation='HOD&Professor' img= "https://www.sreenidhi.edu.in/staff%20photos/10000072.jpg "/>                  
            <FacultyEntry name='V.V.S.S.S Balaram' designation='Professor'img="https://www.sreenidhi.edu.in/staff%20photos/10000267.JPG" />
            <FacultyEntry  name='Dr Sriman Narayana Iyengar'  designation='Professor&Dean(Library & IS)' img="https://www.sreenidhi.edu.in/staff%20photos/10000992.JPG"/>
            <FacultyEntry name='Dr. MD Jaffar Sadiq' designation='Associative Professor'  img="https://www.sreenidhi.edu.in/staff%20photos/Jaffer.png"/>
            <FacultyEntry name='Mr R. Kameshwar Reddy' designation='Assistant Professor'  img="https://www.sreenidhi.edu.in/staff%20photos/10000758.JPG" />
    </div>
  )
}
