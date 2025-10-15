import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; 
import emailjs from "@emailjs/browser";
import HorseWhite from "@/components/Icons/HorseWhite";

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        workEmail: data.workEmail,
        needs: data.needs,
        projectSummary: data.projectSummary,
      };
      const response = await emailjs.send(
        "service_s8ubnxc",
        "template_2qnvhkn",
        templateParams,
        "2YEPEtf8IXRpv5o5b"
      );

      console.log("Email sent successfully:", response.status, response.text);
      reset();
      router.push("/thank-you"); 
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send enquiry. Please try again.");
    }
  };

  return (
    <div className="w-full md:w-1/2 p-4 ml-0 sm:ml-4">
      <h2 className="secondary-font text-xl md:text-4xl font-bold mb-4">
        Ready to Roll?
      </h2>
      <p className="primary-font text-base md:text-[18px] text-[#555555] mb-4 max-w-full sm:max-w-md">
        Tell us your idea today. We&apos;ll be ready to shoot in hours, not
        weeks.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              className={`primary-font text-base md:text-[16px] text-[#555555] w-full p-2 border rounded bg-black/5 outline-none ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <input
              className={`primary-font text-base md:text-[16px] text-[#555555] w-full p-2 border rounded bg-black/5 outline-none ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s-]{10,}$/,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            className={`primary-font text-base md:text-[16px] text-[#555555] w-full p-2 border rounded bg-black/5 outline-none ${
              errors.workEmail ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Work email"
            {...register("workEmail", {
              required: "Work email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.workEmail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.workEmail.message}
            </p>
          )}
        </div>
        <div>
          <input
            className={`primary-font text-base md:text-[16px] text-[#555555] w-full p-2 border rounded bg-black/5 outline-none ${
              errors.needs ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="What do you need?"
            {...register("needs", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Please provide at least 5 characters",
              },
            })}
          />
          {errors.needs && (
            <p className="text-red-500 text-sm mt-1">{errors.needs.message}</p>
          )}
        </div>
        <div>
          <textarea
            className={`primary-font text-base md:text-[16px] text-[#555555] w-full p-2 border rounded bg-black/5 outline-none resize-none h-24 ${
              errors.projectSummary ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Project summary"
            {...register("projectSummary", {
              required: "Project summary is required",
              minLength: {
                value: 10,
                message: "Summary must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.projectSummary && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectSummary.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center text-white p-3 rounded transition-all duration-300 hover:opacity-80"
          style={{
            background: "linear-gradient(to right, #9AD59C, #17921C)",
          }}
        >
          <span className="mr-1">Send Enquiry</span>
          <span className="transition -rotate-6">
            <HorseWhite />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;