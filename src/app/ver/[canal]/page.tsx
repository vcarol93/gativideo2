"use client";

import { useParams } from "next/navigation";

const canalesMap: Record<string, string> = {
  telefe: "https://tvlibree.com/html/fl/?get=VGVsZWZlSEQ=",
  eltrece: "https://tvlibree.com/html/fl/?get=QXJ0ZWFySEQ",
  elnueve: "https://tvlibree.com/html/fl/?get=Q2FuYWw5&lang=1",
  telemax: "https://tvlibree.com/html/fl/?get=VGVsZW1heA",

  antena3: "https://tvlibree.com/html/fl/?get=QW50ZW5hXzM=",

  natgeo: "https://tvlibree.com/html/fl/?get=TmF0R2VvSEQ=",
  animalplanet: "https://tvlibree.com/html/fl/?get=QW5pbWFsUGxhbmV0",
  discoverychannel: "https://tvlibree.com/html/fl/?get=RGlzY292ZXJ5SEQ=",
  historychannel: "https://tvlibree.com/html/fl/?get=SGlzdG9yeUhE",

  cinecanal: "https://tvlibree.com/html/fl/?get=Q2luZWNhbmFsSEQ=",
  tnt: "https://tvlibree.com/html/fl/?get=VE5UX0hEX0FyZw==",
  warnerchannel: "https://tvlibree.com/html/fl/?get=V2FybmVySEQ=",
  starchannel: "https://tvlibree.com/html/fl/?get=Rk9YSEQ=",
  studiouniversal: "https://tvlibree.com/html/fl/?get=U3R1ZGlvX1VuaXZlcnNhbA==",
  sonychannel: "https://tvlibree.com/html/fl/?get=U29ueUhE",
  paramountnetwork: "https://tvlibree.com/html/fl/?get=UGFyYW1vdW50",
  axn: "https://tvlibree.com/html/fl/?get=QVhOSEQ=",

  hbo: "https://tvlibree.com/html/fl/?get=SEJPSEQ=",
  hbo2: "https://tvlibree.com/html/fl/?get=SEJPXzI=",
  hboplus: "https://tvlibree.com/html/fl/?get=SEJPX1BsdXM=",
  universalcinema: "https://tvlibree.com/html/fl/?get=VW5pdmVyc2FsX0NpbmVtYQ==",

  cartoonnetwork: "https://tvlibree.com/html/fl/?get=Q2FydG9vbk5ldHdvcms=",
  nickelodeon: "https://tvlibree.com/html/fl/?get=RGlzY292ZXJ5X0tpZHM=",
  dreamworks: "https://tvlibree.com/html/fl/?get=RHJlYW13b3Jrcw==",

  flowmusic: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY19YUA==",

  tycsports: "https://la14hd.com/vivo/canales.php?stream=tycsports",
  tntsports: "https://tvlibree.com/html/fl/?get=VE5UX1Nwb3J0c19IRA",
  dsports: "https://la14hd.com/vivo/canales.php?stream=dsports",

  espn1: "https://tvlibree.com/html/fl/?get=RVNQTjJIRA",
  espn3: "https://tvlibree.com/html/fl/?get=RVNQTjM",

  nbatv: "https://tvlibree.com/html/fl/?get=TkJBX1RW",
  foxsports1: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
};

export default function VerCanal() {
  const { canal } = useParams();

  const url = canalesMap[String(canal)];

  if (!url) {
    return <p className="text-white p-4">Canal no encontrado 😢</p>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <iframe
        src={url}
        className="w-full h-screen"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
