import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import mercedes from "/helios/helios.jpg";
import ele2 from "/elements/bubble.png";
import {
  FaCar,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaComment,
  FaWhatsapp,
  FaWater,
} from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
const Requirement = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    requirement: Yup.string().required("Car model is required"),
    fromDate: Yup.date()
      .required("Start date is required")
      .max(new Date(), "Start date cannot be in the future"),
    toDate: Yup.date()
      .required("End date is required")
      .min(Yup.ref("fromDate"), "End date must be after start date"),
    budget: Yup.number()
      .required("Budget is required")
      .min(100, "Budget must be at least $100"),
    quantity: Yup.number().required("Quantity is required"),

    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
  });
  // Formik hook
  const formik = useFormik({
    initialValues: {
      requirement: "",
      fromDate: "",
      toDate: "",
      quantity: "",
      budget: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("asdasdasdasdadsads");
      const YOUR_WHATSAPP_NUMBER = "+91 8306861416";
      // Format the WhatsApp message
      const message = `New Order Requirement:
    
      Requirement for: ${values.requirement}
      From Date: ${values.fromDate}
      To Date: ${values.toDate}
      quantity:${values.quantity}
      Budget: $${values.budget}
      Description: ${values.description}
      
      Please contact me regarding this request.`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message.trim());

      // Use the official WhatsApp API URL
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodedMessage}`;

      // Try to open in a new tab (works on desktop)
      const newWindow = window.open(whatsappUrl, "_blank");

      // Fallback for mobile devices if new tab doesn't work
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        window.location.href = whatsappUrl;
      }

      // Reset the form after submission
    },
  });

  return (
    <div className=" bg-gray-100  py-14  px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto bg-white flex items-center min-h-[60vh]  justify-center relative z-20 rounded-xl overflow-hidden ">
        <img src={ele2} alt="" className="absolute  " />
        <img
          src={mercedes}
          alt=""
          className="hidden lg:block w-[464px] min-h-[47vh] relative z-10  object-cover rounded-l-xl"
        />
        <div className="p-10 border-gray-300 border z-10 rounded-r-xl bg-white shadow-md ">
          <div className="text-center flex flex-col gap-2 my-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Finding the best deal in market ?
            </h2>
            <p className="mt-2 text-sm italic lg:text-lg my-4 text-gray-600">
              Tell us what kind of item you're looking for and we'll find the
              perfect match!
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6 lg:w-[800px]"
          >
            {/* Car Model Field */}
            <div>
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-gray-700"
              >
                Requirement for
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaWater className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="requirement"
                  name="requirement"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.requirement}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="e.g. 20 Water Jars "
                />
              </div>
              {formik.touched.requirement && formik.errors.requirement ? (
                <p className="mt-2 text-sm text-red-600">
                  {console.log(formik.errors)}
                  {formik.errors.requirement}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBottleWater className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="e.g. 10"
                />
              </div>
              {formik.touched.quantity && formik.errors.quantity ? (
                <p className="mt-2 text-sm text-red-600">
                  {formik.errors.quantity}
                </p>
              ) : null}
            </div>

            {/* Date Range Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fromDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  From Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fromDate}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                {formik.touched.fromDate && formik.errors.fromDate ? (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.fromDate}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="toDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  To Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="toDate"
                    name="toDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.toDate}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                {formik.touched.toDate && formik.errors.toDate ? (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.toDate}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Budget Field */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget (₹)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMoneyBillWave className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.budget}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="800"
                />
              </div>
              {formik.touched.budget && formik.errors.budget ? (
                <p className="mt-2 text-sm text-red-600">
                  {formik.errors.budget}
                </p>
              ) : null}
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute top-2 left-0 pl-3 flex items-start pointer-events-none">
                  <FaComment className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Tell us more about your requirements "
                />
              </div>
              {formik.touched.description && formik.errors.description ? (
                <p className="mt-2 text-sm text-red-600">
                  {formik.errors.description}
                </p>
              ) : null}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                // disabled={formik.isSubmitting}
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                {"Send via WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
