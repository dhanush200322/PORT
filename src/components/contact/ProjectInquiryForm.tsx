"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDropzone } from "react-dropzone";
import { INQUIRY_TYPES } from "./ContactData";
import { Loader2, Send, UploadCloud, X, CheckCircle2, FileText, Paperclip } from "lucide-react";
import * as LucideIcons from "lucide-react";

const MAX_FILES = 5;

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  sameAsPhone: z.boolean(),
  whatsapp: z.string().optional(),
  subject: z.string().min(1, "Subject is required."),
  inquiryType: z.string().min(1, "Please select an inquiry type."),
  message: z.string().min(1, "Message is required.").max(5000, "Message is too long."),
}).refine(data => {
  if (!data.sameAsPhone && (!data.whatsapp || data.whatsapp.length < 1)) {
    return data.whatsapp === undefined || data.whatsapp === "" || data.whatsapp.length >= 1;
  }
  return true;
}, {
  message: "WhatsApp number is required if not same as phone.",
  path: ["whatsapp"],
});

type FormData = z.infer<typeof formSchema>;

interface ProjectInquiryFormProps {
  onSuccess: () => void;
}

export default function ProjectInquiryForm({ onSuccess }: ProjectInquiryFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sameAsPhone: false,
    }
  });

  const sameAsPhone = watch("sameAsPhone");
  const phoneVal = watch("phone");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileError(null);
    const newFiles = [...files, ...acceptedFiles];
    
    if (newFiles.length > MAX_FILES) {
      setFileError(`You can only upload a maximum of ${MAX_FILES} files.`);
      return;
    }

    setFiles(newFiles);
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, i) => i !== indexToRemove));
    setFileError(null);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("whatsapp", data.sameAsPhone ? data.phone : (data.whatsapp || ""));
      formData.append("subject", data.subject);
      formData.append("inquiryType", data.inquiryType);
      formData.append("message", data.message);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again later.");
      }

      onSuccess();
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit(onSubmit)} 
      className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl flex flex-col gap-8 shadow-2xl relative"
    >
      <h3 className="text-2xl font-bold text-white tracking-tight">Project Inquiry</h3>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {serverError}
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Full Name *</label>
          <input 
            {...register("fullName")}
            suppressHydrationWarning
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            placeholder="John Doe"
          />
          {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName.message}</span>}
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Email Address *</label>
          <input 
            {...register("email")}
            type="email"
            suppressHydrationWarning
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            placeholder="john@example.com"
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>
      </div>

      {/* Row 2: Phone & WhatsApp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Phone Number *</label>
          <div className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus-within:border-primary/50 focus-within:bg-white/10 transition-all duration-300 phone-input-container">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="IN"
                  international
                  numberInputProps={{ suppressHydrationWarning: true }}
                  className="bg-transparent outline-none border-none w-full text-white"
                />
              )}
            />
          </div>
          {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-widest text-white/50">WhatsApp Number</label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                {...register("sameAsPhone")}
                className="hidden"
              />
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${sameAsPhone ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-white/50'}`}>
                {sameAsPhone && <CheckCircle2 className="w-3 h-3 text-black" />}
              </div>
              <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors select-none">Same as Phone</span>
            </label>
          </div>
          
          <AnimatePresence mode="popLayout">
            {!sameAsPhone && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus-within:border-primary/50 focus-within:bg-white/10 transition-all duration-300 phone-input-container"
              >
                <Controller
                  name="whatsapp"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      defaultCountry="IN"
                      international
                      numberInputProps={{ suppressHydrationWarning: true }}
                      className="bg-transparent outline-none border-none w-full text-white"
                    />
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {errors.whatsapp && !sameAsPhone && <span className="text-red-400 text-xs">{errors.whatsapp.message}</span>}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Subject *</label>
        <input 
          {...register("subject")}
          suppressHydrationWarning
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
          placeholder="Project Discussion"
        />
        {errors.subject && <span className="text-red-400 text-xs">{errors.subject.message}</span>}
      </div>

      {/* Inquiry Type (Radio Cards) */}
      <div className="flex flex-col gap-4">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Inquiry Type *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {INQUIRY_TYPES.map((type) => {
            const Icon = (LucideIcons as any)[type.icon] || LucideIcons.Circle;
            const isSelected = watch("inquiryType") === type.id;
            return (
              <label 
                key={type.id}
                className={`
                  flex flex-col items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-300 text-center
                  ${isSelected ? 'bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/30 hover:text-white/80'}
                `}
              >
                <input type="radio" value={type.id} {...register("inquiryType")} className="hidden" />
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{type.label}</span>
              </label>
            );
          })}
        </div>
        {errors.inquiryType && <span className="text-red-400 text-xs">{errors.inquiryType.message}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Message *</label>
          <span className="text-xs text-white/30">{watch("message")?.length || 0} / 2000</span>
        </div>
        <textarea 
          {...register("message")}
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
          placeholder="Tell me about your project, timeline, and expectations..."
        />
        {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
      </div>

      {/* Attachments */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Attachments (Any Size)</label>
        
        <div 
          {...getRootProps()} 
          className={`
            w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300
            ${isDragActive ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'}
          `}
        >
          <input {...getInputProps()} />
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50">
            <UploadCloud className={`w-6 h-6 transition-colors ${isDragActive ? 'text-primary' : ''}`} />
          </div>
          <div className="text-center">
            <p className="text-sm text-white font-medium mb-1">
              {isDragActive ? "Drop files here" : "Drag & drop files here, or click to browse"}
            </p>
            <p className="text-xs text-white/30">
              Any document, image, or video type (Max 5 files)
            </p>
          </div>
        </div>
        
        {fileError && <span className="text-red-400 text-xs mt-1">{fileError}</span>}

        {/* Uploaded Files Chips */}
        {files.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg bg-white/10 border border-white/20">
                <Paperclip className="w-3.5 h-3.5 text-white/50" />
                <span className="text-xs text-white/80 max-w-[150px] truncate">{file.name}</span>
                <span className="text-[10px] text-white/40">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                <button 
                  type="button" 
                  onClick={() => removeFile(idx)}
                  className="ml-2 w-5 h-5 rounded-full hover:bg-red-500/20 text-white/50 hover:text-red-400 flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-end border-t border-white/10 pt-8">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => {
            setValue("fullName", "");
            setValue("email", "");
            setValue("phone", "");
            setValue("whatsapp", "");
            setValue("subject", "");
            setValue("inquiryType", "");
            setValue("message", "");
            setFiles([]);
            setFileError(null);
            setServerError(null);
          }}
          className="text-white/50 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors px-6 py-4"
        >
          Clear Form
        </button>
        <motion.button
          type="submit"
          suppressHydrationWarning
          disabled={isSubmitting}
          layout
          className={`px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] ${
            isSubmitting 
              ? 'bg-primary/80 text-black/80 cursor-wait w-full sm:w-[240px]' 
              : 'bg-primary text-black hover:bg-primary/90 hover:scale-105 w-full sm:w-auto'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>

    </motion.form>
  );
}
