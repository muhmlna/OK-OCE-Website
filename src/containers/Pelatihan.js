import React from "react";
import Materi from "@img/HeaderKerja.png";
import Latih from "@img/pasarok.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";

const Pelatihan = () => {
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
                                Pelatihan
                                </div>
                                <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan digabungkan ke kelompok inkubasi melalui komunitas penggerak.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pelatihan-body" class="w-full pt-20 flex justify-center bg-white">
                <div class="w-full lg:w-3/4">
                    <div>
                        <h1 class="text-center text-4xl font-bold text-okoce-blue">Agenda Pelatihan</h1>
                    </div>

                    <div class="py-5 px-3 w-full mx-auto">
                        <p class="text-lg text-center text-slate-700">
                            Informasi penting seputar UMKM, bisa Sobat dapatkan disini juga lho! Yuk cari tahu lebih lanjut
                            mengenai informasi yang Sobat butuhkan disini!
                        </p>
                    </div>
                </div>
            </div>

            <section class="flex justify-center items-center pb-20">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-80 w-72 object-cover" srcSet={Latih} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Oktober 2024
                            </span>
                            <p class="text-lg font-bold block capitalize">Kolaborasi UMKM Strategi Marketing Digital</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-80 w-72 object-cover" srcSet={Latih} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Mei 2024
                            </span>
                            <p class="text-lg font-bold block capitalize">Pelatihan Master Mentor Untuk Penggerak OK OCE</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-80 w-72 object-cover" srcSet={Latih} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Juli 2024
                            </span>
                            <p class="text-lg font-bold block capitalize">Optimasi Bisnis Agar Maksimal Penjualannya</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <div id="pelatihan-body" class="w-full pt-20 pb-10 font-poppins flex justify-center bg-white">
                <div class="w-full lg:w-3/4">
                    <div>
                        <h1 class="text-center text-4xl font-bold text-okoce-blue">Materi Pelatihan</h1>
                    </div>

                    <div class="py-5 px-3 w-full mx-auto">
                        <p class="text-lg text-center text-slate-700">
                            Informasi penting seputar UMKM, bisa Sobat dapatkan disini juga lho! Yuk cari tahu lebih lanjut
                            mengenai informasi yang Sobat butuhkan disini!
                        </p>
                    </div>
                </div>
            </div>

            <section class="flex justify-center items-center pb-20">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-50 w-72 object-cover"srcSet={Materi} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                Pelatihan
                            </p>
                            <p class="text-lg font-bold block text-center capitalize">Orientasi Keanggotaan pada OK OCE</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-50 w-72 object-cover" srcSet={Materi} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                Pelatihan
                            </p>
                            <p class="text-lg font-bold block text-center capitalize">Business Model Canvas</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-50 w-72 object-cover" srcSet={Materi} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                Pelatihan
                            </p>
                            <p class="text-lg font-bold block text-center capitalize">Perizinan pada UMKM</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-50 w-72 object-cover" srcSet={Materi} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                Pelatihan
                            </p>
                            <p class="text-lg font-bold block text-center capitalize">Pengenalan Dasar Pemasaran dan Konsepnya pada UMKM</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img class="h-50 w-72 object-cover" srcSet={Materi} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                Pelatihan
                            </p>
                            <p class="text-lg font-bold block text-center capitalize">Strategi Mendapatkan Modal Usaha</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pelatihan;