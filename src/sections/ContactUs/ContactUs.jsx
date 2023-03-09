import React from "react";

export default function ContactUs() {
    return (
        <section>
            <div className="container mx-0 px-4 grid lg:grid-cols-2 gap-14 xl:gap-20">
                <div className="flex flex-col gap-6 xl:gap-10">
                    <div className="flex flex-col xl:gap-6">
                        <h1 className="h1">Contact Us</h1>
                        <h3 className="font-mabry text-md xl:text-2xl font-medium">
                            We’d love to colobrate with you
                        </h3>
                    </div>
                    <p className="text-base xl:text-xl !font-light font-mabry">
                        Please feel free to share your thoughts in the form
                        below, and we’ll respond within 48 hours of receiving
                        the inquiry.
                    </p>
                </div>
                <div className="grid gap-4">
                    <input
                        className="p-4 bg-[#4878F4] border-solid !border-2 !border-black text-[#070038]
                         placeholder-[#070038]  font-medium text-base xl:text-lg"
                        placeholder="Your Name"
                        type="text"
                    />
                    <input
                        className="p-4 bg-[#4878F4] border-solid !border-2 !border-black text-[#070038]
                         placeholder-[#070038] font-medium text-base xl:text-lg"
                        placeholder="Your Email"
                        type="email"
                    />
                    <textarea
                        className="p-4 bg-[#4878F4] border-solid !border-2 !border-black text-[#070038]
                         placeholder-[#070038] font-medium text-base xl:text-lg min-h-[10rem]"
                        placeholder="Tell us about your project"
                        cols="10"
                    ></textarea>
                    <div className="flex py-4 justify-end items-end">
                        <button className="px-4 py-3 bg-white shadow-lg__right font-bold font-mabry w-full max-w-[10rem]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
