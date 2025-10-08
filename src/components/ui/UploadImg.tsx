import React, { useState, useCallback } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper: create cropped image
  const getCroppedImg = (imageSrc: string, pixelCrop: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext("2d");

        if (!ctx) return reject(new Error("No 2D context"));

        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );

        const base64Image = canvas.toDataURL("image/jpeg");
        resolve(base64Image);
      };
      image.onerror = (error) => reject(error);
    });
  };

  const handleCropSave = async () => {
    try {
      if (!image || !croppedAreaPixels) return;
      const croppedImg = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImg);
      setOpen(false);
    } catch (error) {
      console.error("Crop failed:", error);
    }
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="photo">Upload Photo</Label>

      {/* File Input */}
      <input
        id="photo"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0 file:text-sm file:font-semibold
                   file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
      />

      {/* Show preview if cropped */}
      {croppedImage && (
        <div className="mt-4">
          <Label>Preview</Label>
          <img
            src={croppedImage}
            alt="Cropped Preview"
            className="w-32 h-32 rounded-md mt-3  object-cover border"
          />
        </div>
      )}

      {/* Crop Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Crop your image</DialogTitle>
          </DialogHeader>

          {image && (
            <div className="relative w-full h-80 bg-muted rounded-md overflow-hidden">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          )}

          <div className="mt-4 ">
            <Label className="mb-2">Zoom</Label>
            <Slider
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={(v) => setZoom(v[0])}
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button onClick={handleCropSave}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
