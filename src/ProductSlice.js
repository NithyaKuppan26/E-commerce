import { createSlice } from "@reduxjs/toolkit";
import BackCase from './images/gift1.jpg';
import frame1 from './images/gift2.jpg';
import frame from './images/gift3.jpg';
import album from './images/gift4.jpg';
import photoPrint from './images/gift5.jpg';
import bottlePrint from './images/gift6.jpg';
import frame2 from './images/gift7.jpg';
import tshirt from './images/gift8.jpg';
import clock from './images/gift9.jpg';
import calender from './images/gift10.jpg';
import keychain from './images/gift13.jpg';
import bw from './images/gift14.jpg';
import key1 from './images/key1.jpg';
import key9 from './images/key9.jpg';
import key2 from './images/key2.jpg';
import key3 from './images/key3.jpg';
import key4 from './images/key4.jpg';
import key5 from './images/key5.jpg';
import key6 from './images/key6.jpg';
import key7 from './images/key7.jpg';
import key8 from './images/key8.jpg';

const initialState=[
    {
        id:1,
        name:"Mobile Case",
        price:320,
        image:BackCase,
    },
    {
        id:2,
        name:"Frame",
        price:300,
        image:frame1,
    },
    {
        id:3,
        name:"Frame",
        price:800,
        image:frame,
    },
    {
        id:4,
        name:"Mini Album",
        price:2000,
        image:album,
    },
    {
        id:5,
        name:"Mug print",
        price:500,
        image:photoPrint,
    },
    {
        id:6,
        name:"Bottle print",
        price:200,
        image:bottlePrint,
    },
    {
        id:7,
        name:"Frame",
        price:750,
        image:frame2,
    },
    {
        id:8,
        name:"T-shirt",
        price:700,
        image:tshirt,
    },
    {
        id:9,
        name:"Clock Print",
        price:1000,
        image:clock,
    },
    {
        id:10,
        name:"Calender Print",
        price:680,
        image:calender,
    },  {
        id:11,
        name:"Key Chain",
        price:200,
        image:keychain,
    },
    {
        id:12,
        name:"B/w - Color",
        price:1200,
        image:bw,
    },
    {
        id:13,
        name:"keychain",
        price:200,
        image:key1,
    },
    {
        id:14,
        name:"keychain",
        price:200,
        image:key2,
    },
    {
        id:15,
        name:"keychain",
        price:200,
        image:key3,
    },
    {
        id:16,
        name:"keychain",
        price:200,
        image:key4,
    },
    {
        id:17,
        name:"keychain",
        price:200,
        image:key5,
    },
    {
        id:18,
        name:"keychain",
        price:200,
        image:key6,
    },
    {
        id:19,
        name:"keychain",
        price:200,
        image:key7,
    },
    {
        id:20,
        name:"keychain",
        price:200,
        image:key8,
    },
    {
        id:21,
        name:"keychain",
        price:200,
        image:key9,
    },

    ]
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{}
})
export default productSlice.reducer