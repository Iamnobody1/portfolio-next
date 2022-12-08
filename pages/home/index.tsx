import NavBar from '../../components/navBar';
export default function Home() {
    return (
        <>
            <div className="text-[#6B728E] text-lg">
                <NavBar />
                <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-rose-500 min-h-[300px]"></div>
                <div className="relative p-6 mx-12">
                    <div className="w-[200px] h-[200px] rounded-full -top-[100px] absolute overflow-hidden">
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="ml-[200px] pl-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-slate-700 text-3xl font-bold">Thanahpong Phatthanaphaisarnsin</h1>
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
                    <div className="flex">
                        <div className="w-1/4">About me</div>
                        <div className="w-3/4 space-y-6">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius numquam expedita quisquam aut eos quaerat accusantium repellendus exercitationem, enim aliquam.</p>
                            <div className="rounded-xl border border-slate-300 p-6">
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
                                    <div className="w-24 font-light text-rose-600 mr-4">Address:</div>1655 Phetchaburi Rd, Makkasan, Ratchathewi, Bangkok 10400
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-300 my-10"></div>
                    <div className="flex">
                        <div className="w-1/4">Skills</div>
                        <div className="w-3/4 space-y-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">ReactJS</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4 rounded-full overflow-hidden flex items-center justify-center">
                                            <img src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">NextJS</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <img src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">NestJS</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <img src="data:image/png;base64,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" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">TypeOrm</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAwFBMVEX///8zZ5EAAAAuZI8hXosqYo4kX4wdXIorY44XWon39/fx8fH7+/vt7e3m5ubb29vh4eGamppsbGzV1dXDw8OioqLx9PfH096wsLAjIyORkZFMTEx8fHzt8fXk6u9zc3NBQUHJycmHh4dXV1eSkpLU3eYXFxc6OjozMzO5ublkZGRbW1uasMSQqL5VfqG2xdRliagoKCh5l7Kpu8xbgaN1lLA+b5e/zNkPDw+itccATIFJdZqwv86FoLlXf6KUqr+B2pDlAAAaYElEQVR4nNVdeUPiPBMHe1EsyH3IjbKKyCEoyKOs3/9bvZTM5GjTNin6yv7+WhdaMpl7MkkymYvD9c2odT+udB5f/ry/X129/2k/3A3G5Wm1+NsjOw/X1Vb34SoGL916Nf/bo5QjX7yptcrl+yPK9XqrdlMqciMttbrtOMIYhuWq991jK1Rb9fHTUVza7T/tl5fH4ax7X5/eFJSmslArz15kI20PB+VpqTAd/FGjDFGZfhsLr2v3nch5fX94Kk+LMb+VH3Uf9YauSODoG0ir3g4Vfuq9M54WZI/XKj9BGUH7/vos0kpjRV044aXSEs1aYawpcDDqTrfcqlVLxWLBR7FUGh214k42lEEpNW3TToqRdWuo8iV9tr1XyqNSpJTnS9PbkEl9SkdfK9W8+7hrHYW0IKHtcdYd35aPZvN23J0FlfHhdqTi0LzqfYDCilQlYjF9Dw5tNq7Xqmgj89el6mha7j5JLeHVVacr/v3SbVXDSlIa1cHiMI6roNASbcGtHm0l8enO7Shaf4uj+iDWBR/Nd6z2V+tVvdH5KJR5NXzXsZ9lcWwqrqVar8gN0KymP3Q1jO74UaryvsBxYtjS8JrFViWoq2N9nTih0Z80l5+bvY/Ncjfp92Tfunni2KcmACNu3vVF5qbMGdpb/YCi0d/t14ttznEc0waYjuNa28V60wzReDNjv1ZWeH2LfruTQh18FFpEZAYSvnn5xgn5CEFqHP5zbcvISmBYtmN+HHYN8YkRs2uzROm8p5yehj7L95vLzfP8cJjPn/fLXbMfNcbMdWv4Epgbb7I8rBZbw3Zc17Sz28Vqvd9Nwi/oHeycjDgk0TFf9yILmZV4SXApt1RLRaFq7Oar7VFYjtJi+SDi4mYXb8+7fvwrfUyeX03HtCyDcsUwfF645uKwDD7fWztS5tFHbfd1yU8LZ+FjxY1yriWM7evDdSwrSlxcRzJEDv151rWjxmtYprs9NAOTsXDiyDs+5dhznoGUKVcxFprqHBfdNPZbV64I4hDN1X4ie2fz1ZXOi/C446xFApdm0kOWu+boY6YwrFCBr7SZVPYO0dMe/Dnbcd6WAas2+XDVHrdc65l/1ntzkx85MAtz/SAVO4Zr1E0q097cSZpCETnT+eB0vvGmSNsJtvvGy3cy+44TumHff4rn3kOQc82srUXbCc4rnZylFWP9pKN1Vhx9vYWZ+IS5YA/Q0FYWlqFhpV7qoDPxdICv9IXrRNkKI+fw2nRIMC5Z374w9lGbGE6KSgGb2nhNnjnJj30g5xuLFIzP+tK2Z4PaKSi9u6LCRj1fKGqHAKqOYrHV0zgcGwpKP6splQzOBzO+k2zyMKwtlU70DMMAcVPy33eUuFSDc9Gu95OcSBwMZ07H1ftIJs+wqTtB3RuI1P0RlM77SEWc+YXEqbqRqBd9UHZ4CwUhcpf4dbScguGsi3L5mkosjQ94vJE9jziffXS8mVcFBXapbUG/x0eSpM7wCH99Jdsq6U/ghKfjfOBlh3TkodceM+JaQpA2SWHKjzCf4W3rdNYy+DrmW/7qCGc1ZDcfBUuzTSVXxhYeX6abnBCsDxpoKekemhawLDSZrQqs26STSwfe3v8WzvnIUVOfV5lwB76dh4ASqRuQEIz84aUbXW6FWvINSgcwssx9JpNnbPMC86oCsWAwn9NR54ALXqbjfMSAKXkThcjJehNEEaqcNV4NvXTGHN+cT/V0JBh5KrPmwgwTD/BA/qjwYUrKuUehn3+b1hEYWzQt82Tu4RR3OXZ55N+Q9f1NxTsLtK6XJvSORQ5DBBXDaeV5YaxyYkoEs5/OnKNMHFIFObHAiVOZOfAKJc6QlHkp3aeSLIzBet/k6gTQmLqZ+HbMnrhwhdTL7oH9qQTThDho/v2sO8LdAXnrpNfnQPFIBXfG1I54h146m2ITefd+gnVZZrIySVNvLMj37qg/v+HVbpeKOmtNXvr57TaFgCYfibK5JUWdMaEpgxH0yzlWAYOwj3MTnyjYmDC8JYzPIP7jllJH6Oyeo3a5zDn2VgU4f40E6mxSc4ICi4cFFRKGNdI5u8NP2pQTjCzUERNCfIdQV6faRv4xOmP2TZjYVONWBJXNeOl3BeoKaDJLZxgVl8xryqRX9UcgXmjGDjFIXYk3mal8OQYTXz8nmFnObr7GMc8JUEfisD9nmEws5v+YxSRwPjPJIiJalTxEnFAvWqUZIPjaH4nCeBhgWFYx6XGOeIR7tJnE3XXOmH6TPLv8IVdOYX8pMI8ETdSbEyZC7Xab4kdR7RKDwLNhNpI0DytXFaTuloXT6RJrjMvTVdK0fgmSheh4DONM4sPbyERSHkvlzKGgkjL+1gK4nuiJRDkibU9DkbpeGuEye2e4Sj3YUA+OdFwYNV2hug24QCxd3QC83TcXVKSAgLYRJZrgnKDafosKSKjrp6AOhSGVM9GFCXnsKkLIHPI5JHX186kDafF+3qgcYcDaQpQawDoNNG/UzqfOJKsTjZ/zdpZ16ms64T8y/KgiAPgMCMRuROrS6B2YTMHFGjnSaOU45jlrsD4sx1jNl81+r9Fo9PqTZj/O5WEsOqaxc5e3mSksA0R2NFLxG4c+3p53zf4RzeVhodzOIxmts51LGuUyUcsBaANIHew9E/B3aRY4PP7nLHd72In9Rv39NqXUmttlVBOhPA+yIFa7otHlGI2nT53+CDD28eMww8weZL1i3l7eQpfwZmcveRdgIqUOTGbhisZfJBKDsop+nIlW7PUokR+7qKnu6TevGJa0qS6WOtFk+ksHJIqekYf0cwSsj27dVdxoMitN8gxD2gmNkEsm5EiQ3fkV2paQ32lLkEUi23w8bUf81dNph2+Ia0yan5sjls1JL4Y6A4xKhZpMYGPq3NyOUI7epLlc8p3BnhZ1tLh+JOSQPfoWk7R/u/+RWZS6c1swKqcKLUQtpA1no60e9meYssl+Zfq+zvd5r3SYyWscDHSZOrPMulbO8vuVgWzCU2mqDLW5Ao2hacRZimZ4LMxlRsTkYDichzNc2mOoIfa4TO2tXMN2F4fn/XxFhuY2otkAn9VolEn5SPod9OuZzo4nrbHZYr9qzg+ejrHKMZAC8uR2TgY0xJm/tmHtISPvnz6yBPcqPiVGKjenPx55d65LHC2Bn54+WCZyzVzt+vnGZLk2bAOWLtQtMgqEv5jMrMs6xyiQGQhM7qBbkVRYBkxKU7gEh9pKb26xCbVol17+yzThD2WthoT4GPay95CM3IjJt0CMPBapZNA7gEt4043FsESc2Qltxi5n0D9NiwiXagqCDDrOBhZKfGH0n0b+yPItUDvw5bDaCkpI/tAuRgN1XqC/m1dHL2t+Ro9JAowQ/ESArh+Q5RF0QBL7gHMCq1vQHF06y2iC3gVrjLQu7guYhQZeUTJQHE/fNv/689eHBn74OZn1wxBaUDuU05RGEwxAPzgrNmtA9D2Bh6KmAmBQg3zbcO2PrAvzAhIvYwJYgLygdriEfg9SpAnw5uG813kjFHl+hAlxleIqUeidTKDd6GlyBUWjHX7EaD7BRGsaTZhnSa3Qsp4n/cmX7X8CaqhYUYycMZpvSRwCKuuAhdAn1Hmzort+CkUjqaO0HQd8O+qEmlkRJZMHdQjhUaKPhP2pNMAVeo12mnk0WAAvPjOMGVX0OzNh6mIcgkP8AYTNT0gcRp3p1paxmSOJK+Rbat2R0e/EYnR4kOgYIbfjtjq1OT3UbWBEcU8IcqxAbSkWxl/yzrADAfGTLBXiEumQT3lOIDtjKyA8euRhGSqBOnD6ioE0BKbh0MKUe9cstcpFQtyQEXeWWUGNSmh0wUlX02pY/Q7PBfi0sLvD6KEuhGEnjASzohetYLKSQB2txyu9FBxIuPXGiXLmGKF1+OyHQDArmsvfitQpqicAjWbopZGZudnnKWlneJAUD7qk9ap+aAESWnLRpKm5BPx2yMRCO0qo2w4fgF0j3D6SDBaRoOqnlwThe2O7SHyQrykurtsRihdFHSYhnUCgwpNM/tCrHClKZjZHzKDiGiYmUEGPFyWZ4HDAYl4JxKGDL8knLBaKNhO5oTh12JweNOCOvN6HGVZdJpiYNYCD16JO0d+h2is3tXjSmY7wCMjqR5lgorxCbSVRhXioGkOw5ar+JqKfFXPl4Fs8XgTfA8RBtg79tVpbZVTjTDfKD0e8FiZtI/IarEfAa6EDuQ278hOEvTJa1QeI2hPddGSUEQGbhPyBLEgeRWOJCmxK6KAOKEiT6oNWZ3pcfsfD0Qo0WbomuhCaAfH/iU4JWPQQJA53i8Iqnk5RE2LzxKxblzoMHMWAGW2YYBpwi+wslPwgujzZOm2kUVWjCOrUpR7LwAIhSLPAUXCluOFVctrQNK3iYQnu26lDcyU+YcH8c+qINgXy1kqYOAw/ieLldaiDUSf5MfQI6oUNKC2LegL/yYdiaFPe+VwggEde8TR2Jah6aVvTm7OkRngkLAKoipDGvWRkGPCKp+PxyGQmVugtxe9xMGBo/JbXsCKg3webUs/IAIpH6hEaK23RBcYAVL/HUQKB/yc3GnDnrMkPB4ABtPxMPbA45HgET3kMrKEj4Xta+Z04cH4XR8idY+4zjrYpPh75UFN5EKqBGH5Pa30Qg2OOeejO6fig5RwWQyJP3OrySqmc48FcJjZUg9PXW9uVMI+2xxjC72OGKolTCGp8jpfovgKjTgxVIIjWrAVjFML2UWM6iYUOqEDDSk/0cVueYHNUe0lhQSNxVRVMpmYdn64CUoEO6DkKai0i92EgOR7sOle1bYrUoVHRXYNB5lH/FrBO2JHUich9GOjeGeF1itQl6Cmqh+7mRap5aJOROlLaQlsVPnQkhCofyajuTEBrkcAT3LOg3aiF52mhBxZ5h6wDT96NJk7YpK3sE3CBK/5byAL9ViYsKuCGV0HvMIGHikM4beVBqppQx1XcfqxWVsEwPsVWIZRp0GyLL8Eh6+CkplkccRiMafkEacIVAuZq2rRlqbWF4zHQSJ7+DTMbPOdNjmvBJ6gaACI5n3FmBZUljWBSeohq85EYpj7QjtnJxIOUH4bkD8VoHqQj1k2jXU/aLC4HErH3ZRM2k/hFMTSYyLqkI6PLvF1VDCuwuhPr/gl/8+la22mvpv8TQKpvQqGZDLUuMghDwCxA2UUt4M1F1MQ5YMvrJmXjPrai+fEYVB6OcTBuxlNlHS6gg+1RXNCATusYVsNKaurthzQe2xo4l0cjBgVP9HXDROK4wx8yyo1BuJU+0kHKyz86oJmQyfTAhLpEVZl1+FWItPVEM3IyULD0++URNB6zoWjUdw3I9THCVGAdnsQIrSyKIS8mIREbpTG6OOeICzS6z2BgNjayc6TOOnqYUwI3RNBoQv51HMc5Jx6h5uVBDBYWNqXCmtZdRgVsW54PxTKBA6Hgs1SxbPJh5GZOJbhNfpR9F6UdD7jmexxiIIimokNHi59ZSGQTQ410p0EhsPeA4OCCofKgQhtVKwoCRJMkearNHbBWn8kbYWbjLJ+5cZRnXsPGbfV4TK3qBV3c9qeM8slpNJrom8EH0NydezoJ34n8hSeBYg0zsE4egzavpap1cRe3y0yCG0GxXH72MQkm3W/UM5FSPKNW/Y4JcOikJq28TmnSkyADBzGD0ObPPwPCxp84oLCjN5AX16WAPLesN+X06MpMfsVbTsx9vuHYSbozoY8bMMAbCOsi+evrwnXMFRfkGdh8obygQA/bO8ZLOWYesQ7+HVvtzbk4UDzYGxy5d10rP8F23rt6VP2I23iY0TB1NiOvMTdxExdI7PeczCg6PVhxvLrL34ym5UEncDtTV66M/O41nayFI+90Y4R/dwpaum86I87kN4veXSVA7uHveEOUV3fCriA5/c36w/kP/uubzoCg0XSGVp/jIK2zTAVLpBwe8rwLoOE6zplHmxM49De8eMIIpMpHPgK7orpewt2LEEJ/2dw9r9xzjygx3MUGzeFTJEltpoDS2HpMPgNbpJaW5T4SbxrqfcVd9JMMh98WPZJcqDgctEZ54UOZbEKAA6G0UgzFzs6txdwA1VM5cD0K5kZ8WbHVvXs4Muq9/dB5GrdqRX56YbuMNESDfBdiU4XCppHDQMLP7oetyNWKdWrjaTZl7/PyeU8qNCSgbMs+AnsEiw4KTYd0eygWqGb1G7m/SVfSZB0CqgCvLf0MFBMGmJjEUjeLHpaowawSvtUs5RE6Oc4gK8XMrRjqoAMXBrdL0DyaIeSDtzlSFZxQP6yzp577CZT8xufKfVOgrx5DHXoT+DOeeQ6m5pngPZm4it3fui696EercxdA958/u/4Gdvsr6oSLCRq3WQx16BTAo8fOt7nGh4L3p6LFOl1SklM7/1IOPG7hCwZiu697SsgJjcluv97+hwcXQKbzmJECFSh5vlmIErwBFX0pqJphg3FLYVfc0CmP/jV69uLtMJ8f1qtF1vGjIZdd1TKM8QgZ6jBA86JrkewU9XGAOHqbFx6vjpVB7S3ttK4W7KIxcqe7+Eg9wHKphtCxRJXKsGQBQzxEuGEji/JRDxD3gD6Pu6REPsZkKCyBGu4r27+PmV/0il5X4G1U4xi9umkq0vaHVgM+GduhTK6veIasX1gYhrvgnD29jiu6yonMg4BF7hWooxsJpFXYBYJ8HAfU6R9nGL84f1TBFR/IDIJWLYZ5uD1WFmTQO3iKlLL2U52fsR5fI4MN4WdQFxqDZTvW3w1/SFCRhtfDGOJoEzXwwQtfe2LicQB5UsF+GU8DZdMGH5k4YFX0T4BF6j6zR8toWblcjlzraW1X+6Z4QSq7z/VP/N3noJt/wLCECkisUPRw0rTwpXNC+Y8ubOiXISzqUvu7/df6bfW2nj9vmuH7e4ucy026JBguHsMOnsAlRqwM4GeSsua6DX+xKT2KPIXNtOaSt0swZrS1E2+tx9IFro3txYMIUSTGctO72wqFTYtOdIqToTaS9wfh8VdfdxTulMb0HueBI88yUJVbsoBnMreEG2lz3AE++qtB4tlJUhRvOdrUFhbQsFDW7PAaT/MDWeGnq0I27vU/37KBq0bNBaci+rcpOZNMLIp1sQ6heNk5WiDaPNdbuUejZdJb/IgvoN9vNJ9fs44ZCLUM7rK3VNTxxwgF4BWn4xeBtOAdyjHA+7VZGtp/flt/Uk7kXzjWbl4tSWHPcD/Eqdc/rB4OVSkPy7Xi9enmai9/XbiZ1rud0I3xLxqXxefxIfk6i3eSCKxeTFaOHRi5YbkfQaXRpw5acCAIab88vrSDeXL8OKOA7SDSq9G9oWh1Mv3NKmv6Dtcy/OPpHHs75/gGHkj7Bgxc/ZlFUMRwr3tbPI39B6GPim3ZR/3m5mu9Wq3eDnvxKvliyvNpaKjyEEET5ZsubRnORT4GQm4W9ERd3Cxgmvb0Hdq/G0vaQNFQBsFy7gEX3VQFI5wo7nnfd6akDpx5PkgQxeM4JWkieVd3LT+azN/Ug1JyF992QOQ7JXWwS+vmSoJ2pTxKIZA8urL3hkQjHEUD8qi7aakjlokEhk9Ps7tOZ/ZU6Zano8if1EKwrMCBE9ChJE3I5GuM9WmpI8aJ6HlidJwCoyBRiJq41tSelaelAixsXpemt0IVMCV1kPWOuXd8M7zBlQRP/kyGP3l/eXh4ePkT+v+U1EG16TSNf36EuqNShxaqcS2rFSIjAumow0L0SQwi6q/fgNKYj38GLDMoJEcRHHW6kRj20Z2C5eGPUXfETWs86wxn43rAs1eV6CPf1c0RcAMjkZefpC4axXJYzxDDFlkdij5QNw7QC02K//G7YX6UwNYglJBcvVf8lVjvRHo+FXXg7ojZVu3E/Bl41en9oHI3fHjoPFXGrRG6pxdGnW7lAfqViO0Kx/KXgNPSXrp72mz+aPnYLXa/hlNIk+60dOHyKfVG0/8nTs6KRNqx273CwCUS/gLJS8MpFCBuRLPSju6OGKzILde/ihN1xP9rrpJA77FwNtGlYcao01y/g1ItLDPF74/8LZxCYJJB61LHZ3dX35PRfTcGTKz0TtLDI/ogxVRYH/gFdDnqNPtxyAvY3cIXiPu0vMOOABKmS9vafh8nwSKFQb2tatgh9vDLQXQsWswV6x0dC6eEkzD8QgMx0vFBjo7Vu+IddjSAQ5DV+y8ANS5I1KIOHEL1kp05yc4gfdFq8hPyH9VdhP9vlLjUU68BlSSF7Dr2S8SpKgJdfzpHyKBDoJfvXiROCzhwWIHO1mxc3SKNrU/RP/C78C06HKqks3sZT0AnrIs5t+h3MWSCpVOuNYUM4YyFrJ/FEysb6ZQehIKY8u7d/zu6zKDrpK854QLX3yQgFvVUSQKazO4Fl/t81FgYrRFoYncfabhRWZ7/HZRYoKkRikGV3btwtSO7+iBYUT9mEnqoqpec3J3gJ2hD8k/lrfWodiQOu8xKLUGXxYm6p3NCpfYy62EEU+YSlGsPIJhk6e6nFpW/BUXO6oU7yKXAzuvpxQsm2dQHYbCiaOJ2ByKYl1nKRHRZLCa5HU2CHLQDkFXXX1pTVkWVE02lNAFbaseXXHSg4FK8ngLzcKdK/uKd3Qljzqx/JS5zOWv+sQuOwgBVrvqQfI8JJOWQ2l086+CIBWBefEXacJ/xoeE/oXUZWOkYwh/LGPJM1gZ/+y8YzBOKggZ9RpBnOFm2M2Z68dkBA2mkwx6WphX2C4bt/F2yqiVUHC6zFyAIMtgh/tlYu/zuDMNy7L97ft8ILLhe6MpPCCSmYis5/fnWdGwfjmss5jtxRx0UoNsXWoEOARY7+KWcfvNzv99/NvuNwHevsW8waZ/g5QAacW+Tv0l7sS87ehaAmwqSevWm7X+QOLax6E9Mpn3NtkG2/x2xPIFK3JOcK4UW1wd/scsikWB7N+5qgW0g16N74RSTiw+dJRhz4++UpzfFQqFQvKnVB8FNkP+YVAJitqZwdF9yCSwWo6itj0zh/lnajvBiN0491v9NmWQoSrfeHHEn2yv17yHfCh6EdDUrV/+VmFIBXrU+rgwfHx86lXF99ANJ3P8AzQY0ygb/GcgAAAAASUVORK5CYII=" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">PostgreSQL</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-16 w-16 min-h-16 h-16 mr-4">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEVRK9T///9EEtLMxvBOJtPTy/NHGNPQyPLc1PZIG9JKINPk3vhNJNRtUdr6+f6SfePKwfGsnemdi+VABdHq5vqFbeB3W936+P6ejeXVzvTf2PfOxfKlleeMeOGSfuKwo+piQdiyperx7vu8se3HvfBkRdjCt+6Bad5cONcvAM9/Zd95X93t6vq3q+uHcuBYM9ZxVNxoS9lklP5JAAAD9ElEQVR4nO3bbXuiOBiG4cAgGmRtK3asWq21r9Natv7/P7fYliRIANsZO5i9zo8aTG6fCCEHCgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/In0lqmkW541kxcE2hQMbSXvPvx3wrPvjQ2dY3UecTt4bda+M7yG6/lFnFmcHnnRq2xiuDxPR73jKYBlUNYsu8kaTUL8aTr1acvsN1jcxTP3DJOwafczCqmbRMG/TMdrIXu2QB59L2PuGhF5a9VO0JwyPL+FKVMxTZ2ro3VTMU2dq6Hk/408kPMYaen17Eb+UsIXn0q1La8SmWbq6PS273V4P57Pii7q/XvGN2dWBroe7CT3rRbGpht1flkXKW8udNU1yN86PSZNvWdOUE06SvRPqGnb2nWHBP4P8mJO6VeKfU07ozS09O5FQrcDGeyeUx5VwoYp4X56nTtTw/FRFLF8U3ajhnUo4KhXRiRoOk2sV8Wx3wE4kvJDRSEXcvSg6MUsvZfSgEvZ25qkTNbyUwr9VERfFFYYTCc9kdnOollTjoDBPXUkopL4o3hbmqTMJRaLvh57MAThxpnlLGDyqhCNz0O7UUISXKuKVMeqmhN1fSYl1t+DvJxSJvije6ZNNU8LxqGT1ZIvYgoTBRiWc6pPNV3YxzluaUPgvaox6m/8re22tTSiSlZp7avvUrYTxsxrkLJ+nbiUUiV68nX+MwrGEQqpRrF1NqBdv1+8XRdcSmou317dxNl0t+ul812Jp668tCY3F2/QtUeOqLYlKrP21JaG5eLvYRnJoXape7+evj7c7Gg4mjH+qIp76Lt09aeGNijiXLtYwq+I6f2ctAicTRqkq4ovvZEIR6m3+Z3/hYsLgUe28Tf25LeFxn2kyUk1Nb/hgS3jsNTRrtErdTBjr4UxWloRHP0uzIpWfFWl9DYM4LmzX1ycUQb8uYQtrGPjLh3TjGzduDQmjp+OqYbycZT+nce9Zj7Ihobl4q01ouXuy3kAdNmFwl58u5ipNU8Lg37VXYJ+l0/TEYvH4zQl9tZ092OQ/xqaEQs69gk88m5ithUobGQdNGOuFpn7KsjGhCGd71LBC+aGOgyY0f1LrfCO0OWGwHJuDbnXCe931YP+EIrwwB/2pWfrNCeWV7lo9rbpHQhGZQdpcw2Cpux7mn75Pwvh1oI9scw2NNVhPDVP/36I6oQiN6pv/t5AN/7eoT7g4wBXf/4g40w9ahDf9d6NhXYfdfu7G/M/Mfb/W6LX0NG6wmeZvpvZHyn9PuHmZdO6fpNFxtlB9V/l/GbPRTjPjdavaz/ojicofH2YO9NkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwN/wF+9Fe7Z2SFKgAAAABJRU5ErkJggg==" alt="" />
                                        </div>
                                        <div className="font-medium text-rose-800">Dotnet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-300 my-10"></div>
                    <div className="flex">
                        <div className="w-1/4">Experience</div>
                        <div className="w-3/4 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-200 mr-6 overflow-hidden p-3">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-rose-800">Ookbee Career project</div>
                                                <div className="font-light text-rose-600">Web application</div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
                                    </div>
                                    <div className="border-t border-slate-300 px-6 py-4 text-right text-rose-600">
                                        <a href="">View this project</a>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-200 mr-6 overflow-hidden p-3">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-rose-800">Ookbee Career project</div>
                                                <div className="font-light text-rose-600">Web application</div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
                                    </div>
                                    <div className="border-t border-slate-300 px-6 py-4 text-right text-rose-600">
                                        <a href="">View this project</a>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-200 mr-6 overflow-hidden p-3">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-rose-800">Ookbee Career project</div>
                                                <div className="font-light text-rose-600">Web application</div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
                                    </div>
                                    <div className="border-t border-slate-300 px-6 py-4 text-right text-rose-600">
                                        <a href="">View this project</a>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-200 mr-6 overflow-hidden p-3">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-rose-800">Ookbee Career project</div>
                                                <div className="font-light text-rose-600">Web application</div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
                                    </div>
                                    <div className="border-t border-slate-300 px-6 py-4 text-right text-rose-600">
                                        <a href="">View this project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-300 my-10"></div>
                    <div className="flex">
                        <div className="w-1/4">Education</div>
                        <div className="w-3/4 space-y-6">
                            <div className="grid gap-6">
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex justify-between items-center p-6">
                                        <div className="flex items-center">
                                            <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden p-4 flex-none">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div className="grow px-6">
                                                <div className="font-medium text-rose-800 text-2xl">Ookbee Career project</div>
                                                <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos cum error placeat odio, ratione officia debitis quod possimus est a iusto exercitationem at ea ipsam fugiat ab voluptas deleniti.</div>
                                            </div>
                                        </div>
                                        <div className="flex-none">2000-2000</div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex justify-between items-center p-6">
                                        <div className="flex items-center">
                                            <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden p-4 flex-none">
                                                <img src="https://writer.ookbee.com/static/image/ookbee-logo.ico" alt="" />
                                            </div>
                                            <div className="grow px-6">
                                                <div className="font-medium text-rose-800 text-2xl">Ookbee Career project</div>
                                                <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos cum error placeat odio, ratione officia debitis quod possimus est a iusto exercitationem at ea ipsam fugiat ab voluptas deleniti.</div>
                                            </div>
                                        </div>
                                        <div className="flex-none">2000-2000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-300 my-10"></div>
                    <div className="flex">
                        <div className="w-1/4">Certificate</div>
                        <div className="w-3/4 space-y-6">
                            <div className="grid gap-6">
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-[300px] bg-slate-200 mr-6 overflow-hidden">
                                            <img className="w-full" src="https://mpics.mgronline.com/pics/Images/563000010808801.JPEG" alt="" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-rose-800 text-2xl">Ookbee Career project</div>
                                            <div className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita, nulla obcaecati temporibus tempora blanditiis amet minus dolores vero assumenda quam excepturi illum quas dolorem deleniti velit iste corrupti enim nisi ut corporis hic repudiandae. Esse aut sequi iusto amet illum dolor debitis alias, sed deserunt provident voluptate, quam sit!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-slate-300 rounded-xl">
                                    <div className="flex items-center p-6">
                                        <div className="min-w-[300px] bg-slate-200 mr-6 overflow-hidden">
                                            <img className="w-full" src="https://mpics.mgronline.com/pics/Images/563000010808801.JPEG" alt="" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-rose-800 text-2xl">Ookbee Career project</div>
                                            <div className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita, nulla obcaecati temporibus tempora blanditiis amet minus dolores vero assumenda quam excepturi illum quas dolorem deleniti velit iste corrupti enim nisi ut corporis hic repudiandae. Esse aut sequi iusto amet illum dolor debitis alias, sed deserunt provident voluptate, quam sit!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
