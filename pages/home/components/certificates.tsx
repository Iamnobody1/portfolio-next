const items = [
    {
        title: 'Nvidia', ///
        body: 'Fundamentals of Deep Learning',
        link: 'NvidiaDLI.pdf',
    },
    {
        title: 'IBM', ///
        body: 'Enterprise Design Thinking Practitioner',
        link: 'Practitioner.pdf',
    },
    {
        title: 'IBM', ///
        body: 'Enterprise Design Thinking - Team Essentials for AI',
        link: 'EssentialforAI.pdf',
    },
];

export default function Certificates() {
    const assetPrefix = '/portfolio-next';

    return (
        <>
            <section id="certificates" className="flex">
                <div className="w-1/4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Certificate</div>
                <div className="w-3/4 space-y-6">
                    <div className="grid gap-6">
                        {items.map((item, index) => {
                            return (
                                <div key={index} className="border border-slate-200 rounded-xl">
                                    <div className="flex items-center justify-between p-6">
                                        <div>
                                            <div className="font-medium text-rose-800 text-2xl">{item.title}</div>
                                            <div className="font-normal">{item.body}</div>
                                        </div>
                                        <div
                                            className="text-rose-800 text-2xl flex-none cursor-pointer"
                                            onClick={() => {
                                                window.open(`${assetPrefix}/certificates/${item.link}`);
                                            }}
                                        >
                                            view
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
