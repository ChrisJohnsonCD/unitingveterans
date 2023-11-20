import Link from "next/link";
import StudentInfo from "./StudentInfo";


export default function Home() {
  return (
    <main> 
      <div>
        <h1>CPRG 306: Web Development - Final Project</h1>
        <StudentInfo />
        <ul>
          <li>
            <Link href="sprint1">Sprint1</Link> 
          </li>
          {/* <li>
            <Link href="week4">New item</Link> 
                   
          </li>
          <li>
          <Link href="week5">Week5</Link>
          </li> */}
          
        </ul>

       </div>

    </main>
  )
}


      
      
      