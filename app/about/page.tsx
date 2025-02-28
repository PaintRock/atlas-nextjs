import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <main className="w-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <a href={"/"}>
                <ChevronLeftIcon className="h-6 w-6 "/>
                </a>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-3x1 font-bold tracking-tighter sm:text-4x1 md:text-5x1 xl:text-6x1">
                        About Us
                    </h1>
                    <p>
                        This is a great opportunity to itroduce myself -- but I won't
                    </p>
                    <p>
                        Additionally, I am not going to tell you about my cat.
                    </p>
                    <p>
                        But I will tell you that my dream car is a Subaru Outback Wilderness, or its big brother the -- oops, nope cannot tell you about that because I forgot the name"-- OH Forrester!! Wilderness Edition?
                    </p>
                </div>
            </div>
        </main>
    );
}