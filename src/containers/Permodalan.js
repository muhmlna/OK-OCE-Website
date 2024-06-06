import React from "react";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";


const Permodalan = () => {
    return (
        <>
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[677px] max-md:pl-5">
                <img
                    loading="lazy"
                    src={header}
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="relative mt-24 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <div className="flex relative flex-col grow justify-center p-2.5 w-full rounded-3xl shadow-sm bg-opacity-70 max-md:mt-10">
                                <img loading="lazy" src={a7} className="w-full aspect-[0.79]" />
                            </div>
                        </div>
                        <div className="flex flex-col ml-10 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex relative flex-col self-stretch p-8 my-auto w-full text-white bg-sky-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                                Permodalan
                                </div>
                                <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan didampingi untuk mendapatkan akses permodalan sesuai dengan kebutuhan usahanya.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 pb-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Permodalan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal permodalan yang berguna untuk menunjang kebutuhan bisnis sobat. 
                    Fasilitas tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

        </>
    );
}

export default Permodalan;