import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest) {

let data = [


    {name:"ahmed",age:25},
    {name:"mohamed",age:30},
    {name:"sara",age:28},
    {name:"khalid",age:48},
    {name:"ali",age:35},

]

return NextResponse.json(data)


}