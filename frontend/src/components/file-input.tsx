import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FileInput() {
  return (
    <div className="relative w-32 h-32 flex bg-shape items-center justify-center rounded-xl">
      <label htmlFor="profile-photo" className="absolute w-full h-full">
      </label>
      <input className="hidden" type="file" name="profile-photo" id="profile-photo" />
      <HugeiconsIcon className="size-8 text-orange-base" icon={ImageUploadIcon} />
    </div>
  )
}