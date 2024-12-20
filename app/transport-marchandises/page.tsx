"use client"
import React from "react"

import Header1 from "./components/header1";
import { GridPatternDashed } from "./components/gridpatterndashed";
import TransportItems from "./components/transport-items";
import Faq from "../../components/ui/faq-section";

export default function TransportMarchandises() {
    return (
        <div>
            <Header1/>
            <GridPatternDashed/>
            <TransportItems/>
            <Faq/>
        </div>
    );
}