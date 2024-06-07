import { createSlice } from "@reduxjs/toolkit";
import keychain from './images/gift1.jpg';
import pillow from './images/gift2.jpg';
import frame from './images/gift3.jpg';
import waterBottle from './images/gift4.jpg';
import photoPrint from './images/gift5.jpg';
import mugPrint from './images/gift6.jpg';
import miniAlbum from './images/gift7.jpg';
import calendarPrint from './images/gift8.jpg';
import bwToColor from './images/gift9.jpg';
import photoRestoration from './images/gift10.jpg';

const initialState=[
    {
        id:1,
        name:"keychain",
        price:200,
        image:keychain,
    },
    {
        id:2,
        name:"pillow",
        price:300,
        image:pillow,
    },
    {
        id:3,
        name:"frame",
        price:800,
        image:frame,
    },
    {
        id:4,
        name:"water bottle",
        price:200,
        image:waterBottle,
    },
    {
        id:5,
        name:"photo print",
        price:500,
        image:photoPrint,
    },
    {
        id:6,
        name:"mug print",
        price:200,
        image:mugPrint,
    },
    {
        id:7,
        name:"mini album",
        price:2000,
        image:miniAlbum,
    },
    {
        id:8,
        name:"calender print",
        price:700,
        image:calendarPrint,
    },
    {
        id:9,
        name:"b/w to color",
        price:1000,
        image:bwToColor,
    },
    {
        id:10,
        name:"photo restoration",
        price:1500,
        image:photoRestoration,
    }
    ]
const productReducer=createSlice({
    name:"products",
    initialState,
    reducers:{}
})
export default productReducer.reducer