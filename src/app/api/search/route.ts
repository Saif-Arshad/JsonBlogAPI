import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("q");


    await DbConnection();


    const words = search && search.split(/\s+/);


const titleRegex = words ? new RegExp(words.map(word => `(?=.*${word})`).join(''), 'i') : null;    
const searching = await BlogModel.find({ title: titleRegex });
    if(searching.length>0){
            return NextResponse.json({
              searching
            });

        }
        else{
            return NextResponse.json({
                "notFound":"Your Keyword not found in blog titles"
              });
        }

    } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });

  }
}