import { useEffect, useRef } from "react";
import UploadAadhaar from "./uploadaadhar";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "@/components/translation/translation";
import { useTranslation } from "react-i18next";

export default function PersonalDetailsForm({
    onNextStep,
}: {
    onNextStep: () => void;
}) {
    const { t } = useTranslation();
    const onSubmit = async (values: any) => {
        try {
            //   const response = await fetch("/kycDetails", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(values),
            //   });

            //   if (!response.ok) {
            //     throw new Error("Failed to submit form");
            //   }

            // Handle success response
            console.log("Form submitted successfully");
            onNextStep();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const recognition = useRef<any>(null);

    useEffect(() => {
        const handleSpeechRecognition = (event: any) => {
            const lastResult = event.results[event.results.length - 1][0].transcript
                .trim()
                .toLowerCase();
            if (lastResult === "next") {
                onNextStep();
            }
        };

        if ("SpeechRecognition" in window) {
            // recognition.current = new SpeechRecognition();
            recognition.current.lang = "en-US";
            recognition.current.continuous = true;
            recognition.current.interimResults = false;
            recognition.current.onresult = handleSpeechRecognition;
        } else {
            console.error("SpeechRecognition is not supported in this browser.");
        }

        return () => {
            if (recognition.current) {
                recognition.current.stop();
            }
        };
    }, [onNextStep]);

    const startListening = () => {
        if (recognition.current) {
            recognition.current.start();
        }
    };

    const stopListening = () => {
        if (recognition.current) {
            recognition.current.stop();
        }
    };

    useEffect(() => {
        startListening();

        return () => {
            stopListening();
        };
    }, []);

    const speakMessage = (message: string) => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    };

    return (
        <div className="flex justify-center">
            <div className="space-y-10 py-10 w-8/12">
                <h2 className="flex flex-col text-md font-semibold text-center border border-green-300 bg-green-300/10 hover:bg-green-300/20 hover:border-green-300 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 rounded-lg p-3 w-max mx-auto">
                    <span>
                        {t("Fill your personal details and upload your documents.")}
                    </span>
                    <span>
                        {t(
                            "After completing the form, say next to proceed to the next step.",
                        )}
                    </span>
                </h2>
                {/* <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 mx-auto justify-center my-10"
                    >
                        <div className="flex justify-between w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Full Name")}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Enter your full name")}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Address")}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Enter your current address")}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Email Address")}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Enter your email address")}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <FormField
                                control={form.control}
                                name="incomeRange"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Income Range")}</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={t("Select your income range")}
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="<2L">{t("Less than 2L")}</SelectItem>
                                                <SelectItem value="2-5L">2-5L</SelectItem>
                                                <SelectItem value="5-10L">5-10L</SelectItem>
                                                <SelectItem value=">10L">
                                                    {t("Greater than 10L")}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employmentType"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Employment Type")}</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={t("Select your employment type")}
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Salaried">
                                                    {t("Salaried")}
                                                </SelectItem>
                                                <SelectItem value="Self Employed">
                                                    {t("Self Employed")}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <FormField
                                control={form.control}
                                name="aadhaarNumber"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("Aadhaar Number")}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Enter your Aadhaar Number")}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="panCardNumber"
                                render={({ field }) => (
                                    <FormItem className="w-[49%]">
                                        <FormLabel>{t("PAN Card Number")}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("Enter your PAN Number")}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormMessage />
                    </form>
                </Form> */}

                <div className="flex justify-center w-full">
                    <UploadAadhaar />
                </div>
                <div>
                    <Button
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                        onClick={() => {
                            speakMessage(
                                t("Verify if your Aadhaar details fetched are correct."),
                            );
                            onNextStep();
                        }}
                    >
                        {t("Next")}
                    </Button>
                </div>
            </div>
        </div>
    );
}