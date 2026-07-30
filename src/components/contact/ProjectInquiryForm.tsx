"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Upload, Loader2, Sparkles } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  subject: string;
  purpose: string;
  message: string;
}

const PURPOSES = [
  "Job Purpose",
  "Consulting",
  "Freelance Work",
  "Internship",
  "Full-Time Opportunity"
];

export default function ProjectInquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    subject: "",
    purpose: "",
    message: "",
  });

  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      
      // Calculate total size including existing files
      const currentTotalSize = files.reduce((acc, f) => acc + f.size, 0);
      const newFilesSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);
      
      // Because we use Base64 encoding (adds ~33% overhead) and Vercel has a 4.5MB limit
      const MAX_TOTAL_SIZE = 3 * 1024 * 1024; // 3MB raw size max

      if (currentTotalSize + newFilesSize > MAX_TOTAL_SIZE) {
        setError(`Total file size cannot exceed 3MB. Please select smaller files.`);
        return;
      }
      
      if (files.length + selectedFiles.length > 5) {
        setError("Maximum 5 files allowed.");
        return;
      }
      
      setError(null); // Clear errors if valid
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setError(null); // Clear errors in case they removed a file to get under the limit
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsUploading(true);

    try {
      // Convert files to Base64 to avoid mobile browser FormData streaming bugs
      const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
      });

      const base64Attachments = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          type: file.type,
          data: await toBase64(file),
        }))
      );

      const payload = {
        ...formData,
        whatsapp: whatsappSameAsPhone ? formData.phone : formData.whatsapp,
        attachments: base64Attachments,
      };

      const response = await fetch(`${window.location.origin}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 413) {
        throw new Error("Files are too large. Vercel restricts uploads to 4.5MB total.");
      }

      let data;
      try {
        data = await response.json();
      } catch (err) {
        throw new Error(`Server returned an unexpected error (${response.status}). Please try again later.`);
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      suppressHydrationWarning
      className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
      
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
      </div>
      
      <div className="space-y-6 relative z-10">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Full Name *</label>
            <input
              suppressHydrationWarning
              type="text"
              required
              value={formData.fullName}
              onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Email Address *</label>
            <input
              suppressHydrationWarning
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Phone Number</label>
            <div suppressHydrationWarning>
              {isMounted ? (
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={(value) => setFormData(prev => ({ ...prev, phone: value?.toString() || "" }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus-within:border-primary/50 focus-within:bg-white/10 transition-all phone-input-container"
                />
              ) : (
                <div className="w-full bg-white/5 border border-white/10 rounded-xl min-h-[48px]" />
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-medium text-white/70">WhatsApp Number</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={whatsappSameAsPhone}
                  onChange={(e) => setWhatsappSameAsPhone(e.target.checked)}
                  className="w-3.5 h-3.5 accent-primary rounded-sm"
                />
                <span className="text-xs text-white/50">Same as Phone</span>
              </label>
            </div>
            <div suppressHydrationWarning>
              {isMounted ? (
                <div className={whatsappSameAsPhone ? "opacity-50 pointer-events-none" : ""}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={whatsappSameAsPhone ? formData.phone : formData.whatsapp}
                    onChange={(value) => setFormData(prev => ({ ...prev, whatsapp: value?.toString() || "" }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus-within:border-primary/50 focus-within:bg-white/10 transition-all phone-input-container"
                  />
                </div>
              ) : (
                <div className="w-full bg-white/5 border border-white/10 rounded-xl min-h-[48px]" />
              )}
            </div>
          </div>
        </div>

        {/* Subject & Purpose */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Subject *</label>
            <input
              suppressHydrationWarning
              type="text"
              required
              value={formData.subject}
              onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              placeholder="What is this regarding?"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Message Purpose *</label>
            <div className="relative">
              <select
                suppressHydrationWarning
                required
                value={formData.purpose}
                onChange={e => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all appearance-none"
              >
                <option value="" disabled className="bg-background text-white/50">Select purpose</option>
                {PURPOSES.map(purpose => (
                  <option key={purpose} value={purpose} className="bg-background text-white">{purpose}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 ml-1">Message *</label>
          <textarea
            suppressHydrationWarning
            required
            rows={4}
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[120px] text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
            placeholder="Tell me more about your inquiry (you can also include links here)..."
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 ml-1">Attachments (Images, Files, Videos)</label>
          <div className="relative">
            <input
              suppressHydrationWarning
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              title="Upload attachments"
            />
            <div className="w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-4 py-6 flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all min-h-[48px]">
              <Upload className="w-5 h-5 text-white/50" />
              <span className="text-sm text-white/50 text-center">Click or drag files/videos here</span>
            </div>
          </div>
          
          {/* File List */}
          {files.length > 0 && (
            <div className="flex flex-col gap-2 mt-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 min-h-[48px]">
                  <span className="text-xs text-white/70 truncate max-w-[200px] sm:max-w-[300px]">
                    {file.name}
                  </span>
                  <button
                    suppressHydrationWarning
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-xs text-red-400 hover:text-red-300 min-h-[48px] px-2 flex items-center justify-center"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3"
            aria-live="assertive"
          >
            {error}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          suppressHydrationWarning
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full relative group overflow-hidden rounded-xl p-[1px] min-h-[48px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-black/50 backdrop-blur-md w-full h-full rounded-xl px-8 py-4 flex items-center justify-center gap-2 min-h-[48px]">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 text-white animate-spin" />
                <span className="text-white font-medium">
                  {isUploading ? "Uploading files..." : "Sending..."}
                </span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-white font-medium">Send Inquiry</span>
              </>
            )}
          </div>
        </motion.button>
      </div>
    </motion.form>
  );
}
