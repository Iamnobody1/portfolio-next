const items = [
    { logo: 'Typescript.png', name: 'Typescript' }, ///
    { logo: 'ReactJS.png', name: 'ReactJS' }, ///
    { logo: 'NextJS.png', name: 'NextJS' },
    { logo: 'Tailwind.png', name: 'TailwindCSS' },
    { logo: 'NestJS.png', name: 'NestJS' },
    { logo: 'Dotnet.png', name: 'Dotnet' },
    { logo: 'PostgreSQL.png', name: 'PostgreSQL' },
    { logo: 'TypeORM.png', name: 'TypeORM' },
];

export default function Skills() {
    const assetPrefix = '/portfolio-next';

    return (
        <>
            <section id="skills" className="flex">
                <div className="w-1/4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Skills</div>
                <div className="w-3/4 space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        {items.map((item, index) => {
                            return (
                                <div key={index} className="border border-slate-200 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <div
                                                className="bg-cover bg-center"
                                                style={{
                                                    backgroundImage: `url("${assetPrefix}/logos/${item.logo}")`,
                                                }}
                                            >
                                                <img className="relative w-full" src={`${assetPrefix}/frames/1x1.png`} alt="" />
                                            </div>
                                        </div>
                                        <div className="font-medium text-rose-800">{item.name}</div>
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
