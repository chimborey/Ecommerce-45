import { useState } from "react";
import {
      Plug,
      CreditCard,
      Printer,
      Smartphone,
      Mail,
      MessageSquare,
      Calculator,
      Map,
      Cloud,
      Truck,
      Code2,
      Webhook,
      CheckCircle2,
      XCircle,
      Settings2,
      Unplug,
      ExternalLink,
      ShieldCheck,
} from "lucide-react";

// =====================================================
// 1. យក IntegrationCard មកដាក់ទីនេះ (ខាងក្រៅ Component หลัก)
// =====================================================
const IntegrationCard = ({
      icon: Icon,
      title,
      description,
      connected,
      onToggle,
      buttonText = "Configure",
}) => {
      return (
            <div
                  className={`group rounded-xl border p-4 transition-all duration-300 ${connected
                        ? "border-gray-100 bg-white hover:border-[#0F2945]/20 hover:shadow-sm"
                        : "border-gray-100 bg-gray-50/40 hover:border-gray-200 hover:bg-white"
                        }`}
            >
                  <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-start gap-3">
                              <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${connected
                                          ? "bg-[#0F2945] text-white"
                                          : "bg-gray-100 text-gray-500"
                                          }`}
                              >
                                    <Icon className="h-4.5 w-4.5" />
                              </div>

                              <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                          <h5 className="text-xs font-bold text-gray-800">
                                                {title}
                                          </h5>

                                          {connected ? (
                                                <span className="flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                                                      <CheckCircle2 className="h-3 w-3" />
                                                      Connected
                                                </span>
                                          ) : (
                                                <span className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9px] font-semibold text-gray-400">
                                                      <XCircle className="h-3 w-3" />
                                                      Not Connected
                                                </span>
                                          )}
                                    </div>

                                    <p className="mt-1 max-w-md text-[10px] leading-4 text-gray-400">
                                          {description}
                                    </p>
                              </div>
                        </div>

                        <button
                              type="button"
                              onClick={onToggle}
                              className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-300 ${connected ? "bg-[#0F2945]" : "bg-gray-200"
                                    }`}
                        >
                              <span
                                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${connected ? "left-[22px]" : "left-0.5"
                                          }`}
                              />
                        </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                        {connected ? (
                              <>
                                    <span className="text-[10px] text-gray-400">
                                          Integration is active
                                    </span>
                                    <div className="flex items-center gap-2">
                                          <button
                                                type="button"
                                                className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
                                          >
                                                <Settings2 className="h-3 w-3" />
                                                {buttonText}
                                          </button>
                                          <button
                                                type="button"
                                                onClick={onToggle}
                                                className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-medium text-rose-500 transition hover:bg-rose-50"
                                          >
                                                <Unplug className="h-3 w-3" />
                                                Disconnect
                                          </button>
                                    </div>
                              </>
                        ) : (
                              <>
                                    <span className="text-[10px] text-gray-400">
                                          Not connected
                                    </span>
                                    <button
                                          type="button"
                                          onClick={onToggle}
                                          className="flex items-center gap-1 rounded-lg bg-[#0F2945] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#15365b]"
                                    >
                                          <Plug className="h-3 w-3" />
                                          Connect
                                    </button>
                              </>
                        )}
                  </div>
            </div>
      );
};

// =====================================================
// 2. យក SectionHeader មកដាក់ទីនេះផងដែរ
// =====================================================
const SectionHeader = ({ icon: Icon, number, title, description }) => {
      return (
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#0F2945]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                              {number}. {title}
                        </h4>
                  </div>
                  <span className="hidden text-[10px] text-gray-400 md:block">
                        {description}
                  </span>
            </div>
      );
};

// =====================================================
// Main Component
// =====================================================
export default function Integrations_Settings() {
      const [integrations, setIntegrations] = useState({
            khqr: true,
            aba: false,
            card: false,
            bank: false,
            receiptPrinter: true,
            kitchenPrinter: true,
            barcodeScanner: false,
            cashDrawer: true,
            email: true,
            sms: false,
            accounting: false,
            googleMaps: true,
            cloudBackup: false,
            delivery: false,
            api: false,
            webhook: false,
      });

      const toggleIntegration = (key) => {
            setIntegrations((prev) => ({
                  ...prev,
                  [key]: !prev[key],
            }));
      };

      const handleSave = () => {
            console.log("Integration Settings:", integrations);
            alert("Integration settings saved successfully.");
      };

      return (
            <div className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md md:p-6">
                  {/* HEADER */}
                  <div className="mb-7 flex flex-col justify-between gap-4 border-b border-gray-100 pb-5 md:flex-row md:items-center">
                        <div className="flex items-start gap-3.5">
                              <div className="rounded-xl border border-[#0F2945]/10 bg-[#0F2945]/5 p-2.5 text-[#0F2945]">
                                    <Plug className="h-6 w-6" />
                              </div>
                              <div>
                                    <h3 className="text-base font-bold text-gray-800 md:text-lg">
                                          Integrations
                                    </h3>
                                    <p className="mt-0.5 text-xs text-gray-400">
                                          Connect your cafe POS with payments, hardware, services, and external business tools.
                                    </p>
                              </div>
                        </div>

                        <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                              <span>{Object.values(integrations).filter(Boolean).length} Connected</span>
                        </div>
                  </div>

                  <div className="space-y-7">
                        {/* 1. PAYMENT */}
                        <section>
                              <SectionHeader icon={CreditCard} number="1" title="Payment" description="Connect payment services" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={CreditCard} title="KHQR" description="Accept KHQR payments directly through your cafe POS." connected={integrations.khqr} onToggle={() => toggleIntegration("khqr")} />
                                    <IntegrationCard icon={CreditCard} title="ABA Pay" description="Connect ABA payment services for customer transactions." connected={integrations.aba} onToggle={() => toggleIntegration("aba")} />
                                    <IntegrationCard icon={CreditCard} title="Card Payment" description="Accept Visa, Mastercard and other supported cards." connected={integrations.card} onToggle={() => toggleIntegration("card")} />
                                    <IntegrationCard icon={CreditCard} title="Bank Transfer" description="Connect supported bank transfer payment methods." connected={integrations.bank} onToggle={() => toggleIntegration("bank")} />
                              </div>
                        </section>

                        {/* 2. HARDWARE */}
                        <section>
                              <SectionHeader icon={Printer} number="2" title="Hardware" description="Connect POS devices" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={Printer} title="Receipt Printer" description="Print customer receipts automatically from the POS." connected={integrations.receiptPrinter} onToggle={() => toggleIntegration("receiptPrinter")} buttonText="Printer Settings" />
                                    <IntegrationCard icon={Printer} title="Kitchen Printer" description="Send kitchen orders directly to the kitchen printer." connected={integrations.kitchenPrinter} onToggle={() => toggleIntegration("kitchenPrinter")} buttonText="Printer Settings" />
                                    <IntegrationCard icon={Smartphone} title="Barcode Scanner" description="Connect a barcode scanner for fast product lookup." connected={integrations.barcodeScanner} onToggle={() => toggleIntegration("barcodeScanner")} buttonText="Device Settings" />
                                    <IntegrationCard icon={CreditCard} title="Cash Drawer" description="Automatically open the cash drawer after cash payments." connected={integrations.cashDrawer} onToggle={() => toggleIntegration("cashDrawer")} buttonText="Device Settings" />
                              </div>
                        </section>

                        {/* 3. COMMUNICATION */}
                        <section>
                              <SectionHeader icon={MessageSquare} number="3" title="Communication" description="Connect messaging services" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={Mail} title="Email" description="Send receipts, notifications and business emails." connected={integrations.email} onToggle={() => toggleIntegration("email")} buttonText="Email Settings" />
                                    <IntegrationCard icon={MessageSquare} title="SMS" description="Send order updates and customer notifications by SMS." connected={integrations.sms} onToggle={() => toggleIntegration("sms")} buttonText="SMS Settings" />
                              </div>
                        </section>

                        {/* 4. BUSINESS TOOLS */}
                        <section>
                              <SectionHeader icon={Calculator} number="4" title="Business Tools" description="Connect external business services" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={Calculator} title="Accounting" description="Sync sales and financial data with accounting software." connected={integrations.accounting} onToggle={() => toggleIntegration("accounting")} />
                                    <IntegrationCard icon={Map} title="Google Maps" description="Use map location services for your cafe location." connected={integrations.googleMaps} onToggle={() => toggleIntegration("googleMaps")} />
                                    <IntegrationCard icon={Cloud} title="Cloud Backup" description="Back up important business data securely to the cloud." connected={integrations.cloudBackup} onToggle={() => toggleIntegration("cloudBackup")} buttonText="Backup Settings" />
                              </div>
                        </section>

                        {/* 5. DELIVERY */}
                        <section>
                              <SectionHeader icon={Truck} number="5" title="Delivery" description="Connect delivery services" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={Truck} title="Delivery Service" description="Connect your cafe with supported delivery services." connected={integrations.delivery} onToggle={() => toggleIntegration("delivery")} buttonText="Delivery Settings" />
                                    <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50/30 p-4">
                                          <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                                                      <ExternalLink className="h-4 w-4" />
                                                </div>
                                                <div>
                                                      <h5 className="text-xs font-bold text-gray-700">More Delivery Integrations</h5>
                                                      <p className="mt-1 text-[10px] leading-4 text-gray-400">
                                                            Additional delivery platforms can be connected here when available.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        {/* 6. DEVELOPER */}
                        <section>
                              <SectionHeader icon={Code2} number="6" title="Developer" description="Connect custom services" />
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <IntegrationCard icon={Code2} title="API" description="Connect external applications to your cafe POS API." connected={integrations.api} onToggle={() => toggleIntegration("api")} buttonText="API Settings" />
                                    <IntegrationCard icon={Webhook} title="Webhooks" description="Send real-time POS events to external applications." connected={integrations.webhook} onToggle={() => toggleIntegration("webhook")} buttonText="Webhook Settings" />
                              </div>
                              <div className="mt-3 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/60 p-3.5">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                    <div>
                                          <p className="text-xs font-semibold text-amber-800">Developer integrations</p>
                                          <p className="mt-0.5 text-[10px] leading-4 text-amber-700">
                                                API keys and webhook credentials should only be shared with trusted developers or connected applications.
                                          </p>
                                    </div>
                              </div>
                        </section>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-7 flex flex-col justify-between gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                        <p className="text-[10px] text-gray-400">
                              Connected services can access only the data required for their integration.
                        </p>
                        <div className="flex gap-2">
                              <button type="button" className="rounded-xl border border-gray-200 px-5 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50">
                                    Cancel
                              </button>
                              <button type="button" onClick={handleSave} className="rounded-xl bg-[#0F2945] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#15365b] active:scale-95">
                                    Save Integration Settings
                              </button>
                        </div>
                  </div>
            </div>
      );
}