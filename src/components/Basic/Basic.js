import axios from "axios";
import style from "./Basic.module.css";

import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

axios.defaults.baseURL = "https://send-telegram.herokuapp.com/";

const Basic = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      secondName: "",
      street: "",
      phone: "",
      house: "",
      flat: "",
    },
    onSubmit: (values, { resetForm }) => {
      const { name, lastName, secondName, street, phone, house, flat } = values;

      axios
        .post("/", { name, lastName, secondName, street, phone, house, flat })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      resetForm();
    },
  });
  return (
    <form
      className={style.Basic}
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div className={style.formWrapper}>
        <div className={style.block}>
          <TextField
            className={style.input}
            label="Прізвище *"
            variant="outlined"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            autoComplete="off"
          />

          <TextField
            className={style.input}
            label="Ім'я *"
            variant="outlined"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            autoComplete="off"
          />

          <TextField
            className={style.input}
            label="По-батькові *"
            variant="outlined"
            name="secondName"
            onChange={formik.handleChange}
            value={formik.values.secondName}
            autoComplete="off"
          />
        </div>

        <div className={style.block}>
          <TextField
            className={style.input}
            label="Телефон *"
            variant="outlined"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            autoComplete="off"
          />

          <TextField
            className={style.input}
            label="Вулиця *"
            variant="outlined"
            name="street"
            onChange={formik.handleChange}
            value={formik.values.street}
            autoComplete="off"
          />

          <TextField
            className={style.input}
            label="Дім *"
            variant="outlined"
            name="house"
            onChange={formik.handleChange}
            value={formik.values.house}
            autoComplete="off"
          />

          <TextField
            className={style.input}
            label="Квартира *"
            variant="outlined"
            name="flat"
            onChange={formik.handleChange}
            value={formik.values.flat}
            autoComplete="off"
          />
        </div>
      </div>

      <Button type="submit" className={style.button}>
        Оформити
      </Button>
    </form>
  );
};

export default Basic;
