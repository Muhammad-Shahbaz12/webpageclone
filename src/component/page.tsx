import Link from "next/link";
export default function Navbar(){
    return(
        <div className="manu-bar">
          <ul className="manubar">
            <div className="link">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
            </div>
             </ul>
            
        </div>
    )
} 
