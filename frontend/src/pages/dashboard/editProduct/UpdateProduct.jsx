import React, { useEffect } from "react";
import InputField from "../addProduct/InputField";
import SelectField from "../addProduct/SelectField";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useFetchProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/features/products/productsApi";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import axios from "axios";
import getBaseUrl from "../../../utils/baseURL";

const UpdateProduct = () => {
  const { id } = useParams();
  const {
    data: ProductData,
    isLoading,
    isError,
    refetch,
  } = useFetchProductByIdQuery(id);
  // console.log(ProductData)
  const [updateProduct] = useUpdateProductMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (ProductData) {
      setValue("name", ProductData.name);
      setValue("description", ProductData.description);
      setValue("category", ProductData?.category);
      setValue("trending", ProductData.trending);
      setValue("size", ProductData.size);
      setValue("oldPrice", ProductData.oldPrice);
      setValue("newPrice", ProductData.newPrice);
      setValue("productImage", ProductData.productImage);
    }
  }, [ProductData, setValue]);

  const onSubmit = async (data) => {
    const updateProductData = {
      name: data.name,
      description: data.description,
      category: data.category,
      trending: data.trending,
      size: data.size,
      oldPrice: parseFloat(data.oldPrice),
      newPrice: parseFloat(data.newPrice),
      productImage: data.productImage || ProductData.productImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/Products/edit/${id}`, updateProductData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire({
        title: "Product Updated",
        text: "Product updated successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      await refetch();
    } catch (error) {
      console.log("Failed to update Product.");
      alert("Failed to update Product.");
    }
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching Product data</div>;
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          name="name"
          placeholder="Enter Product name"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter Product description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: "", label: "Choose A Category" },
            { value: "unisex", label: "Unisex" },
            { value: "feminine", label: "Feminine" },
            { value: "masculine", label: "Masculine" },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        <InputField
          label="Size"
          name="size"
          type="text"
          placeholder="Size (ml)"
          register={register}
        />
        
        <InputField
        label="Old Price"
        name="oldPrice"
        type="number"
        placeholder="Old Price"
        step="0.01"
        register={register}
      />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          step="0.01"
          register={register}
        />

        <InputField
          label="Image URL"
          name="productImage"
          type="text"
          placeholder="Image URL"
          register={register}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
