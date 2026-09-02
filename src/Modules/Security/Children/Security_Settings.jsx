import React, { useState } from "react";
import {
      ShieldCheck,
      LockKeyhole,
      Eye,
      EyeOff,
      Smartphone,
      Monitor,
      MapPin,
      Clock3,
      LogOut,
      Bell,
      KeyRound,
      CheckCircle2,
      AlertTriangle,
      Save,
} from "lucide-react";

const Toggle = ({ enabled, onChange }) => {
      return (
            <button
                  type="button"
                  onClick={() => onChange(!enabled)}
                  className={`relative h-7 w-12 rounded-full transition-all duration-300 ${enabled ? "bg-amber-500" : "bg-gray-300"
                        }`}
            >
                  <span
                        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${enabled ? "left-6" : "left-1"
                              }`}
                  />
            </button>
      );
};

const SettingRow = ({
      icon: Icon,
      title,
      description,
      enabled,
      onChange,
}) => {
      return (
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 py-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                              <Icon size={19} />
                        </div>

                        <div>
                              <h4 className="font-semibold text-gray-900">{title}</h4>
                              <p className="mt-1 text-sm text-gray-500">{description}</p>
                        </div>
                  </div>

                  <Toggle enabled={enabled} onChange={onChange} />
            </div>
      );
};

const SecuritySettings = () => {
      const [showCurrent, setShowCurrent] = useState(false);
      const [showNew, setShowNew] = useState(false);
      const [showConfirm, setShowConfirm] = useState(false);

      const [password, setPassword] = useState({
            current: "",
            newPassword: "",
            confirmPassword: "",
      });

      const [settings, setSettings] = useState({
            twoFactor: true,
            staffPin: true,
            refundApproval: true,
            voidApproval: true,
            discountApproval: false,
            priceChangeApproval: true,
            autoLogout: true,
            newDeviceAlert: true,
            failedLoginAlert: true,
            passwordChangedAlert: true,
            suspiciousLoginAlert: true,
      });

      const [sessionTimeout, setSessionTimeout] = useState("30");

      const updateSetting = (key, value) => {
            setSettings((prev) => ({
                  ...prev,
                  [key]: value,
            }));
      };

      const handlePasswordChange = (e) => {
            setPassword({
                  ...password,
                  [e.target.name]: e.target.value,
            });
      };

      const handleSave = () => {
            console.log({
                  password,
                  settings,
                  sessionTimeout,
            });
      };

      const devices = [
            {
                  id: 1,
                  device: "Chrome on Windows",
                  location: "Phnom Penh, Cambodia",
                  time: "Active now",
                  current: true,
                  icon: Monitor,
            },
            {
                  id: 2,
                  device: "Safari on iPhone",
                  location: "Phnom Penh, Cambodia",
                  time: "2 hours ago",
                  current: false,
                  icon: Smartphone,
            },
            {
                  id: 3,
                  device: "Chrome on Windows",
                  location: "Siem Reap, Cambodia",
                  time: "1 day ago",
                  current: false,
                  icon: Monitor,
            },
      ];

      return (
            <div className="">
                  <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                              <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                                          <ShieldCheck size={24} />
                                    </div>

                                    <div>
                                          <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                                                Security Settings
                                          </h1>
                                          <p className="mt-1 text-sm text-gray-500">
                                                Manage your account security, authentication and POS access.
                                          </p>
                                    </div>
                              </div>

                              <button
                                    onClick={handleSave}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
                              >
                                    <Save size={18} />
                                    Save Changes
                              </button>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                              {/* LEFT */}
                              <div className="space-y-6">
                                    {/* Change Password */}
                                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="mb-6 flex items-start gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                                      <LockKeyhole size={20} />
                                                </div>

                                                <div>
                                                      <h2 className="text-lg font-bold text-gray-900">
                                                            Change Password
                                                      </h2>
                                                      <p className="mt-1 text-sm text-gray-500">
                                                            Update your account password regularly to keep your account
                                                            secure.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="space-y-5">
                                                <PasswordInput
                                                      label="Current Password"
                                                      name="current"
                                                      value={password.current}
                                                      onChange={handlePasswordChange}
                                                      show={showCurrent}
                                                      setShow={setShowCurrent}
                                                />

                                                <PasswordInput
                                                      label="New Password"
                                                      name="newPassword"
                                                      value={password.newPassword}
                                                      onChange={handlePasswordChange}
                                                      show={showNew}
                                                      setShow={setShowNew}
                                                />

                                                <PasswordInput
                                                      label="Confirm New Password"
                                                      name="confirmPassword"
                                                      value={password.confirmPassword}
                                                      onChange={handlePasswordChange}
                                                      show={showConfirm}
                                                      setShow={setShowConfirm}
                                                />

                                                <div className="rounded-xl bg-amber-50 px-4 py-3">
                                                      <div className="flex gap-2 text-sm text-amber-800">
                                                            <KeyRound size={17} className="mt-0.5 shrink-0" />
                                                            <p>
                                                                  Use at least 8 characters with uppercase, lowercase,
                                                                  number and special character.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>

                                    {/* 2FA */}
                                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="flex items-center justify-between gap-4">
                                                <div className="flex items-start gap-3">
                                                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                                            <ShieldCheck size={20} />
                                                      </div>

                                                      <div>
                                                            <h2 className="text-lg font-bold text-gray-900">
                                                                  Two-Factor Authentication
                                                            </h2>
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                  Add an extra layer of protection to your account.
                                                            </p>
                                                      </div>
                                                </div>

                                                <Toggle
                                                      enabled={settings.twoFactor}
                                                      onChange={(value) => updateSetting("twoFactor", value)}
                                                />
                                          </div>

                                          {settings.twoFactor && (
                                                <div className="mt-5 flex flex-col gap-3 rounded-xl border border-green-200 bg-green-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                                                      <div className="flex gap-3">
                                                            <CheckCircle2
                                                                  size={20}
                                                                  className="mt-0.5 shrink-0 text-green-600"
                                                            />

                                                            <div>
                                                                  <p className="font-semibold text-green-800">
                                                                        Two-factor authentication is enabled
                                                                  </p>
                                                                  <p className="mt-1 text-sm text-green-700">
                                                                        Your account is protected with 2FA.
                                                                  </p>
                                                            </div>
                                                      </div>

                                                      <button className="rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-green-50">
                                                            Manage 2FA
                                                      </button>
                                                </div>
                                          )}
                                    </section>

                                    {/* POS Security */}
                                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="mb-3">
                                                <h2 className="text-lg font-bold text-gray-900">
                                                      POS Security
                                                </h2>
                                                <p className="mt-1 text-sm text-gray-500">
                                                      Configure security rules for sensitive POS operations.
                                                </p>
                                          </div>

                                          <SettingRow
                                                icon={KeyRound}
                                                title="Require PIN for staff login"
                                                description="Staff must enter their PIN to access the POS."
                                                enabled={settings.staffPin}
                                                onChange={(value) => updateSetting("staffPin", value)}
                                          />

                                          <SettingRow
                                                icon={ShieldCheck}
                                                title="Manager approval for refunds"
                                                description="Refund transactions require manager approval."
                                                enabled={settings.refundApproval}
                                                onChange={(value) =>
                                                      updateSetting("refundApproval", value)
                                                }
                                          />

                                          <SettingRow
                                                icon={LockKeyhole}
                                                title="Manager approval for void orders"
                                                description="Require manager authorization before voiding an order."
                                                enabled={settings.voidApproval}
                                                onChange={(value) => updateSetting("voidApproval", value)}
                                          />

                                          <SettingRow
                                                icon={KeyRound}
                                                title="Manager approval for discounts"
                                                description="Require manager PIN before applying protected discounts."
                                                enabled={settings.discountApproval}
                                                onChange={(value) =>
                                                      updateSetting("discountApproval", value)
                                                }
                                          />

                                          <SettingRow
                                                icon={ShieldCheck}
                                                title="Manager approval for price changes"
                                                description="Protect manual product price changes."
                                                enabled={settings.priceChangeApproval}
                                                onChange={(value) =>
                                                      updateSetting("priceChangeApproval", value)
                                                }
                                          />
                                    </section>

                                    {/* Session Security */}
                                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="mb-5 flex items-start gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                                      <Clock3 size={20} />
                                                </div>

                                                <div>
                                                      <h2 className="text-lg font-bold text-gray-900">
                                                            Session Security
                                                      </h2>
                                                      <p className="mt-1 text-sm text-gray-500">
                                                            Control automatic session expiration and logout.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="grid gap-5 md:grid-cols-2">
                                                <div>
                                                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                            Session Timeout
                                                      </label>

                                                      <select
                                                            value={sessionTimeout}
                                                            onChange={(e) => setSessionTimeout(e.target.value)}
                                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                                      >
                                                            <option value="15">15 Minutes</option>
                                                            <option value="30">30 Minutes</option>
                                                            <option value="60">1 Hour</option>
                                                            <option value="120">2 Hours</option>
                                                            <option value="240">4 Hours</option>
                                                      </select>
                                                </div>

                                                <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                                                      <div>
                                                            <p className="font-semibold text-gray-900">Auto Logout</p>
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                  Logout after inactivity.
                                                            </p>
                                                      </div>

                                                      <Toggle
                                                            enabled={settings.autoLogout}
                                                            onChange={(value) =>
                                                                  updateSetting("autoLogout", value)
                                                            }
                                                      />
                                                </div>
                                          </div>
                                    </section>

                                    {/* Security Alerts */}
                                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="mb-3 flex items-start gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                                      <Bell size={20} />
                                                </div>

                                                <div>
                                                      <h2 className="text-lg font-bold text-gray-900">
                                                            Security Alerts
                                                      </h2>
                                                      <p className="mt-1 text-sm text-gray-500">
                                                            Choose which security events should notify you.
                                                      </p>
                                                </div>
                                          </div>

                                          <SettingRow
                                                icon={Smartphone}
                                                title="New device login"
                                                description="Notify me when my account logs in from a new device."
                                                enabled={settings.newDeviceAlert}
                                                onChange={(value) =>
                                                      updateSetting("newDeviceAlert", value)
                                                }
                                          />

                                          <SettingRow
                                                icon={AlertTriangle}
                                                title="Failed login attempts"
                                                description="Alert me after repeated failed login attempts."
                                                enabled={settings.failedLoginAlert}
                                                onChange={(value) =>
                                                      updateSetting("failedLoginAlert", value)
                                                }
                                          />

                                          <SettingRow
                                                icon={KeyRound}
                                                title="Password changed"
                                                description="Send an alert when the account password is changed."
                                                enabled={settings.passwordChangedAlert}
                                                onChange={(value) =>
                                                      updateSetting("passwordChangedAlert", value)
                                                }
                                          />

                                          <SettingRow
                                                icon={ShieldCheck}
                                                title="Suspicious login"
                                                description="Alert me about unusual or suspicious login activity."
                                                enabled={settings.suspiciousLoginAlert}
                                                onChange={(value) =>
                                                      updateSetting("suspiciousLoginAlert", value)
                                                }
                                          />
                                    </section>
                              </div>

                              {/* RIGHT */}
                              <div>
                                    <section className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
                                          <div className="mb-6 flex items-start gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                                                      <Monitor size={20} />
                                                </div>

                                                <div>
                                                      <h2 className="text-lg font-bold text-gray-900">
                                                            Login Activity
                                                      </h2>
                                                      <p className="mt-1 text-sm text-gray-500">
                                                            Review recent devices and account sessions.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Current session */}
                                          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
                                                <div className="flex items-center justify-between gap-3">
                                                      <div>
                                                            <div className="flex items-center gap-2">
                                                                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                                                                  <span className="font-semibold text-gray-900">
                                                                        Current Session
                                                                  </span>
                                                            </div>

                                                            <p className="mt-2 text-sm text-gray-600">
                                                                  Chrome on Windows
                                                            </p>

                                                            <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                                                                  <MapPin size={13} />
                                                                  Phnom Penh, Cambodia
                                                            </div>
                                                      </div>

                                                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                                            This device
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="mb-3 flex items-center justify-between">
                                                <h3 className="font-bold text-gray-900">Recent Activity</h3>

                                                <button className="text-sm font-semibold text-amber-700 hover:text-amber-800">
                                                      View All
                                                </button>
                                          </div>

                                          <div className="space-y-3">
                                                {devices.map((item) => {
                                                      const Icon = item.icon;

                                                      return (
                                                            <div
                                                                  key={item.id}
                                                                  className="rounded-xl border border-gray-200 p-4 transition hover:border-amber-200 hover:bg-amber-50/30"
                                                            >
                                                                  <div className="flex items-start gap-3">
                                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                                                                              <Icon size={18} />
                                                                        </div>

                                                                        <div className="min-w-0 flex-1">
                                                                              <div className="flex items-start justify-between gap-3">
                                                                                    <div>
                                                                                          <h4 className="font-semibold text-gray-900">
                                                                                                {item.device}
                                                                                          </h4>

                                                                                          <p className="mt-1 text-sm text-gray-500">
                                                                                                {item.location}
                                                                                          </p>
                                                                                    </div>

                                                                                    {item.current && (
                                                                                          <span className="rounded-full bg-green-100 px-2 py-1 text-[11px] font-semibold text-green-700">
                                                                                                Current
                                                                                          </span>
                                                                                    )}
                                                                              </div>

                                                                              <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                                                                                    <Clock3 size={13} />
                                                                                    {item.time}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      );
                                                })}
                                          </div>

                                          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                                                <LogOut size={18} />
                                                Log out from all other devices
                                          </button>

                                          <p className="mt-3 text-center text-xs text-gray-400">
                                                Your current device will remain signed in.
                                          </p>
                                    </section>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

const PasswordInput = ({
      label,
      name,
      value,
      onChange,
      show,
      setShow,
}) => {
      return (
            <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {label}
                  </label>

                  <div className="relative">
                        <input
                              type={show ? "text" : "password"}
                              name={name}
                              value={value}
                              onChange={onChange}
                              placeholder="Enter password"
                              className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        <button
                              type="button"
                              onClick={() => setShow(!show)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                        >
                              {show ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                  </div>
            </div>
      );
};

export default SecuritySettings;