import React from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { useState } from "react";
import FormModal from "../common/FormModal";
import AddCategoryForm from "../Categories/AddCategoryForm";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const editItemSchema = Yup.object().shape({
  product: Yup.string().required("Required"),
  quantity: Yup.number().required("Required"),
  salesPrice: Yup.number().required("Required"),
  hsn: Yup.string().required("Required"),
  itemCode: Yup.string().required("Required"),
  purchasePrice: Yup.number().required("Required"),
  mrp: Yup.number().required("Required"),
  discount: Yup.number().required("Required"),
  texSlab: Yup.number().required("Required"),
  categoryId: Yup.string().required("Required"),
});

const EditItemForm = ({
  submitCategoryData,
  categories,
  editId,
  submitEditItem,
}) => {
  const { items } = useSelector((state) => state);
  const itemData = items.find((x) => x.id === editId);
  const saveItem = (data) => {
    console.log(data);
    submitEditItem(data, editId);
  };

  const [newCategoryModel, setNewCategoryModel] = useState(false);
  const texSlabArray = [0, 5, 12, 18, 28];
  const handleClosecategoryModal = () => {
    setNewCategoryModel(false);
  };

  const onNewCategoryClick = () => {
    setNewCategoryModel(true);
  };

  return (
    <div>
      {newCategoryModel && (
        <FormModal
          title="Add New Category"
          open={newCategoryModel}
          handleClose={handleClosecategoryModal}
        >
          <AddCategoryForm
            submitCategoryData={submitCategoryData}
            handleClose={handleClosecategoryModal}
          />
        </FormModal>
      )}
      <Formik
        initialValues={{
          ...itemData,
        }}
        validationSchema={editItemSchema}
        onSubmit={(values) => {
          saveItem(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field name="product">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Product"
                        margin="dense"
                        variant="outlined"
                        type="text"
                        {...field}
                      />
                      {errors.product && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.product}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="quantity">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Qauntity"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        {...field}
                      />
                      {errors.quantity && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.quantity}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "15px 0px",
                  }}
                >
                  <div style={{ flexGrow: 1, marginRight: "5px" }}>
                    <Field
                      style={{
                        height: "39px",
                        width: "100%",
                        padding: "0px 15px",
                        border: "2px solid #cecece",
                        borderRadius: "5px",
                        marginTop: "7px",
                      }}
                      as="select"
                      name="categoryId"
                    >
                      {categories.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="categoryId"
                      component={
                        <div className="error" style={{ color: "red" }}>
                          {errors.categoryId}
                        </div>
                      }
                    />
                  </div>

                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                      onClick={onNewCategoryClick}
                    >
                      Add new category
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field name="itemCode">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Item Code/ Bar Code"
                        margin="dense"
                        variant="outlined"
                        type="text"
                        {...field}
                      />
                      {errors.itemCode && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.itemCode}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="hsn">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="HSN/ SAC Code"
                        margin="dense"
                        variant="outlined"
                        type="text"
                        {...field}
                      />
                      {errors.hsn && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.hsn}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="salesPrice">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Sales Price"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        {...field}
                      />
                      {errors.salesPrice && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.salesPrice}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="purchasePrice">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Purchase Price"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        {...field}
                      />
                      {errors.purchasePrice && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.purchasePrice}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="mrp">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="MRP"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        {...field}
                      />
                      {errors.mrp && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.mrp}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="discount">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Discount"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        {...field}
                      />
                      {errors.discount && (
                        <div className="error" style={{ color: "red" }}>
                          {errors.discount}
                        </div>
                      )}
                    </div>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  style={{
                    height: "40px",
                    width: "100%",
                    padding: "0px 15px",
                    border: "2px solid #cecece",
                    borderRadius: "5px",
                    marginTop: "7px",
                  }}
                  as="select"
                  name="texSlab"
                >
                  {texSlabArray.map((itemTex) => (
                    <option value={itemTex} key={itemTex}>
                      {itemTex}
                    </option>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field name="comment">
                  {({ field }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Comments"
                        margin="dense"
                        variant="outlined"
                        type="text"
                        {...field}
                      />
                    </div>
                  )}
                </Field>
              </Grid>
            </Grid>
            <Box marginY={3} textAlign="right">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
              >
                save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditItemForm;
