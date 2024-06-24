import Link from "next/link"
import "./style.css"

export default function Header(){

    return(
      <header data-theme="night">
<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" href="/">Cassino</Link>
  </div>
  
  <div className="flex-none">

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://firebasestorage.googleapis.com/v0/b/rede-social-365b6.appspot.com/o/Teste%2Fuser.jpg?alt=media&token=920b1ba3-ac54-4303-b5a0-ca66799c70e2" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
      </header>
    )
  
  
  }