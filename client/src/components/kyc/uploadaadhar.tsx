import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { xmlToJson } from "@/utils";
import "@/components/translation/translation";
import { useTranslation } from "react-i18next";

export default function InputFile() {
    const { t } = useTranslation();
    const [isUploaded, setIsUploaded] = useState(false);
    const onSubmit = async (values: any) => {
        values.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file", values.target.files[0]);
            const res = await fetch("http://localhost:5000/aadhar-upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            console.log("data", data);
            localStorage.setItem(
                "aadhar-data",
                JSON.stringify(xmlToJson(data.qr_data)),
            );
            console.log("aadhaar data", localStorage.getItem("aadhar-data"));
            setIsUploaded(true);
        } catch (error) {
            console.log("error", error);
        }
    };
    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" className="flex justify-center flex-col">
            <Label htmlFor="aadhar" className="text-center py-2">{t("Upload Aadhar")}</Label>
            <Input type="file" name="aadhar" id="aadhar" className="text-center" onChange={onSubmit} />
            {isUploaded ? (
                <p>{t("File uploaded successfully")}</p>
            ) : (
                <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                    {t("Submit")}
                </Button>
            )}
        </form>
    );
}