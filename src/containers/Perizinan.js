import React from "react";
import Top from "@img/7top-rb.webp";
import BPOM from "@img/7 top/perizinan/BPOM.png";
import Halal from "@img/7 top/perizinan/Halal.png";
import HKI from "@img/7 top/perizinan/HKI.png";
import IUMK from "@img/7 top/perizinan/IUMK.png";
import NIB from "@img/7 top/perizinan/NIB.png";
import NPWP from "@img/7 top/perizinan/NPWP.png";
import PIRT from "@img/7 top/perizinan/PIRT.png";
import SIUP from "@img/7 top/perizinan/SIUP.png";


const Perizinan = () => {
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
                            Perizinan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan dijelaskan proses perizinan sesuai kebutuhannya.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Perizinan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE Indonesia, usaha sobat akan mendapatkan bimbingan dalam mengelola perizinan usaha oleh Mentor OK OCE Indonesia. 
                    Fasilitas tersebut, dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

            <div>
                <h1 class="text-center text-2xl font-bold text-okoce-blue pt-20">Izin Administrasi</h1>
            </div>

            <section class="flex justify-center items-center pb-10 pt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://ereg.pajak.go.id/daftar">
                            <img class="h-50 w-72 object-cover" srcSet={NPWP} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">NPWP Pribadi</p>
                        </div>
                    </div>
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://oss.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={NIB} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">NIB</p>
                            <p class="text-center font-bold text-red-500">Nomor Induk Berusaha</p>
                        </div>
                    </div>
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://oss.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={IUMK} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">IUMK</p>
                            <p class="text-center font-bold text-red-500">Izin Usaha Mikro Kecil</p>
                        </div>
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <a href="https://oss.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={SIUP} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">SIUP</p>
                            <p class="text-center font-bold text-red-500">Surat Izin Usaha Perdagangan</p>
                        </div>
                    </div>
                    <div class="bg-white hover:scale-105 duration-300">
                        <a href="http://e-hakcipta.dgip.go.id">
                            <img class="h-50 w-72 object-cover" srcSet={HKI} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">HKI Merek</p>
                        </div>
                    </div>
                </div>
            </section>    

            <div>
                <h1 class="text-center text-2xl font-bold text-okoce-blue pt-10">Izin Edar</h1>
            </div>

            <section class="flex justify-center items-center pb-20 pt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://oss.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={PIRT} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">PIRT</p>
                            <p class="text-center font-bold text-red-500">Perizinan Industri Rumah Tangga</p>
                        </div>
                    </div>
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://ptsp.halal.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={Halal} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">Sertifikasi Halal</p>
                        </div>
                    </div>
                    <div class=" hover:scale-105 duration-300">
                        <a href="https://e-reg.pom.go.id/">
                            <img class="h-50 w-72 object-cover" srcSet={BPOM} alt=""/>
                        </a>
                        <div class="px-4 py-3 w-72">
                            <p class="text-center font-bold text-red-500">BPOM</p>
                            <p class="text-center font-bold text-red-500">Badan Pengawasan Obat dan Makanan</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Perizinan;