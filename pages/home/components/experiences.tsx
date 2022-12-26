const items = [
    {
        logo: 'https://writer.ookbee.com/static/image/ookbee-logo.ico', ///
        title: 'Ookbee Career project',
        sub: 'Web application',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati!',
        link: '',
    },
    {
        logo: 'Discord.png', ///
        title: 'DiscordBot with typescript',
        sub: 'BOT',
        body: 'Creating DiscordBot from DiscordJS with Typescript',
        link: 'https://github.com/Iamnobody1/ImposterBot',
    },
];

export default function Experiences() {
    const assetPrefix = '/portfolio-next';

    return (
        <>
            <section id="experience" className="flex">
                <div className="w-1/4 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Experience</div>
                <div className="w-3/4 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        {items.map((item, index) => {
                            return (
                                <div key={index} className="border border-slate-200 rounded-xl">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-200 mr-6 overflow-hidden p-3">
                                                <div
                                                    className="bg-cover bg-center"
                                                    style={{
                                                        backgroundImage: `url("${assetPrefix}/logos/${item.logo}")`,
                                                    }}
                                                >
                                                    <img className="relative w-full" src={`${assetPrefix}/frames/1x1.png`} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-rose-800">{item.title}</div>
                                                <div className="font-light text-rose-600">{item.sub}</div>
                                            </div>
                                        </div>
                                        <p>{item.body}</p>
                                    </div>
                                    <div className="border-t border-slate-200 px-6 py-4 text-right text-rose-600">
                                        <a target="_blank" href={item.link} rel="noopener noreferrer">
                                            View this project
                                        </a>
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
