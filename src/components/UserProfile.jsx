import React from "react";

export default function UserProfle () {

    return (
        <div>
            <div>
                <span>username</span>
            </div>
            <div className="pb-6">
                <span className="inline-block my-1">Logo</span>
                <div className="flex">
                    <div className="relative w-16 h-16 mr-3">
                        <img src="" alt="Organization logo" className="w-16 h-16 rounded-full bg-clip-padding" />
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="31.5" className="stroke-action-disabled" strokeDasharray="4 4" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-around">
                        <form>
                            <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            />
                            <button
                            className="border p-1 border-black"
                            // isLoading={}
                            // onClick={}
                            // hasError={}
                            >
                            Upload photo
                            </button>
                        </form>
                        <span className="text-sm">
                            Ideal dimension: 100x100px, up to 1MB
                        </span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
