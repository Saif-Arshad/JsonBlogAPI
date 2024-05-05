import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("q");


    await DbConnection();

    // Split the search query into individual words


    const words = search && search.split(/\s+/);
    // Construct a regular expression to match titles containing all the words
const titleRegex = words ? new RegExp(words.map(word => `(?=.*${word})`).join(''), 'i') : null;    
const searching = await BlogModel.find({ title: titleRegex });
    if(searching.length>0){
            return NextResponse.json({
              searching
            });

        }
        else{
            return NextResponse.json({
                "notFound":"No results found"
              });
        }

    } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

  }
}