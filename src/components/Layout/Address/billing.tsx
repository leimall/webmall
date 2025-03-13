import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { Button, Form, Spin } from "antd";
import type { AddressFormValues } from "@/types/address";
import Input from "@/components/UI/Input";

type AddressFormProps = {
  mode: "create" | "edit";
  title: string;
  subloading: boolean;
  onSubmit: (data: AddressFormValues) => void;
  values?: Partial<AddressFormValues>;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number") // 校验国际电话号码格式
    .required("Phone number is required"),
  line1: yup.string().required("Street is required"),
  line2: yup.string().notRequired(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  stateName: yup.string().notRequired(),
  country: yup.string().required("Country is required"),
  countryName: yup.string().notRequired(),
  postalCode: yup
    .string()
    .required("Postal Code is required"),
});

const BillingAddressForm: React.FC<AddressFormProps> = ({ mode, title, onSubmit, values, subloading }) => {
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddressFormValues>({
    defaultValues: values || {
      ID: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      stateName: "",
      country: "",
      countryName: "",
      postalCode: "",
    },
    resolver: yupResolver(schema as any),
  });

  const handleAddressSelect = async (place: any) => {
    setLoading(true);
    const placeId = place.value.place_id;
    await geocodeByPlaceId(placeId)
      .then(data => {
        if (data.length > 0) {
          const components = data?.[0].address_components;
          const addressParts = {
            ID: 0,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            stateName: "",
            country: "",
            countryName: "",
            postalCode: "",
          };
          console.error("object", components);
          components.forEach((component: any) => {
            const types = component.types;

            if (types.includes("street_number") || types.includes("premise")) {
              addressParts.line1 = `${component.long_name} ${addressParts.line1}`;
            }
            if (types.includes("route") || types.includes("sublocality") || types.includes("sublocality_level_1")) {
              addressParts.line1 = `${addressParts.line1} ${component.long_name}`;
            }
            if (types.includes("locality") || types.includes("postal_town")) {
              addressParts.city = component.long_name;
            }
            if (types.includes("administrative_area_level_1")) {
              addressParts.state = component.short_name;
              addressParts.stateName = component.long_name;
            }
            if (types.includes("country")) {
              addressParts.country = component.short_name;
              addressParts.countryName = component.long_name;
            }
            if (types.includes("postal_code")) {
              addressParts.postalCode = component.long_name;
            }
          });
          setValue("line1", addressParts.line1.trim());
          setValue("city", addressParts.city);
          setValue("state", addressParts.state);
          setValue("stateName", addressParts.stateName);
          setValue("country", addressParts.country);
          setValue("countryName", addressParts.countryName);
          setValue("postalCode", addressParts.postalCode);
        } else {
          console.error("Place Details API failed:", data);
        }
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        console.error("Error fetching place details:", error);
      });
  };
  const clearPreviewData = () => {
    setValue("ID", 0);
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("line1", "");
    setValue("city", "");
    setValue("state", "");
    setValue("stateName", "");
    setValue("country", "");
    setValue("countryName", "");
    setValue("postalCode", "");
  }

  useEffect(() => {
    if (values) {
      setValue("ID", values.ID || 0);
      setValue("firstName", values.firstName || "");
      setValue("lastName", values.lastName || "");
      setValue("email", values.email || "");
      setValue("phone", values.phone || "");
      setValue("line1", values.line1 || "");
      setValue("city", values.city || "");
      setValue("state", values.state || "");
      setValue("stateName", values.stateName || "");
      setValue("country", values.country || "");
      setValue("countryName", values.countryName || "");
      setValue("postalCode", values.postalCode || "");
    }
  }, [values, setValue])

  useEffect(() => {
    if (mode === "create") {
      clearPreviewData()
    }
  }, [mode]);


  return (
    <div >
      <Form
        layout="vertical"
        className="p-2 md:p-5"
        onFinish={handleSubmit(onSubmit)}
      >

        <h3 className="text-base text-gray-800 mb-4">{title}</h3>

        <Spin spinning={subloading} delay={500}>
          <div className="grid md:grid-cols-2 gap-4">
            <Form.Item
              validateStatus={errors.firstName ? "error" : ""}
              help={errors.firstName?.message}
            >
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input
                  id="firstName"
                  label="First Name"
                  required
                  {...field}
                />}
              />
            </Form.Item>

            <Form.Item
              validateStatus={errors.lastName ? "error" : ""}
              help={errors.lastName?.message}
            >
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} id="lastName" required label="Last Name" />}
              />
            </Form.Item>

            <Form.Item
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} id="email" required label="Email" />}
              />
            </Form.Item>

            <Form.Item
              validateStatus={errors.phone ? "error" : ""}
              help={errors.phone?.message}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input {...field} id="phone" label="Phone Number" required />}
              />
            </Form.Item>
          </div>



          {/* Google Places Autocomplete */}
          <Form.Item label="Search Address">
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
              selectProps={{
                onChange: (place) => handleAddressSelect(place),
                placeholder: "Search for an address",
                isLoading: loading
              }}
              autocompletionRequest={{
                componentRestrictions: { country: ["us", "ca", "uk"] },
              }}
            />
          </Form.Item>

          {/* Form Fields */}
          <div>
            <Spin spinning={loading} delay={500}>


              <Form.Item
                validateStatus={errors.line1 ? "error" : ""}
                help={errors.line1?.message}
              >
                <Controller
                  name="line1"
                  control={control}
                  render={({ field }) =>
                    <Input id="line1" label="Street Address 1" {...field} />}
                />
              </Form.Item>

              <Form.Item
                validateStatus={errors.line2 ? "error" : ""}
                help={errors.line2?.message}
              >
                <Controller
                  name="line2"
                  control={control}
                  render={({ field }) => <Input id="line2" label="Street Address 2" {...field} />}
                />
              </Form.Item>
              <div className="grid md:grid-cols-2 gap-2">
                <Form.Item
                  validateStatus={errors.city ? "error" : ""}
                  help={errors.city?.message}
                >
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => <Input id="City" label="City" {...field} />}
                  />
                </Form.Item>

                <Form.Item

                  validateStatus={errors.state ? "error" : ""}
                  help={errors.state?.message}
                >
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => <Input {...field} label="State" id="state" required />}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={errors.country ? "error" : ""}
                  help={errors.country?.message}
                >
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => <Input {...field} label="Country" id="country" required />}
                  />
                </Form.Item>

                <Form.Item
                  validateStatus={errors.postalCode ? "error" : ""}
                  help={errors.postalCode?.message}
                >
                  <Controller
                    name="postalCode"
                    control={control}
                    render={({ field }) => <Input {...field} label="Postal Code" id="postalCode" required />}
                  />
                </Form.Item>
              </div>




              {/* Submit Button */}
              <div className="text-end">
                <Button type="primary" htmlType="submit">
                  {mode === "create" ? "OK" : "Update"}
                </Button>
                <Button className="ml-2" htmlType="reset" onClick={() => clearPreviewData()}>
                  Reset
                </Button>
              </div>
            </Spin>
          </div>
        </Spin>
      </Form>

    </div>

  );
}; export default BillingAddressForm;