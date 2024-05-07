import React from "react";
import nib from "../asset/img/nib.jpg"



const Detailevent= () => {
    return (
        <>

<div className="flex flex-col items-center pt-16 bg-zinc-50">
      <img src={nib} loading="lazy" className="max-w-full shadow-lg aspect-square w-[600px]"/>
      <div className="flex gap-5 px-5 mt-40 w-full max-w-[1100px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl font-bold leading-10 text-black">
          Publik
        </div>
        <div className="flex flex-col flex-1 text-xl leading-6">
          <div className="text-black">Rp. 0 (Free)</div>
          <div className="mt-3.5 text-right text-sky-700">Get 5 Points</div>
        </div>
      </div>
      <div className="flex gap-5 px-5 w-full max-w-[1100px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-3xl leading-10 text-black max-md:max-w-full">
          Kenali Karakter Jadi Pengusaha Sukses Serta Raih Peluang Usaha Pasar
          OK OCE
        </div>
        <div className="justify-center self-end px-9 py-3.5 mt-16 text-base font-medium leading-5 text-center text-white bg-red-600 rounded-xl max-md:px-5 max-md:mt-10">
          BELI SEKARANG
        </div>
      </div>
      <div className="self-stretch mt-14 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="mt-7 text-2xl leading-9 text-black w-[1100px] max-md:max-w-full">
        <span className="font-bold">
          BERJUALAN TAPI DAPAT UANG TAMBAHAN DARI KIRIM BARANG
        </span>
        <br />
        <br />
        Jangan lewatkan peluang emas dapat pelatihan secara geratis yang bisa
        jadi peluang usaha. Hadiri acara pelatihannya dan wujudkan impian anda
        menjadi pengusaha. Bersama OK OCE Xpress
        <br />
        <br />
        Kapan lagi bisa dapat keuntungan berlipat.
        <br />
        Segera daftarkan diri Anda dan jadilah salah satu dari 25 peserta yang
        akan memperoleh pelatihan?
        <br />
        <br />
        Bebas Biaya Pendaftar
      </div>
      <div className="self-stretch mt-16 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="px-5 mt-6 w-full max-w-[1000px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl leading-6 max-md:mt-10">
              <div className="font-semibold text-sky-700">Date</div>
              <div className="mt-9 text-black">25 Jan, 2024</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl leading-6 whitespace-nowrap max-md:mt-10">
              <div className="font-semibold text-sky-700">Time</div>
              <div className="mt-9 text-black">11:00-15:00</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-xl max-md:mt-10">
              <div className="flex flex-col">
                <div className="font-semibold text-sky-700 leading-[120%]">
                  Place
                </div>
                <div className="mt-2.5 leading-6 text-black">
                  Kantor OK OCE Kemanusiaan Jl. Tebet Barat Dalam VII No. 3,
                  Jakarta Selatan
                </div>
              </div>
              <div className="flex flex-col self-start leading-[120%]">
                <div className="font-semibold text-sky-700">Quota</div>
                <div className="mt-8 text-black">25 Seat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-20 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="mt-6 text-xl font-semibold leading-6 text-sky-700">
        Naasumber
      </div>
      <div className="mt-8 text-xl leading-6 text-black max-md:max-w-full">
        Wiendy Putranti (Business Development Manager indivaragroup)
      </div>
      <div className="mt-2.5 text-xl leading-6 text-black">
        Asri Novita (DNA Pengusaha)
      </div>
    </div>

        </>
    );
}

export default Detailevent;