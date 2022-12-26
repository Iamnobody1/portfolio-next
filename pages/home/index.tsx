import NavBar from '../../components/navBar';
import AboutMe from './components/aboutMe';
import Certificates from './components/certificates';
import Education from './components/education';
import Experiences from './components/experiences';
import Skills from './components/skills';
export default function Home() {
    const assetPrefix = '/portfolio-next';

    return (
        <>
            <div className="text-[#6B728E] text-lg">
                <NavBar />
                <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-rose-500 min-h-[400px]"></div>
                <div className="relative p-6 mx-12">
                    <div className="w-[200px] h-[200px] rounded-full -top-[100px] absolute overflow-hidden">
                        <img src={`${assetPrefix}/me.png`} alt="" />
                    </div>
                    <div className="ml-[200px] pl-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-slate-700 text-3xl font-bold">Thanaphong Phatthanaphaisarnsin</h1>
                            <p className="">Junior developer</p>
                        </div>
                        <div>
                            <button type="button" className="mr-4 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                View my portfolio
                            </button>
                            <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-slate-200 my-10"></div>
                    <AboutMe />
                    <div className="border-t border-slate-200 my-10"></div>
                    <Skills />
                    <div className="border-t border-slate-200 my-10"></div>
                    <Experiences />
                    <div className="border-t border-slate-200 my-10"></div>
                    <Education />
                    <div className="border-t border-slate-200 my-10"></div>
                    <Certificates />
                </div>
            </div>
        </>
    );
}
