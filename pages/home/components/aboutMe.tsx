export default function AboutMe() {
    return (
        <>
            <section id="aboutMe" className="flex">
                <div className="w-1/4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">About me</div>
                <div className="w-3/4 space-y-6">
                    <p>Hello, my name is Bun. I am developer interested in position of web developer, fullstack developer, backend developer and frontend developer.</p>
                    <div className="rounded-xl border border-slate-200 p-6">
                        <div className="inline-flex w-full">
                            <div className="w-24 font-light text-rose-600 mr-4">Age:</div>21
                        </div>
                        <div className="inline-flex w-full">
                            <div className="w-24 font-light text-rose-600 mr-4">Phone:</div>097-240-4199
                        </div>
                        <div className="inline-flex w-full">
                            <div className="w-24 font-light text-rose-600 mr-4">Email:</div>bunpatta@gmail.com
                        </div>
                        <div className="inline-flex w-full">
                            <div className="w-24 font-light text-rose-600 mr-4">Address:</div>Thrungkru, Bangkok
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
