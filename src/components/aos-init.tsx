"use client"

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export function AosInit () {

    useEffect( () => {
        Aos.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return null;
}