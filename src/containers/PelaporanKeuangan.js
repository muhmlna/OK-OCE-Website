import React from "react";
import Top from "@img/7top-rb.webp";
import Wtp from "@img/wtp-e1685866203725 1.png"
import Image1 from "@img/7 top/pelaporankeuangan/image 8.png"
import Laba from "@img/7 top/pelaporankeuangan/laba.png"
import Neraca from "@img/7 top/pelaporankeuangan/neraca.png"
import Kas from "@img/7 top/pelaporankeuangan/arus kas.png"
import Catatan from "@img/7 top/pelaporankeuangan/keuangan.png"
import Pajak from "@img/7 top/pelaporankeuangan/pajak.png"



const PelaporanKeuangan = () => {
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
                            Pelaporan Keuangan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan diajarkan dan didampingi cara membuat laporan keuangan untuk menghitung untung rugi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="flex justify-center items-center pb-20 pt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-10">
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-auto max-h-[10rem] items-center" src={Wtp} alt=""/>
                                <p class="text-center font-bold text-500">-</p>
                            </div>
                        </div>        
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-auto max-h-[10rem]" src={Image1} alt=""/>
                                <p class="text-center font-bold text-500">-</p>
                            </div>
                        </div>        
                    </div>
                </div>
            </section>

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

            <section class="flex justify-center items-center pb-20 pt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-20 center" src={Laba} alt=""/>
                                <p class="text-center font-bold text-500">Laporan Laba Rugi</p>
                            </div>
                        </div>        
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-20 center" src={Neraca} alt=""/>
                                <p class="text-center font-bold text-500">Laporan Neraca</p>
                            </div>
                        </div>        
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-20 center" src={Kas} alt=""/>
                                <p class="text-center font-bold text-500">Laporan Arus Kas</p>
                            </div>
                        </div>        
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-20 center" src={Catatan} alt=""/>
                                <p class="text-center font-bold text-500">Catatan Laporan Keuangan</p>
                            </div>
                        </div>        
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <div class="flex flex-col items-center md:flex-row py-5 justify-center">
                            <div class="pr-0 md:pr-10">
                                <img class="h-20 center" src={Pajak} alt=""/>
                                <p class="text-center font-bold text-500">Laporan Pajak</p>
                            </div>
                        </div>        
                    </div>
                </div>
            </section>
        </>
    );
}

export default PelaporanKeuangan;