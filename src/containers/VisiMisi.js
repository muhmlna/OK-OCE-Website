import React from "react";
import Header from "@img/Header visimisi.png"
import visi from "@img/visimisiContent.jpg"

const VisiMisi = () => {
    return (
        <>
            <div class="w-full flex justify-center mobile:mt-24">
                <img src={Header} class="relative object-cover block w-full h-auto lg:w-screen lg:h-[40rem]" alt="header" />
            </div>
            <div class="grid mobile:grid-rows-1 lg:grid-cols-2 lg:gap-4">
                <div class="p-12">
                    <h1 class="font-extrabold text-3xl">“OK OCE memberikan relevansi untuk kebutuhan masyarakat."</h1>
                    <p class="mt-8 text-justify">Berawal dari para pengurus, penggerak, dan anggota OK OCE yang memiliki visi dan misi yang sama mengenai arti memberikan pekerjaan dan penghidupan yang layak bagi kemanusiaan. Atas hal tersebut tercetuslah sebuah gagasan untuk mendirikan yayasan yang memiliki kepedulian terhadap masyarakat khususnya UMKM, menjunjung tinggi nilai-nilai sosial, pendidikan dan kemanusiaan.
                    </p>
                </div>
                <div class="mobile:mt-0 mobile:px-10 mobile:mb-10 lg:mt-10 lg:p-10">
                    <img src={visi} class="object-cover mobile:max-w-80 lg:max-w-[40rem]" alt="" />
                </div>
            </div>
        </>
    );
}

export default VisiMisi;