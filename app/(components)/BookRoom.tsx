"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "./DatePicker";

const BookRoom = () => {
  return (
    <Card className="w-[350px] rounded-md">
      <CardHeader className="bg-[#fb8500] text-center text-xl text-white ">
        <CardTitle className="tracking-widest">Book Your room</CardTitle>
      </CardHeader>
      <CardContent className="py-4 text-center">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <DatePicker />
            </div>
            <div className="flex flex-col space-y-1.5">
              <DatePicker />
            </div>

            <Button
              type="submit"
              className="bg-[#fb8500] w-full mt-4"
              variant="default"
            >
              Book now
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookRoom;
