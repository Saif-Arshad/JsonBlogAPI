import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, pathname } = new URL(request.url);
  const slug = pathname.split('/').pop(); 

  try {
    await DbConnection();
    const category = await BlogModel.find({ categorie: slug });
    if (category.length > 0) {
      return NextResponse.json(
        { category }, 
        { status: 200 });
    } else {
      return NextResponse.json({
        "notFound": "Search using keyword in available Categories",
        "availableCategories": ["technology", "health", "lifestyle", "food", "movie", "sport", "news", "fashion"],
      });
    }
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }

}
