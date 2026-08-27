"use client";

import { useState } from "react";
import { LuUser, LuCheck, LuPencil } from "react-icons/lu";

type ProfileData = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessAddress: string;
};

// Dummy — replace with the logged-in user's real data from your auth/database
const initialProfile: ProfileData = {
  fullName: "Christ",
  email: "christ@example.com",
  phone: "+62 852-3508-6814",
  businessName: "Coastal Plumbing Co.",
  businessAddress: "14 Jetty Rd, Gold Coast QLD 4217, Australia",
};

const fields: { key: keyof ProfileData; label: string; type?: string }[] = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email Address", type: "email" },
  { key: "phone", label: "Phone Number", type: "tel" },
  { key: "businessName", label: "Business Name" },
  { key: "businessAddress", label: "Business Address" },
];

const ProfileForm = () => {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [draft, setDraft] = useState<ProfileData>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleChange = (key: keyof ProfileData, value: string) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setProfile(draft);
    setIsEditing(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
    // TODO: send `draft` to your API / database
  };

  const handleCancel = () => {
    setDraft(profile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl">
      {/* Avatar + name summary */}
      <div className="border border-zinc-200 rounded-lg p-6 flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xl font-bold shrink-0">
          {profile.fullName.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-lg text-zinc-900">{profile.fullName}</p>
          <p className="text-sm text-zinc-500">{profile.businessName}</p>
        </div>
      </div>

      {/* Details form */}
      <div className="border border-zinc-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-zinc-900">Account Details</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              <LuPencil size={14} />
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {fields.map(({ key, label, type }) => (
            <div key={key}>
              <label className="text-xs font-semibold text-zinc-500 mb-1.5 block">
                {label}
              </label>
              {isEditing ? (
                <input
                  type={type || "text"}
                  value={draft[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                />
              ) : (
                <p className="text-sm text-zinc-900 flex items-center gap-2">
                  <LuUser className="text-zinc-300 shrink-0" size={14} />
                  {profile[key]}
                </p>
              )}
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-zinc-100">
            <button
              onClick={handleCancel}
              className="text-xs font-semibold px-4 py-2 rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-xs font-semibold px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        )}

        {savedMessage && (
          <div className="flex items-center gap-2 mt-4 text-emerald-600 text-xs font-semibold">
            <LuCheck size={14} />
            Profile updated
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
