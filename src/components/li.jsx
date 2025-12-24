import { NavLink } from "react-router";


export default function Li({link}){



    return (
        <>
        <li  className="">
            <NavLink className='px-3 py-1 duration-300 transition-colors ' to={link}>
                {link}
            </NavLink>
        </li>
        </>
    )
}