"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function MobilNav() {
  return (
    <header className="header">
      <Link href="/">
        <h2>Image Sass</h2>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <span className="text-xl">=</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when yore done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">hola</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default MobilNav;
