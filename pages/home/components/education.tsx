export default function Education() {
    const assetPrefix = '/portfolio-next';

    return (
        <>
            <section id="education" className="flex">
                <div className="w-1/4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Education</div>
                <div className="w-3/4 space-y-6">
                    <div className="grid gap-6">
                        <div className="border border-slate-200 rounded-xl">
                            <div className="flex justify-between items-center p-6">
                                <div className="flex items-center">
                                    <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden p-4 flex-none">
                                        <img src={`${assetPrefix}/logos/Debsirin.png`} alt="" />
                                    </div>
                                    <div className="grow px-6">
                                        <div className="font-medium text-rose-800 text-2xl">Debsirin school</div>
                                        <div className="font-light">I graduate from Debsirin school in Math-Sci.</div>
                                    </div>
                                </div>
                                <div className="flex-none">2013-2018</div>
                            </div>
                        </div>
                        <div className="border border-slate-200 rounded-xl">
                            <div className="flex justify-between items-center p-6">
                                <div className="flex items-center">
                                    <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden p-4 flex-none">
                                        <img src={`${assetPrefix}/logos/KMUTT.png`} alt="" />
                                    </div>
                                    <div className="grow px-6">
                                        <div className="font-medium text-rose-800 text-2xl">KMUTT</div>
                                        <div className="font-light">I learn at SIT faculty in computer science department.</div>
                                    </div>
                                </div>
                                <div className="flex-none">2018-2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
