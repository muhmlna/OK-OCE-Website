import React from "react";
import Materi from "@img/HeaderKerja.png";
import Kopi from "@img/7 top/pemasaran/kopi.png";
import Donat from "@img/7 top/pemasaran/donat.png";
import Kuker from "@img/7 top/pemasaran/kuker.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";



const Pemasaran = () => {
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
                                Pemasaran
                                </div>
                                <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan mengikuti proses kurasi dan akan diberikan akses pemasaran dan penjualan yang lebih luas, baik online maupun offline.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Pemasaran
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal pemasaran yang akan sangat berguna untuk 
                    anda mengembangkan popularitas dan omzet bisnis. Fasilitas tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

            <section class="flex justify-center items-center pb-20 pt-5">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://www.youtube.com/watch?v=GZqmMOOOcak">
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Kopi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Kelas Jadi Barista! Belajar jadi Berista bikin kopi enak</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://www.youtube.com/watch?v=6cOFzd6LorA">
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Donat}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                OK OCE Indonesia
                            </span>
                            <p class="text-lg font-bold block capitalize">Belajar Bikin Donat Bersama OK OCE Indonesia</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://www.youtube.com/watch?v=BcTqflOQb8Y">
                            <img
                                class="h-50 w-72 object-cover"
                                srcSet={Kuker}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                OK OCE Indonesia
                            </span>
                            <p class="text-lg font-bold block capitalize">Sambut Hari Raya Idul Fitri, OK OCE GAN Gelar Pelatihan Kue Kering</p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <h1 class="text-center text-4xl font-bold text-okoce-blue pt-20">Katalog Produk</h1>
            </div>

            <section class="flex justify-center items-center pb-20 pt-10">
                <div class="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-10">
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Kembang Loyang</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Panir Bawang</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Nasi Kotak</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Kopi Blend EMOTIKOPI</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block text-center truncate capitalize">Kopi Blend EMOTIKOPI</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </p>
                            <p class="text-lg font-bold block truncate capitalize">Nasi Kotak</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm text-center">
                                OK OCE Indonesia
                            </span>
                            <p class="text-lg font-bold block truncate capitalize">Panir Bawang</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-md hover:scale-105 duration-300">
                        <a href="https://okoce.net/">
                            <img
                                class="h-72 w-72 object-cover"
                                srcSet={Materi}
                                alt=""
                            />
                        </a>
                        <div class="px-4 py-3 w-72">
                            <span class="text-gray-400 uppercase text-sm">
                                OK OCE Indonesia
                            </span>
                            <p class="text-lg font-bold block text-center truncate capitalize">Kembang Loyang</p>
                        </div>
                    </div>
                    
                </div>
            </section>

        </>
    );
}

export default Pemasaran;