import Link from 'next/link';

const items = [
    { name: 'About', section: 'aboutMe' },
    { name: 'Skills', section: 'skills' },
    { name: 'Experience', section: 'experience' },
    { name: 'Education', section: 'education' },
    { name: 'Certificates', section: 'certificates' },
];

export default function NavBar() {
    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 border-b border-gray-200 mx-12 text-lg">
                <div className="max-w-container-lg flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0">
                            Download my CV
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-white">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-rose-700 rounded md:bg-transparent md:text-rose-700 md:p-0" aria-current="page">
                                    Home
                                </a>
                            </li>
                            {items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            href="/"
                                            onClick={(e) => {
                                                const section = document.getElementById(item.section);
                                                e.preventDefault();
                                                section && section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }}
                                        >
                                            <div className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0">{item.name}</div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
