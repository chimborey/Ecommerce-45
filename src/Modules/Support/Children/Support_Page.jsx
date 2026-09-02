
import { useState } from "react";
import {
    Search,
    BookOpen,
    MessageSquare,
    Send,
    FileText,
    ChevronRight,
    CheckCircle2,
    LifeBuoy,
    ExternalLink
} from "lucide-react";

export default function Support_Page() {
    const [searchQuery, setSearchQuery] = useState("");
    const [ticketSubject, setTicketSubject] = useState("");
    const [ticketMessage, setTicketMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        if (!ticketSubject || !ticketMessage) return;
        
        console.log({ subject: ticketSubject, message: ticketMessage });
        setSubmitted(true);
        setTicketSubject("");
        setTicketMessage("");
        
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <div className="w-full space-y-6 pb-10">
            {/* PAGE HEADER */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6 md:flex-row md:items-center">
                <div className="flex items-start gap-3.5">
                    <div className="rounded-xl border border-[#0F2945]/10 bg-[#0F2945]/5 p-2.5 text-[#0F2945]">
                        <LifeBuoy className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-800 md:text-lg">
                            Help & Support Center
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-400">
                            Find guides, documentation, or get in touch with our support team.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-emerald-600">System Operational</span>
                </div>
            </div>

            {/* SEARCH BANNER */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0F2945] p-6 text-white shadow-md md:p-8">
                <div className="relative z-10 mx-auto max-w-xl text-center space-y-3">
                    <h4 className="text-lg font-bold md:text-xl">How can we help you today?</h4>
                    <p className="text-xs text-gray-300">
                        Search through our documentation or browse common questions below.
                    </p>
                    
                    <div className="relative mt-4">
                        <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for articles, features, or error codes..."
                            className="w-full rounded-xl bg-white/10 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-400 backdrop-blur-md border border-white/10 focus:border-[#C49A45] focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* QUICK GUIDES / CATEGORIES */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-[#0F2945]/20 hover:shadow-md cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2945]/5 text-[#0F2945] mb-3">
                        <BookOpen className="h-5 w-5" />
                    </div>
                    <h5 className="text-xs font-bold text-gray-800">Documentation</h5>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                        Read step-by-step guides on setting up KHQR, printers, and product categories.
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#0F2945] group-hover:underline">
                        <span>Browse guides</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-[#0F2945]/20 hover:shadow-md cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2945]/5 text-[#0F2945] mb-3">
                        <FileText className="h-5 w-5" />
                    </div>
                    <h5 className="text-xs font-bold text-gray-800">API Reference</h5>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                        Explore webhooks, endpoints, and integration credentials for developers.
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#0F2945] group-hover:underline">
                        <span>View API docs</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-[#0F2945]/20 hover:shadow-md cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2945]/5 text-[#0F2945] mb-3">
                        <MessageSquare className="h-5 w-5" />
                    </div>
                    <h5 className="text-xs font-bold text-gray-800">Community & FAQ</h5>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                        Check out answers to frequent questions or talk to other business owners.
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#0F2945] group-hover:underline">
                        <span>Explore FAQ</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                </div>
            </div>

            {/* FAQ & CONTACT TICKET GRID */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* FAQ SECTION */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-2 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-100 pb-3">
                        Frequently Asked Questions
                    </h4>

                    <div className="space-y-3">
                        <div className="rounded-xl border border-gray-100 bg-gray-50/40 p-4">
                            <h5 className="text-xs font-bold text-gray-800">How do I connect my receipt printer?</h5>
                            <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                                Go to Settings &gt; Integrations &gt; Hardware, click on "Receipt Printer", and follow the setup instructions to pair your device via Bluetooth or network IP.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-gray-50/40 p-4">
                            <h5 className="text-xs font-bold text-gray-800">What should I do if KHQR payment fails to verify?</h5>
                            <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                                Ensure your internet connection is stable and check your ABA/KHQR merchant account credentials under the integration settings tab.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-gray-50/40 p-4">
                            <h5 className="text-xs font-bold text-gray-800">Can I use the POS system offline?</h5>
                            <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                                Basic local sales can be recorded, but features like cloud sync, live reporting, and digital payments require an active internet connection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SUBMIT TICKET FORM */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-100 pb-3">
                        Submit a Support Ticket
                    </h4>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                            <CheckCircle2 className="h-8 w-8 text-emerald-600 mb-2" />
                            <h5 className="text-xs font-bold text-emerald-800">Ticket Submitted!</h5>
                            <p className="mt-1 text-[10px] text-emerald-600">
                                We have received your request and will contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitTicket} className="space-y-3">
                            <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    value={ticketSubject}
                                    onChange={(e) => setTicketSubject(e.target.value)}
                                    placeholder="e.g. Printer connection error"
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-800 focus:border-[#0F2945] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    value={ticketMessage}
                                    onChange={(e) => setTicketMessage(e.target.value)}
                                    placeholder="Describe your issue in detail..."
                                    required
                                    className="w-full rounded-xl border border-gray-200 p-3 text-xs text-gray-800 focus:border-[#0F2945] focus:outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0F2945] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15365b]"
                            >
                                <Send className="h-3.5 w-3.5" />
                                <span>Send Request</span>
                            </button>
                        </form>
                    )}

                    <div className="border-t border-gray-100 pt-3 text-center">
                        <p className="text-[10px] text-gray-400">
                            Need urgent help? Call us directly at <span className="font-semibold text-gray-700">+855 12 345 678</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}