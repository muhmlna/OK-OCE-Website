import React from "react";
import Akuntansiku from "@img/7 top/pelaporankeuangan/akuntansiku.png";
import Wtp from "@img/7 top/pelaporankeuangan/wtp.png";
import Laba from "@img/7 top/pelaporankeuangan/labarugi.png";
import Neraca from "@img/7 top/pelaporankeuangan/neraca.png";
import Kas from "@img/7 top/pelaporankeuangan/arus kas.png";
import Keuangan from "@img/7 top/pelaporankeuangan/keuangan.png";
import Pajak from "@img/7 top/pelaporankeuangan/pajak.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";




const PelaporanKeuangan = () => {
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
                                Pelaporan Keuangan
                                </div>
                                <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan diajarkan dan didampingi cara membuat laporan keuangan untuk menghitung untung rugi.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
                <div className="w-full max-w-[1115px] max-md:max-w-full">
                    <div className="flex max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
                            <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                                <a href="https://drive.google.com/file/d/18lcHzSbdLiIRbU9GRHWJeG9UWr2qd6iF/view">
                                    <div class="hover:scale-105 duration-300">
                                        <img loading="lazy" src={Wtp} className="h-50 w-60"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                            <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                                &quot;Wajar Tanpa Pengecualian (WTP) atau Unqualified Opinion artinya Laporan Keuangan (LK) 
                                telah disajikan secara wajar dalam semua hal yang material, posisi keuangan (neraca), hasil 
                                usaha atau Laporan Realisasi Anggaran (LRA), Laporan Arus Kas, sesuai dengan prinsip akuntansi yg berlaku umum.&quot;
                                <br />
                                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                                Sobat bisa mengunjungi:
                                <a href="https://drive.google.com/file/d/18lcHzSbdLiIRbU9GRHWJeG9UWr2qd6iF/view" className="underline text-blue-500" target="_blank">WTP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
                <div className="w-full max-w-[1115px] max-md:max-w-full">
                    <div className="flex max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
                            <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                                <a href="https://akuntansiku.co.id/">
                                    <div class="hover:scale-105 duration-300">
                                        <img loading="lazy" src={Akuntansiku} className="h-50 w-60"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                            <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                                &quot;Akuntasiku adalah aplikasi pembukuan usaha yang didesain secara khusus agar para 
                                pebisnis dapat dengan mudah mengelola laporan keuangan dan memanage bisnisnya.&quot;
                                <br />
                                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                                Sobat bisa mengunjungi:
                                <a href="https://akuntansiku.co.id/" className="underline text-blue-500" target="_blank">https://akuntansiku.co.id/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Pelaporan Keuangan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal pelaporan keuangan Tujuan dari pelaporan keuangan 
                    ini adalah untuk memberikan pemilik usaha gambaran yang jelas tentang bagaimana usaha tersebut mengelola dan menghasilkan uang. Fasilitas 
                    tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

            <section class="pb-20">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <a href="https://example.com/link1" class="text-center">
                            <div class="hover:scale-105 duration-300">
                                <img src={Laba} alt="" class="mx-auto mb-4 w-32 h-32 object-cover"/>
                                <p class="text-lg font-bold text-500">Laporan Laba Rugi</p>
                            </div>
                        </a>
                        <a href="https://example.com/link1" class="text-center">
                            <div class="hover:scale-105 duration-300">
                                <img src={Neraca} alt="" class="mx-auto mb-4 w-32 h-32 object-cover"/>
                                <p class="text-lg font-bold text-500">Laporan Neraca</p>
                            </div>
                        </a>
                        <a href="https://example.com/link1" class="text-center">
                            <div class="hover:scale-105 duration-300">
                                <img src={Kas} alt="" class="mx-auto mb-4 w-32 h-32 object-cover"/>
                                <p class="text-lg font-bold text-500">Laporan Arus Kas</p>
                            </div>
                        </a>
                        <a href="https://example.com/link1" class="text-center">
                            <div class="hover:scale-105 duration-300">
                                <img src={Keuangan} alt="" class="mx-auto mb-4 w-32 h-32 object-cover"/>
                                <p class="text-lg font-bold text-500">Catatan Laporan Keuangan</p>
                            </div>
                        </a>
                        <a href="https://example.com/link1" class="text-center">
                            <div class="hover:scale-105 duration-300">
                                <img src={Pajak} alt="" class="mx-auto mb-4 w-32 h-32 object-cover"/>
                                <p class="text-lg font-bold text-500">Laporan Pajak</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PelaporanKeuangan;