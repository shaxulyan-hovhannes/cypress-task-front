import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import OutlinedTextInput from "components/ui/outlined-text-input/OutlinedTextInput";
import SubmitButton from "components/ui/submit-button/SubmitButton";

import useProducts from "hooks/useProducts";

import { createProduct } from "api/products";

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  price: Yup.number().required(),
});

const ProductCreateForm = () => {
  const { handleAddProduct } = useProducts();

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: ProductSchema,
    onSubmit: async ({ name, price }) => {
      const response = await createProduct({
        name,
        price: parseFloat(price),
      });
      handleAddProduct(response.data);
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-home-products-create-form-field">
        <OutlinedTextInput
          label="Product name"
          name="name"
          onChange={handleChange}
          value={values.name}
          setFieldValue={setFieldValue}
          error={!!errors.name}
          helperText={errors.name}
          labelColor="#5C5C5C"
        />
      </div>
      <div className="admin-home-products-create-form-field">
        <OutlinedTextInput
          label="Product price"
          name="price"
          onChange={handleChange}
          value={values.price}
          setFieldValue={setFieldValue}
          error={!!errors.price}
          helperText={errors.price}
          labelColor="#5C5C5C"
        />
      </div>
      <div className="admin-home-products-create-form-submit-button">
        <SubmitButton
          value="Add new product"
          btnSx={{
            "& input": {
              color: "#5C5C5C",
            },
          }}
        />
      </div>
    </form>
  );
};

export default ProductCreateForm;
