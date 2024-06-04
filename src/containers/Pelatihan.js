import React from "react";
import Promo from "@img/promo.png";
import Materi from "@img/HeaderKerja.png";
import Top from "@img/7top-rb.webp";

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

            <section class="flex justify-center items-center pt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-80 w-72 object-cover"
                                srcSet={Promo}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Oktober 2023
                            </span>
                            <p class="text-lg font-bold block capitalize">Kolaborasi UMKM Strategi Marketing Digital</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-80 w-72 object-cover"
                                srcSet={Promo}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Mei 2024
                            </span>
                            <p class="text-lg font-bold block capitalize">Pelatihan Master Mentor untuk Penggeral OK OCE</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-80 w-72 object-cover"
                                srcSet={Promo}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                27-29 Juli 2024
                            </span>
                            <p class="text-lg font-bold block capitalize">Optimasi Bisnis agar Maksimal Penjualannya</p>
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