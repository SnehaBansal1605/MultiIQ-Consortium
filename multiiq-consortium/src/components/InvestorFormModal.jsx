import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { useState } from "react";
import { useInvestorForm } from "../contexts/InvestorFormContext";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const InvestorFormModal = () => {
  const { open, closeForm } = useInvestorForm();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // File download
  const triggerDownload = (file) => {
    const link = document.createElement("a");
    link.href = `/pdfs/${file}`;
    link.download = file;
    link.click();
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    await emailjs.send(
      "service_64q4sd9",
      "template_2zjuine",
      form,
      "IdmUSndu71EiXRc9p"
    );

    triggerDownload("INVESTOR PACKAGE-CMHC-MLI-(MultiIQ).pdf");
    triggerDownload("QR Code-CMHC MLI Select Program Cost Breakdown.pdf");

    closeForm();
  };

  return (
    <Dialog open={open} onOpenChange={closeForm}>
      <DialogContent className="max-w-lg">
        <h2 className="text-xl font-bold mb-4">Request Investor Guide</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-primary mb-2 block">
                First Name
              </label>
              <Input
                name="firstName"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-primary mb-2 block">
                Last Name
              </label>
              <Input
                name="lastName"
                placeholder="Doe"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-primary mb-2 block">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-primary mb-2 block">
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              placeholder="+1 (905) 781-7664"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-primary mb-2 block">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Tell us about your investment goals..."
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent text-primary hover:bg-gold-light font-semibold py-6 text-lg shadow-gold-glow"
          >
            Request Consultation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorFormModal;
