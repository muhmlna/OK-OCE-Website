import React from "react";
import Top from "@img/7top-rb.webp";
import Materi from "@img/HeaderKerja.png";

const Pelatihan = () => {
    return (
        <>
            <div className="pl-40 pt-60 bg-white max-md:pl-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={Top}
                            alt=""
                            className="grow shrink-0 max-w-full aspect-[0.79] w-[271px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch p-8 my-auto w-full text-white bg-sky-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
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

            <div id="pelatihan-body" class="w-full pt-20 font-jost flex justify-center bg-white">
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

            <div class="flex items-center justify-center min-h-screen container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="rounded-xl shadow-lg">
                        <div class="p-5 flex flex-col">
                            <div class="rounded-xl overflow-hidden">
                                <img src="" alt="" />
                            </div>
                            <h5 class="text-2xl md:text-3xl font-medium mt-3">Kolaborasi UKM Strategi Marketing Digital</h5>
                            <p class="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Daftar</a>
                        </div>
                    </div>
                </div>
            </div>
            
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
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
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
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
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
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
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
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
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
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
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