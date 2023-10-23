import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <Logo></Logo>


            <ul className="flex gap-8 text-2xl">
                    <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-red-600 " : ""
                        }  >
                      Home
                      </NavLink>
                    </li>

                    <li>
                    <NavLink
                         to="/addProduct"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-green-600 " : ""
                        }  >
                      Add Product
                      </NavLink>
                    </li>

                    <li>
                    <NavLink
                         to="/myCart"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-600 " : ""
                        }  >
                      My Cart
                      </NavLink>
                    </li>
                   

                </ul>

            </nav>
        </div>
    );
};

export default Navbar;