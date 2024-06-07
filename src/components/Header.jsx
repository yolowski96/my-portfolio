import React from "react";
import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";
import Bounded from "./Bounded";

export default async function Header(){

    const client = createClient();
    const settings = await client.getSingle("settings");

    // md:sticky
    return (
        <Bounded className="top-0 z-50 mx-auto md:sticky max-w-7x1 md:top-4">
            <NavBar settings={settings} />
        </Bounded>
    )
}