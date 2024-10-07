import { Metadata } from "next";

export default async function sitemap(){
    return [
        {
        url : "https://www.hermarkpress.com/",
        lastModified : new Date()
        }
    ]
}