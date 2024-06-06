import React from "react";
import BPOM from "@img/7 top/perizinan/BPOM.png";
import Halal from "@img/7 top/perizinan/Halal.png";
import HKI from "@img/7 top/perizinan/HKI.png";
import IUMK from "@img/7 top/perizinan/IUMK.png";
import NIB from "@img/7 top/perizinan/NIB.png";
import NPWP from "@img/7 top/perizinan/NPWP.png";
import PIRT from "@img/7 top/perizinan/PIRT.png";
import SIUP from "@img/7 top/perizinan/SIUP.png";
import a7 from "@img/7 top/perizinan/7.png";
import header from "@img/7 top/perizinan/headerperizinan.png";

const Perizinan = () => {
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
                            Perizinan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan dijelaskan proses perizinan sesuai kebutuhannya.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div id="pelatihan-body" class="w-full pt-20 flex justify-center">
            <div class="w-full lg:w-3/4">
                <div>
                    <h1 class="text-center text-4xl font-bold text-okoce-blue">Perizinan</h1>
                </div>

                <div class="py-5 px-3 w-full mx-auto">
                    <p class="text-lg text-center text-slate-700">
                    Melalui OK OCE Indonesia, usaha sobat akan mendapatkan bimbingan
                    dalam mengelola perizinan usaha oleh Mentor OK OCE Indonesia.
                    Fasilitas tersebut, dapat diakses melalui sistem OK OCE Indonesia.
                    </p>
                </div>
            </div>
        </div>
    
        <div id="pelatihan-body" class="w-full pt-20 flex justify-center">
            <h1 class="text-center text-2xl font-bold text-okoce-blue pt-20">Izin Administrasi</h1>
        </div>

      {/* NPWP Pribadi */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://ereg.pajak.go.id/daftar">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={NPWP} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;Nomor Pokok Wajib Pajak (NPWP) adalah nomor yang diberikan kepada Wajib Pajak 
                sebagai sarana dalam administrasi perpajakan yang dipergunakan sebagai tanda pengenal 
                diri atau identitas Wajib Pajak dalam melaksanakan hak dan kewajibannya.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://ereg.pajak.go.id/daftar" className="underline text-blue-500" target="_blank">https://ereg.pajak.go.id/daftar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NPWP Pribadi End */}

      {/* NIB */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://oss.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={NIB} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;Nomor Induk Berusaha (NIB) merupakan identitas usaha yang wajib dimiliki 
                oleh setiap pelaku usaha. Setiap pelaku usaha wajib memiliki Nomor Induk Berusaha 
                segera buat Nomor Induk Berusaha (NIB) untuk memudahkan akses legalitas, memperluas 
                peluang bisnis, dan meningkatkan kredibilitas usaha Anda di mata pemerintah dan konsumen.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://oss.go.id/" className="underline text-blue-500" target="_blank">https://oss.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NIB END */}

      {/* IUMK */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://oss.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={IUMK} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;Izin Usaha Mikro Kecil (IUMK) adalah surat perizinan yang dikeluarkan negara untuk 
                usaha/pelaku usaha sebagai bentuk legalitas membuka dan menjalankan bisnis. Tujuan surat 
                Izin Usaha Mikro Kecil adalah guna menjamin perlindungan hukum bagi bisnis baru berdiri. 
                Tanpa surat IUMK, bisnis berdiri dengan ilegal, sehingga keamanan produknya tidak terjamin. 
                Selain itu apabila membutuhkan bantuan finansial, bisnis tanpa IUMK akan kesulitan mencairkan dana.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://oss.go.id/" className="underline text-blue-500" target="_blank">https://oss.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IUMK END */}

      {/* SIUP */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://oss.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={SIUP} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;SIUP adalah singkatan dari Surat Izin Usaha Perdagangan, sebuah izin yang diberikan oleh 
                pemerintah kepada para pelaku usaha yang ingin menjalankan kegiatan perdagangan, baik itu berupa 
                usaha dagang, industri, ataupun jasa. SIUP berfungsi sebagai legalitas dan tanda pengenal bagi usaha 
                tersebut, yang wajib dimiliki oleh setiap pelaku usaha yang sah dan ingin beroperasi secara resmi.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://oss.go.id/" className="underline text-blue-500" target="_blank">https://oss.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SIUP */}

      {/* HKI */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="http://e-hakcipta.dgip.go.id">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={HKI} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;HAKI atau Hak Kekayaan Intelektual merupakan hak yang diberikan kepada hasil 
                olah pikir manusia dalam menciptakan produk, jasa, atau proses yang berguna untuk masyarakat. 
                Dalam HAKI, objek yang dilindungi adalah karya-karya yang dihasilkan oleh kemampuan intelektual 
                manusia. Konsep HAKI didasarkan pada pemikiran bahwa karya intelektual memerlukan pengorbanan waktu, 
                tenaga, dan biaya sehingga perlu ada penghargaan dan perlindungan hukum bagi kekayaan intelektual tersebut.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="http://e-hakcipta.dgip.go.id" className="underline text-blue-500" target="_blank">http://e-hakcipta.dgip.go.id</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HKI END */}

      <div>
        <h1 class="text-center text-2xl font-bold text-okoce-blue pt-20">Izin Edar</h1>
      </div>

      {/* PIRT */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://oss.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={PIRT} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;PIRT (Pangan Industri Rumah Tangga) sertifikat izin Pangan Industri 
                Rumah Tangga (PIRT) yang diberikan oleh Bupati atau Walikota melalui Dinas Kesehatan. 
                Sertifikat ini mengacu bahwa pangan hasil produksi yang dihasilkan telah memenuhi persyaratan 
                dan standar keamanan yang telah ditentukan.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://oss.go.id/" className="underline text-blue-500" target="_blank">https://oss.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PIRT END */}

      {/* Halal */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://ptsp.halal.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={Halal} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;Secara garis besar penggunaan label halal pada produk khususnya makanan, bertujuan untuk 
                membedakan antara produk halal dan tidak halal. Lebih dalamnya label halal merupakan pencantuman 
                tulisan atau pernyataan halal pada kemasan produk untuk menunjukan bahwa produk yang dimaksud berstatus 
                produk halal. Nah untuk dapat mencantumkan label halal pada kemasan sendiri harus memiliki sertifikat halal 
                terlebih dahulu. &quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://ptsp.halal.go.id/" className="underline text-blue-500" target="_blank">https://ptsp.halal.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Halal END */}

      {/* BPOM */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <div className="w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full max-md:items-center">
              <div className="flex grow items-start px-16 py-16 max-md:px-5 max-md:items-center">
                <a href="https://e-reg.pom.go.id/">
                    <div class="hover:scale-105 duration-300">
                        <img loading="lazy" src={BPOM} className="h-50 w-60"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center items-center px-16 py-16 w-full text-lg leading-7 text-center max-md:px-5 max-md:max-w-full">
                &quot;Dalam rangka meningkatkan efektivitas pengawasan Obat dan Makanan maka diperlukan 
                adanya penguatan kelembagaan di bidang pengawasan Obat dan Makanan. Badan Pengawas Obat dan 
                Makanan (Badan POM), adalah Lembaga Pemerintah Non Kementerian (LPNK) yang menyelenggarakan urusan 
                pemerintahan di bidang pengawasan Obat dan Makanan. Badan POM berada di bawah dan bertanggung jawab 
                kepada Presiden melalui Menteri yang menyelenggarakan urusan pemerintahan di bidang kesehatan.&quot;
                <br />
                Untuk informasi mengenai syarat dan ketentuan lebih lengkap,
                Sobat bisa mengunjungi:
                <a href="https://e-reg.pom.go.id/" className="underline text-blue-500" target="_blank">https://e-reg.pom.go.id/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PIRT END */}
    </>
  );
};

export default Perizinan;
