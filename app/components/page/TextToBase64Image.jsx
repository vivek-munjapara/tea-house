"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Mrs_Saint_Delafield } from 'next/font/google'
const mrsfont = Mrs_Saint_Delafield({ weight: ['400'], subsets: ['latin'] });

const TextToBase64Image = () => {
  let text = 'Hi Vivek, this is a base64 image!';
  const [baseimg, SetBadeimg] = useState();

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 455;
    canvas.height = 100;

    const ctx = canvas.getContext('2d');
    const fontadd = '50px' + mrsfont.style.fontFamily;
    ctx.font = fontadd;
    ctx.fillText(text, 10, 60);

    const dataURL = canvas.toDataURL('image/png');
    const base64Image = dataURL.split(',')[1];
    SetBadeimg(base64Image)
  }, [])

  return <Image src={`data:image/png;base64,${baseimg}`} alt="Base64 Image" width={455} height={100} />;
};


export default TextToBase64Image;