import React from "react";
import Top from "@img/7top-rb.webp";
import Usaha from "@img/7 top/pendampingan/inkubasi.png";
import Chat from "@img/7 top/pendampingan/chat.png";
import Kolaborator from "@img/7 top/pendampingan/kolaborator.png";
import Az from "@img/7 top/pendampingan/az-indonesia.png";
import Ck from "@img/7 top/pendampingan/cetakkemasan.png";
import Edu from "@img/7 top/pendampingan/eduversal.png";
import Ekles from "@img/7 top/pendampingan/ekles-2.png";
import Indivara from "@img/7 top/pendampingan/indivara-2.png";
import Inotek from "@img/7 top/pendampingan/inotek.png";
import Jnj from "@img/7 top/pendampingan/jnj-group-2.png";
import Wgs from "@img/7 top/pendampingan/wgshub.png";
import Kk from "@img/7 top/pendampingan/kk-indonesia.png";
import Smeshub from "@img/7 top/pendampingan/smeshub.png";
import Pajak from "@img/7 top/pendampingan/pajakonline.png";
import Travel from "@img/7 top/pendampingan/travelbook.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";


const Pendampingan = () => {
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
                            Pendampingan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program Mentoring.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center pt-20 bg-white max-md:px-5">
            <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Pendampingan
                </div>
                <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha Sobat akan mendapatkan fasilitas pendampingan Oleh Mentor OK OCE dalam kegiatan pemasaran, permodalan, laporan keuangan,
                    konsultasi ide-ide kreatif dan inovatif, perubahan mindset kewirausahaan, mencari penyelesaian permasalahan usaha, hingga pembentukan karakter
                    untuk menjadi UMKM Naik Kelas. Fasilitas tersebut dapat diakses melalui sistem OK OCE pada kolom Inkubasi Usaha, Chat Mentor, maupun Kolaborator.
                </div>
            </div>
        </div>

        <section class="flex justify-center items-center pb-20 pt-10">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                <div class="bg-white hover:scale-105 duration-300">
                    <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                        <div class="pr-0 md:pr-10">
                            <img class="w-56" src={Usaha} alt=""/>
                            <p class="text-center font-bold text-red-500">Inkubasi Usaha</p>
                        </div>
                    </div>        
                </div>
                <div class="bg-white hover:scale-105 duration-300">
                    <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                        <div class="pr-0 md:pr-10">
                            <img class="w-56" src={Chat} alt=""/>
                            <p class="text-center font-bold text-red-500">Chat Mentor</p>
                        </div>
                    </div>        
                </div>
                <div class="bg-white hover:scale-105 duration-300">
                    <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                        <div class="pr-0 md:pr-10">
                            <img class="w-56" src={Kolaborator} alt=""/>
                            <p class="text-center font-bold text-red-500">Kolaborator</p>
                        </div>
                    </div>        
                </div>
            </div>
        </section>

        <div className="flex flex-col items-center pt-20 bg-white max-md:px-5">
            <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Para Kolaborator
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 pt-10 pb-20 gap-6 justify-items-center mobile:grid-cols-1 mobile:px-10 md:grid-cols-4 lg:p-10">
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Az} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Ck} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Edu} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Ekles} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Indivara} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Inotek} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Jnj} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Wgs} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Kk} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Smeshub} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Pajak} alt=""/>
            </div>
            <div class="bg-white hover:scale-105 duration-300">
                <img class="h-auto max-w-full" src={Travel} alt=""/>
            </div>
        </div>
        </>
    );
}

export default Pendampingan;