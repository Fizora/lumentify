"use client";

import { useState } from "react";
import { LuCheck, LuTriangleAlert } from "react-icons/lu";

type ToggleKey =
  | "invoiceEmails"
  | "chatEmails"
  | "projectUpdates"
  | "hostingReminders"
  | "marketingEmails";

type NotificationSettings = Record<ToggleKey, boolean>;

const notificationOptions: { key: ToggleKey; label: string; desc: string }[] = [
  {
    key: "invoiceEmails",
    label: "Invoice & payment emails",
    desc: "Get notified when a new invoice is issued or a payment is due.",
  },
  {
    key: "chatEmails",
    label: "New message emails",
    desc: "Email me when the Lumentify team sends a new chat message.",
  },
  {
    key: "projectUpdates",
    label: "Project progress updates",
    desc: "Get notified when your project moves to a new stage.",
  },
  {
    key: "hostingReminders",
    label: "Hosting & domain reminders",
    desc: "Reminders before your hosting or domain is due for renewal.",
  },
  {
    key: "marketingEmails",
    label: "Product news & offers",
    desc: "Occasional emails about new features and limited-time offers.",
  },
];

const initialSettings: NotificationSettings = {
  invoiceEmails: true,
  chatEmails: true,
  projectUpdates: true,
  hostingReminders: true,
  marketingEmails: false,
};

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={onChange}
    className={`w-10 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 shrink-0 ${
      checked ? "bg-zinc-900 justify-end" : "bg-zinc-200 justify-start"
    }`}
  >
    <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
  </button>
);

const SettingsPanel = () => {
  const [settings, setSettings] =
    useState<NotificationSettings>(initialSettings);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const toggleSetting = (key: ToggleKey) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    // TODO: persist this change to the backend
  };

  const handlePasswordSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all password fields.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation don't match.");
      return;
    }
    setPasswordError("");
    setPasswordSaved(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 2500);
    // TODO: send password change request to your auth provider
  };

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      {/* Password */}
      <div className="border border-zinc-300 rounded-lg p-6">
        <h2 className="font-bold text-zinc-900 mb-1">Password</h2>
        <p className="text-sm text-zinc-500 mb-5">
          Update the password used to log in.
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold text-zinc-500 mb-1.5 block">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-500 mb-1.5 block">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-zinc-500 mb-1.5 block">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        </div>

        {passwordError && (
          <div className="flex items-center gap-2 mt-4 text-red-600 text-xs font-semibold">
            <LuTriangleAlert size={14} />
            {passwordError}
          </div>
        )}
        {passwordSaved && (
          <div className="flex items-center gap-2 mt-4 text-emerald-600 text-xs font-semibold">
            <LuCheck size={14} />
            Password updated
          </div>
        )}

        <div className="flex justify-end mt-5 pt-4 border-t border-zinc-100">
          <button
            onClick={handlePasswordSave}
            className="text-xs font-semibold px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200"
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="border border-zinc-300 rounded-lg p-6">
        <h2 className="font-bold text-zinc-900 mb-1">Notifications</h2>
        <p className="text-sm text-zinc-500 mb-5">
          Choose which email notifications you'd like to receive.
        </p>

        <div className="flex flex-col divide-y divide-zinc-100">
          {notificationOptions.map(({ key, label, desc }) => (
            <div
              key={key}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-semibold text-zinc-900">{label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
              </div>
              <Toggle
                checked={settings[key]}
                onChange={() => toggleSetting(key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="border border-red-300 rounded-lg p-6">
        <h2 className="font-bold text-red-600 mb-1">Danger Zone</h2>
        <p className="text-sm text-zinc-500 mb-5">
          Deleting your account removes access to your dashboard, invoices, and
          documents. This does not cancel an active subscription — cancel it
          first from the Services page.
        </p>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="text-xs font-semibold px-4 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200"
        >
          Delete Account
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="font-bold text-zinc-900 mb-2">
              Delete your account?
            </h3>
            <p className="text-sm text-zinc-500 mb-5">
              This action is permanent and cannot be undone. Your invoices and
              documents will no longer be accessible from the dashboard.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 rounded-md border border-zinc-200 text-sm font-semibold hover:bg-zinc-50 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // TODO: call account deletion endpoint
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 py-2 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
