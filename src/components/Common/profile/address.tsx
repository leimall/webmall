"use client";
import { createMyselfAddress, updateMyselfAddress } from "@/apis/address";
import AddressForm from "@/components/Layout/Address";
import { message } from "antd";
import { useState } from "react";
import { data } from "tailwindcss/defaultTheme";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetData: () => void;
  mode: "create" | "edit";
  addressData?: any; // Optional address data for editing
}

const AddressModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onGetData,
  mode,
  addressData,
}) => {
  const [subloading, setSubLoading] = useState(false);
  const handleSubmit = async (data: any) => {
    setSubLoading(true);
    if (data.ID) {
      try {
        await updateMyselfAddress(data);
        message.success("Update Address Successfully");
      } catch (error) {
        setSubLoading(false);
        message.error("Failed to update address");
      }
    } else {
      try {
        await createMyselfAddress(data);
        message.success("Address added successfully");
      } catch (error) {
        setSubLoading(false);
        message.error("Failed to add address");
      }
    }
    onGetData();
    setSubLoading(false);
    onClose();
  };


  return (
    <div className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="z-[1001] w-full md:w-1/2 p-4 relative bg-white rounded shadow-lg">
          {/* Close Icon */}
          <button
            className="absolute text-xl top-4 right-4 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
          <AddressForm
            mode={mode}
            title={mode === "create" ? "Create Address" : "Edit Address"}
            onSubmit={handleSubmit}
            values={addressData}
            subloading={subloading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressModal;