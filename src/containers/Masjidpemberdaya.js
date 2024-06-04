/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Masjidpemberdaya1 from "@img/masjidpemberdaya/Masjidpemberdaya.png";

const Masjidpemberdaya = () => {
    return (
        <>
            <div className="mt-[6rem] py-[6rem] bg-gray-400 w-full grid grid-cols-2 gap-6 items-center justify-center">
                <div className="flex flex-col items-center">
                    <img src={Masjidpemberdaya1} alt="Placeholder Image" className="w-4/5 h-48 rounded-md object-fill mx-auto border mb-6" />
                    <div>
                    <a href="#Link" class="w-300px px-40 py-4 bg-green-600 rounded-lg text-white font-bold text-lg text-center">Pelajari Selengkapnya</a>
                    </div>
                </div>

                <div className="w-4/5 h-48 rounded-md object-fill flex flex-col justify-center items-start">
                    <h1 className="font-extrabold text-4xl text-left flex-initial mb-6">KOLABORASI MASJID<br />PEMBERDAYA</h1>
                    <p className="text-left">KMP adalah himpunan masjid-masjid yang bergabung atas dasar visi yang sama dalam mewujudkan peran masjid dalam mengentaskan kemiskinan. KMP adalah entitas berbadan hukum perkumpulan yang beranggotakan para perwakilan pengurus masjid pemberdaya di Indonesia</p>
                </div>


            </div>

            <div className="flex z-10 flex-col self-center px-20 py-11 mt-0 w-full text-center text-black bg-white rounded-3xl shadow-sm max-w-[1215px] max-md:px-5 max-md:max-w-full">
                <div className="self-center text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    PROGRAM MASJID PEMBERDAYA
                </div>
                <div className="self-end mt-6 text-xl leading-8 max-md:max-w-full">
                    Merupakan Pengembangan Kewirausahaan Terpadu Menggunakan Kurikulum 7 Top
                    Berbasis Masjid{" "}
                </div>
            </div>
        </>
    );
}

export default Masjidpemberdaya ;
