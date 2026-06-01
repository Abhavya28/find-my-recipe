import Link from "next/link"
import { navLinks } from "../utils"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-12 py-4 border-b-2 border-gray-200">
            <Link href="/"><h1 className="text-xl">FindMyRecipe</h1></Link>
            <div className="flex gap-4">
                {navLinks.map((link, key) => {
                    const Icon = link.icon;
                    return (
                        <div className="text-gray-600 hover:text-gray-900" key={key}>
                            <Link href={link.href} className="flex gap-2 flex gap-2 items-center">
                                <link.icon />
                                <h1>{link.title}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar